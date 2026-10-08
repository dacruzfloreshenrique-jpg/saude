import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Zap, Filter } from 'lucide-react';
import { recipes, Recipe } from '../data/recipes';
import { trackEvent } from '../utils/analytics';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Dinner', value: 'dinner' },
  { label: 'Snack', value: 'snack' },
  { label: 'Quick', value: 'quick' },
  { label: 'Meal Prep', value: 'meal-prep' },
];

export default function Recipes() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecipes = useMemo(() => {
    let result = recipes;

    if (activeFilter === 'quick') {
      result = result.filter(r => r.totalTime <= 15);
    } else if (activeFilter === 'meal-prep') {
      result = result.filter(r => r.tags.includes('meal-prep'));
    } else if (activeFilter !== 'all') {
      result = result.filter(r => r.mealCategory.includes(activeFilter as any));
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(r =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.ingredients.some(i => i.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeFilter, searchQuery]);

  const handleRecipeClick = (slug: string) => {
    trackEvent('recipe_viewed', { recipe: slug });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-24 lg:pb-12">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-3">High-Protein Recipes</h1>
        <p className="text-charcoal-light max-w-lg mx-auto">
          Simple, practical recipes designed for real life. Every recipe prioritizes protein and uses accessible ingredients.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-light" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-beige bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-sm"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-12">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all btn-press ${
              activeFilter === filter.value
                ? 'bg-forest text-white'
                : 'bg-white border border-beige text-charcoal-light hover:border-sage'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.slug} recipe={recipe} onClick={() => handleRecipeClick(recipe.slug)} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-charcoal-light">No recipes found. Try a different search or filter.</p>
        </div>
      )}
    </div>
  );
}

function RecipeCard({ recipe, onClick }: { recipe: Recipe; onClick: () => void }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      onClick={onClick}
      className="card-hover group block"
    >
      <div className="bg-white rounded-2xl border border-beige overflow-hidden h-full">
        {/* Image area */}
        <div className={`bg-gradient-to-br ${recipe.color} p-8 flex items-center justify-center`}>
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{recipe.image}</span>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h3 className="font-medium text-forest mb-2 group-hover:text-sage-dark transition-colors">
            {recipe.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-charcoal-light">
            <span className="inline-flex items-center gap-1">
              <Zap className="w-3 h-3" /> {recipe.estimatedProtein}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" /> {recipe.totalTime} min
            </span>
          </div>
          <div className="flex flex-wrap gap-1 mt-3">
            {recipe.mealCategory.map(cat => (
              <span key={cat} className="px-2 py-0.5 bg-cream text-xs text-charcoal-light rounded-full capitalize">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

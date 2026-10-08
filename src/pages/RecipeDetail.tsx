import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Zap, ChefHat, Users, Bookmark, ArrowRight, Lightbulb, RefreshCw } from 'lucide-react';
import { getRecipeBySlug, recipes } from '../data/recipes';
import { trackEvent, trackProductCTA } from '../utils/analytics';
import { useEffect } from 'react';

const GUMROAD_URL = 'https://floreshenrique.gumroad.com/l/ssuoev';

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;

  useEffect(() => {
    if (recipe) {
      trackEvent('recipe_viewed', { recipe: recipe.slug });
      // Update document title
      document.title = `${recipe.title} — Protein Simple`;
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl text-forest mb-4">Recipe not found</h1>
        <Link to="/recipes" className="text-forest hover:underline">← Back to recipes</Link>
      </div>
    );
  }

  // Get related recipes
  const relatedRecipes = recipes
    .filter(r => r.slug !== recipe.slug && r.mealCategory.some(c => recipe.mealCategory.includes(c)))
    .slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.description,
    prepTime: `PT${recipe.prepTime}M`,
    cookTime: `PT${recipe.cookTime}M`,
    totalTime: `PT${recipe.totalTime}M`,
    recipeYield: `${recipe.servings} servings`,
    recipeCategory: recipe.mealCategory.join(', '),
    keywords: recipe.tags.join(', '),
    recipeIngredient: recipe.ingredientCategories.flatMap(c => c.items),
    recipeInstructions: recipe.instructions.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
  };

  return (
    <div className="pb-24 lg:pb-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-sm text-charcoal-light">
          <Link to="/" className="hover:text-forest">Home</Link>
          <span>/</span>
          <Link to="/recipes" className="hover:text-forest">Recipes</Link>
          <span>/</span>
          <span className="text-forest">{recipe.title}</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className={`bg-gradient-to-br ${recipe.color} rounded-3xl p-8 lg:p-12 mb-8`}>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-6xl lg:text-7xl">{recipe.image}</span>
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {recipe.mealCategory.map(cat => (
                  <span key={cat} className="px-2.5 py-1 bg-white/60 text-xs font-medium text-forest rounded-full capitalize">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-3xl lg:text-4xl text-forest">{recipe.title}</h1>
            </div>
          </div>
          <p className="text-charcoal leading-relaxed max-w-2xl mb-6">{recipe.description}</p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-charcoal">
              <Zap className="w-4 h-4 text-sage-dark" /> {recipe.estimatedProtein}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-charcoal">
              <Clock className="w-4 h-4 text-sage-dark" /> {recipe.totalTime} min total
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-charcoal">
              <ChefHat className="w-4 h-4 text-sage-dark" /> {recipe.difficulty}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-charcoal">
              <Users className="w-4 h-4 text-sage-dark" /> {recipe.servings} servings
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ingredients */}
            <div className="bg-white rounded-2xl border border-beige p-6">
              <h2 className="font-serif text-xl text-forest mb-4">Ingredients</h2>
              <div className="space-y-4">
                {recipe.ingredientCategories.map(cat => (
                  <div key={cat.category}>
                    <h3 className="text-xs font-medium text-charcoal-light uppercase tracking-wide mb-2">{cat.category}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-charcoal">
                          <span className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-2xl border border-beige p-6">
              <h2 className="font-serif text-xl text-forest mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest text-white text-sm flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    <p className="text-sm text-charcoal leading-relaxed pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Substitutions */}
            <div className="bg-cream rounded-2xl p-6">
              <h2 className="font-serif text-xl text-forest mb-4 flex items-center gap-2">
                <RefreshCw className="w-5 h-5" /> Substitutions
              </h2>
              <div className="space-y-3">
                {recipe.substitutions.map((sub, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-charcoal-light line-through">{sub.original}</span>
                    <ArrowRight className="w-4 h-4 text-sage" />
                    <span className="font-medium text-forest">{sub.swap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Meal Prep Tip */}
            <div className="bg-sage/5 rounded-2xl p-6">
              <h2 className="font-serif text-xl text-forest mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> Meal Prep Tip
              </h2>
              <p className="text-sm text-charcoal leading-relaxed">{recipe.mealPrepTip}</p>
            </div>

            {/* FAQ */}
            {recipe.faq.length > 0 && (
              <div className="bg-white rounded-2xl border border-beige p-6">
                <h2 className="font-serif text-xl text-forest mb-4">FAQ</h2>
                <div className="space-y-4">
                  {recipe.faq.map((item, i) => (
                    <div key={i}>
                      <h3 className="font-medium text-charcoal text-sm mb-1">{item.question}</h3>
                      <p className="text-sm text-charcoal-light leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl border border-beige p-5">
              <h3 className="font-medium text-forest mb-3">Quick Info</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-charcoal-light">Prep time</dt>
                  <dd className="font-medium">{recipe.prepTime} min</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-charcoal-light">Cook time</dt>
                  <dd className="font-medium">{recipe.cookTime} min</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-charcoal-light">Total time</dt>
                  <dd className="font-medium">{recipe.totalTime} min</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-charcoal-light">Servings</dt>
                  <dd className="font-medium">{recipe.servings}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-charcoal-light">Protein (est.)</dt>
                  <dd className="font-medium text-forest">{recipe.estimatedProtein}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-charcoal-light">Difficulty</dt>
                  <dd className="font-medium">{recipe.difficulty}</dd>
                </div>
              </dl>
            </div>

            {/* Save Button */}
            <button
              onClick={() => {
                trackEvent('recipe_saved', { recipe: recipe.slug });
                alert('Recipe saved! (Feature coming soon)');
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors btn-press"
            >
              <Bookmark className="w-4 h-4" /> SAVE RECIPE
            </button>

            {/* Build Another Meal CTA */}
            <Link
              to="/tools/what-should-i-eat"
              className="block bg-cream rounded-2xl p-5 text-center hover:bg-beige-light transition-colors"
            >
              <p className="font-medium text-forest text-sm mb-1">Have ingredients ready?</p>
              <p className="text-xs text-charcoal-light">Use the free meal builder →</p>
            </Link>

            {/* 21-Day Plan CTA */}
            <div className="bg-gradient-to-br from-forest to-forest-light rounded-2xl p-5 text-center">
              <p className="text-white font-medium text-sm mb-2">Want the full plan?</p>
              <p className="text-white/70 text-xs mb-3">21 days of high-protein meals planned for you.</p>
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackProductCTA('recipe_sidebar')}
                className="inline-flex items-center gap-1 px-5 py-2 bg-white text-forest text-sm font-medium rounded-full hover:bg-cream transition-colors"
              >
                GET THE PLAN <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-forest mb-6">Related Recipes</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedRecipes.map(r => (
                <Link key={r.slug} to={`/recipes/${r.slug}`} className="card-hover group">
                  <div className="bg-white rounded-2xl border border-beige overflow-hidden">
                    <div className={`bg-gradient-to-br ${r.color} p-6 flex items-center justify-center`}>
                      <span className="text-4xl">{r.image}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-forest text-sm group-hover:text-sage-dark transition-colors">{r.title}</h3>
                      <p className="text-xs text-charcoal-light mt-1">{r.estimatedProtein} · {r.totalTime} min</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

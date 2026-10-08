import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, RefreshCw, Zap } from 'lucide-react';
import { trackEvent, trackProductCTA } from '../utils/analytics';

const GUMROAD_URL = 'https://floreshenrique.gumroad.com/l/ssuoev';

interface PlateSection {
  id: string;
  label: string;
  emoji: string;
  color: string;
  options: { name: string; protein: number }[];
}

const plateSections: PlateSection[] = [
  {
    id: 'protein',
    label: 'Protein',
    emoji: '🥩',
    color: 'bg-red-50 border-red-200',
    options: [
      { name: 'Chicken breast', protein: 31 },
      { name: 'Salmon', protein: 23 },
      { name: 'Eggs (2)', protein: 12 },
      { name: 'Greek yogurt', protein: 17 },
      { name: 'Tofu', protein: 20 },
      { name: 'Turkey', protein: 25 },
      { name: 'Tuna', protein: 26 },
      { name: 'Beans (1 cup)', protein: 15 },
      { name: 'Cottage cheese', protein: 14 },
    ]
  },
  {
    id: 'vegetables',
    label: 'Vegetables / Fiber',
    emoji: '🥬',
    color: 'bg-green-50 border-green-200',
    options: [
      { name: 'Broccoli', protein: 4 },
      { name: 'Spinach', protein: 3 },
      { name: 'Bell peppers', protein: 1 },
      { name: 'Tomatoes', protein: 1 },
      { name: 'Green beans', protein: 2 },
      { name: 'Kale', protein: 3 },
      { name: 'Mixed salad greens', protein: 2 },
      { name: 'Roasted vegetables', protein: 3 },
    ]
  },
  {
    id: 'carbs',
    label: 'Carbohydrate',
    emoji: '🌾',
    color: 'bg-amber-50 border-amber-200',
    options: [
      { name: 'Brown rice', protein: 5 },
      { name: 'Quinoa', protein: 8 },
      { name: 'Sweet potato', protein: 2 },
      { name: 'Whole wheat bread', protein: 4 },
      { name: 'Oats', protein: 6 },
      { name: 'Whole wheat pasta', protein: 7 },
      { name: 'Tortilla', protein: 4 },
    ]
  },
  {
    id: 'fats',
    label: 'Healthy Fat',
    emoji: '🥑',
    color: 'bg-yellow-50 border-yellow-200',
    options: [
      { name: 'Avocado', protein: 2 },
      { name: 'Olive oil', protein: 0 },
      { name: 'Almonds', protein: 6 },
      { name: 'Walnuts', protein: 4 },
      { name: 'Chia seeds', protein: 4 },
      { name: 'Peanut butter', protein: 7 },
    ]
  }
];

export default function BuildMyPlate() {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const toggleSelection = (sectionId: string, optionName: string) => {
    setSelections(prev => ({
      ...prev,
      [sectionId]: prev[sectionId] === optionName ? '' : optionName
    }));
    setShowResult(false);
  };

  const totalProtein = useMemo(() => {
    let total = 0;
    plateSections.forEach(section => {
      const selected = selections[section.id];
      if (selected) {
        const option = section.options.find(o => o.name === selected);
        if (option) total += option.protein;
      }
    });
    return total;
  }, [selections]);

  const allSelected = plateSections.every(s => selections[s.id]);

  const handleGenerate = () => {
    setShowResult(true);
    trackEvent('plate_builder_completed', { protein: totalProtein });
  };

  const handleReset = () => {
    setSelections({});
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-24 lg:pb-12">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <Link to="/tools" className="inline-flex items-center gap-1 text-sm text-charcoal-light hover:text-forest mb-4">
          <ArrowLeft className="w-4 h-4" /> All Tools
        </Link>
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-3">Build My Protein Plate</h1>
        <p className="text-charcoal-light max-w-lg mx-auto">
          Create a balanced high-protein plate by selecting one item from each category. See your estimated protein total.
        </p>
      </div>

      {/* Plate Builder */}
      <div className="space-y-6 mb-8">
        {plateSections.map(section => (
          <div key={section.id} className="bg-white rounded-2xl border border-beige p-5">
            <h3 className="font-medium text-forest mb-3 flex items-center gap-2">
              <span>{section.emoji}</span> {section.label}
              {selections[section.id] && (
                <span className="ml-auto text-xs bg-sage/10 text-sage-dark px-2 py-1 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" /> {selections[section.id]}
                </span>
              )}
            </h3>
            <div className="flex flex-wrap gap-2">
              {section.options.map(option => (
                <button
                  key={option.name}
                  onClick={() => toggleSelection(section.id, option.name)}
                  className={`px-3 py-2 rounded-full text-sm transition-all btn-press ${
                    selections[section.id] === option.name
                      ? 'bg-forest text-white shadow-md'
                      : 'bg-cream text-charcoal hover:bg-beige'
                  }`}
                >
                  {option.name}
                  <span className="ml-1 text-xs opacity-70">({option.protein}g)</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Visual Plate */}
      <div className="bg-white rounded-3xl border border-beige p-6 lg:p-8 mb-8">
        <h3 className="font-serif text-xl text-forest mb-6 text-center">Your Plate</h3>
        <div className="relative w-64 h-64 mx-auto mb-6">
          {/* Plate circle */}
          <div className="absolute inset-0 rounded-full border-4 border-beige bg-cream" />
          
          {/* Sections */}
          <div className="absolute inset-2 grid grid-cols-2 grid-rows-2 gap-1">
            {plateSections.map((section, i) => {
              const selected = selections[section.id];
              const colors = ['bg-red-100', 'bg-green-100', 'bg-amber-100', 'bg-yellow-100'];
              return (
                <div
                  key={section.id}
                  className={`${colors[i]} rounded-full flex flex-col items-center justify-center p-2 transition-all ${
                    selected ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <span className="text-lg">{section.emoji}</span>
                  <span className="text-[10px] text-center text-charcoal font-medium leading-tight mt-1">
                    {selected || section.label.split('/')[0].trim()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Protein Total */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-sage/10 rounded-full">
            <Zap className="w-5 h-5 text-sage-dark" />
            <span className="font-serif text-2xl text-forest">{totalProtein}g</span>
            <span className="text-sm text-charcoal-light">estimated protein</span>
          </div>
        </div>
      </div>

      {/* Generate / Result */}
      {!showResult ? (
        <div className="flex justify-center gap-4">
          <button
            onClick={handleGenerate}
            disabled={!allSelected}
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed btn-press"
          >
            Generate My Plate <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-4 text-charcoal-light hover:text-forest transition-colors"
          >
            <RefreshCw className="w-4 h-4" /> Reset
          </button>
        </div>
      ) : (
        <div className="animate-fade-in-up space-y-6">
          {/* Result Summary */}
          <div className="bg-gradient-to-br from-sage/10 to-cream rounded-2xl p-6 border border-sage/20">
            <h3 className="font-serif text-xl text-forest mb-4">Your High-Protein Plate</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {plateSections.map(section => {
                const selected = selections[section.id];
                const option = section.options.find(o => o.name === selected);
                return (
                  <div key={section.id} className="flex items-center justify-between bg-white rounded-xl px-4 py-3">
                    <span className="text-sm text-charcoal">{selected}</span>
                    <span className="text-sm font-medium text-sage-dark">{option?.protein}g protein</span>
                  </div>
                );
              })}
            </div>
            <div className="text-center pt-3 border-t border-sage/20">
              <span className="font-serif text-3xl text-forest">{totalProtein}g</span>
              <span className="text-sm text-charcoal-light ml-2">total estimated protein</span>
            </div>
          </div>

          {/* Substitutions */}
          <div className="bg-cream rounded-2xl p-5">
            <h4 className="font-medium text-forest mb-3 flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> Swap Ideas
            </h4>
            <p className="text-sm text-charcoal-light">
              Try swapping your protein for salmon or tofu for variety. Replace rice with quinoa for extra protein. 
              Add chia seeds to boost your healthy fat protein content.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                trackEvent('recipe_saved', { type: 'plate-builder' });
                alert('Plate saved! (Feature coming soon)');
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors btn-press"
            >
              SAVE THIS MEAL
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-beige text-forest font-medium rounded-full hover:border-sage transition-colors btn-press"
            >
              BUILD ANOTHER
            </button>
          </div>

          {/* 21-Day Plan CTA */}
          <div className="bg-gradient-to-br from-forest to-forest-light rounded-2xl p-6 text-center">
            <p className="text-white font-medium mb-2">Like this? Get 21 days of planned meals.</p>
            <p className="text-white/70 text-sm mb-4">The 21-Day High-Protein Meal Plan takes the guesswork out entirely.</p>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProductCTA('plate_builder')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest font-medium rounded-full hover:bg-cream transition-colors btn-press text-sm"
            >
              GET 21 DAYS OF MEALS <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

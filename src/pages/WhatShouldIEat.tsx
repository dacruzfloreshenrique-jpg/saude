import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, Zap, ChefHat, Check, Lightbulb, RefreshCw, Bookmark } from 'lucide-react';
import { findMealRecommendation, getIngredientCategories } from '../utils/mealMatcher';
import { trackEvent, trackProductCTA } from '../utils/analytics';
import { Recipe } from '../data/recipes';

const GUMROAD_URL = 'https://floreshenrique.gumroad.com/l/ssuoev';

const categories = getIngredientCategories();

const categoryIcons: Record<string, string> = {
  protein: '🥩',
  carbohydrates: '🌾',
  vegetables: '🥬',
  other: '✨'
};

const timeOptions = [
  { value: '5', label: '5 minutes', desc: 'Super quick' },
  { value: '10', label: '10 minutes', desc: 'Quick & easy' },
  { value: '20', label: '20 minutes', desc: 'Standard' },
  { value: '30+', label: '30+ minutes', desc: 'No rush' },
];

const mealTypes = [
  { value: 'breakfast', label: 'Breakfast', emoji: '🌅' },
  { value: 'lunch', label: 'Lunch', emoji: '☀️' },
  { value: 'dinner', label: 'Dinner', emoji: '🌙' },
  { value: 'snack', label: 'Snack', emoji: '🍎' },
];

export default function WhatShouldIEat() {
  const [step, setStep] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMealType, setSelectedMealType] = useState('');
  const [result, setResult] = useState<Recipe | null>(null);

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleGenerate = () => {
    trackEvent('tool_completed', { tool: 'what-should-i-eat' });
    const recommendation = findMealRecommendation({
      ingredients: selectedIngredients,
      time: selectedTime,
      mealType: selectedMealType,
    });
    setResult(recommendation);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedIngredients([]);
    setSelectedTime('');
    setSelectedMealType('');
    setResult(null);
  };

  const canProceedStep1 = selectedIngredients.length >= 2;
  const canProceedStep2 = selectedTime !== '';
  const canProceedStep3 = selectedMealType !== '';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-24 lg:pb-12">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <Link to="/tools" className="inline-flex items-center gap-1 text-sm text-charcoal-light hover:text-forest mb-4">
          <ArrowLeft className="w-4 h-4" /> All Tools
        </Link>
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-3">What Should I Eat?</h1>
        <p className="text-charcoal-light max-w-lg mx-auto">
          Tell us what you have and we'll suggest a high-protein meal you can make right now.
        </p>
      </div>

      {/* Progress */}
      {step < 4 && (
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map(s => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                s <= step ? 'bg-forest text-white' : 'bg-beige text-charcoal-light'
              }`}>
                {s < step ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 3 && <div className={`w-8 lg:w-16 h-0.5 ${s < step ? 'bg-forest' : 'bg-beige'}`} />}
            </div>
          ))}
        </div>
      )}

      {/* Step 1: Ingredients */}
      {step === 1 && (
        <div className="animate-fade-in">
          <h2 className="text-xl font-medium text-forest mb-2 text-center">What do you have?</h2>
          <p className="text-sm text-charcoal-light text-center mb-8">Select all that apply (minimum 2)</p>

          <div className="space-y-6">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-charcoal-light uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span>{categoryIcons[category]}</span> {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <button
                      key={item}
                      onClick={() => toggleIngredient(item)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all btn-press ${
                        selectedIngredients.includes(item)
                          ? 'bg-forest text-white shadow-md'
                          : 'bg-white border border-beige text-charcoal hover:border-sage hover:bg-sage/5'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => { trackEvent('tool_started', { tool: 'what-should-i-eat' }); setStep(2); }}
              disabled={!canProceedStep1}
              className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed btn-press"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Time */}
      {step === 2 && (
        <div className="animate-fade-in">
          <h2 className="text-xl font-medium text-forest mb-2 text-center">How much time do you have?</h2>
          <p className="text-sm text-charcoal-light text-center mb-8">Choose your available prep time</p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {timeOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setSelectedTime(option.value)}
                className={`p-5 rounded-2xl text-center transition-all btn-press ${
                  selectedTime === option.value
                    ? 'bg-forest text-white shadow-lg'
                    : 'bg-white border border-beige hover:border-sage'
                }`}
              >
                <Clock className={`w-6 h-6 mx-auto mb-2 ${selectedTime === option.value ? 'text-white' : 'text-sage'}`} />
                <p className="font-medium">{option.label}</p>
                <p className={`text-xs mt-1 ${selectedTime === option.value ? 'text-white/70' : 'text-charcoal-light'}`}>
                  {option.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 px-6 py-3 text-charcoal-light hover:text-forest transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!canProceedStep2}
              className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed btn-press"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Meal Type */}
      {step === 3 && (
        <div className="animate-fade-in">
          <h2 className="text-xl font-medium text-forest mb-2 text-center">What are you making?</h2>
          <p className="text-sm text-charcoal-light text-center mb-8">Select your meal type</p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {mealTypes.map(type => (
              <button
                key={type.value}
                onClick={() => setSelectedMealType(type.value)}
                className={`p-5 rounded-2xl text-center transition-all btn-press ${
                  selectedMealType === type.value
                    ? 'bg-forest text-white shadow-lg'
                    : 'bg-white border border-beige hover:border-sage'
                }`}
              >
                <span className="text-3xl block mb-2">{type.emoji}</span>
                <p className="font-medium">{type.label}</p>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 px-6 py-3 text-charcoal-light hover:text-forest transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={handleGenerate}
              disabled={!canProceedStep3}
              className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed btn-press"
            >
              Generate Meal <Zap className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Result */}
      {step === 4 && result && (
        <div className="animate-fade-in-up">
          <div className="bg-white rounded-3xl border border-beige overflow-hidden shadow-sm">
            {/* Result Header */}
            <div className={`bg-gradient-to-br ${result.color} p-6 lg:p-8`}>
              <div className="flex items-start gap-4">
                <span className="text-5xl">{result.image}</span>
                <div>
                  <p className="text-xs text-charcoal-light uppercase tracking-wide mb-1">Your meal suggestion</p>
                  <h2 className="font-serif text-2xl lg:text-3xl text-forest">{result.title}</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full text-sm text-charcoal">
                  <Zap className="w-3.5 h-3.5 text-sage-dark" /> {result.estimatedProtein}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full text-sm text-charcoal">
                  <Clock className="w-3.5 h-3.5 text-sage-dark" /> {result.totalTime} min
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 rounded-full text-sm text-charcoal">
                  <ChefHat className="w-3.5 h-3.5 text-sage-dark" /> {result.difficulty}
                </span>
              </div>
            </div>

            {/* Result Body */}
            <div className="p-6 lg:p-8 space-y-6">
              <p className="text-charcoal-light leading-relaxed">{result.description}</p>

              {/* Ingredients */}
              <div>
                <h3 className="font-medium text-forest mb-3">Ingredients</h3>
                <div className="space-y-3">
                  {result.ingredientCategories.map(cat => (
                    <div key={cat.category}>
                      <p className="text-xs text-charcoal-light uppercase tracking-wide mb-1">{cat.category}</p>
                      <ul className="space-y-1">
                        {cat.items.map((item, i) => (
                          <li key={i} className="text-sm text-charcoal flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="font-medium text-forest mb-3">Instructions</h3>
                <ol className="space-y-3">
                  {result.instructions.map((instruction, i) => (
                    <li key={i} className="flex gap-3 text-sm text-charcoal">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-forest/10 text-forest text-xs flex items-center justify-center font-medium">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed pt-0.5">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Substitutions */}
              <div className="bg-cream rounded-2xl p-5">
                <h3 className="font-medium text-forest mb-3 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" /> Ingredient Swaps
                </h3>
                <div className="space-y-2">
                  {result.substitutions.map((sub, i) => (
                    <p key={i} className="text-sm text-charcoal">
                      <span className="text-charcoal-light">{sub.original}</span>
                      {' → '}
                      <span className="font-medium text-forest">{sub.swap}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Meal Prep Tip */}
              <div className="bg-sage/5 rounded-2xl p-5">
                <h3 className="font-medium text-forest mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> Meal Prep Tip
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">{result.mealPrepTip}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => {
                    trackEvent('recipe_saved', { recipe: result.slug });
                    alert('Recipe saved! (Feature coming soon)');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors btn-press"
                >
                  <Bookmark className="w-4 h-4" /> SAVE RECIPE
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-beige text-forest font-medium rounded-full hover:border-sage transition-colors btn-press"
                >
                  <RefreshCw className="w-4 h-4" /> TRY ANOTHER
                </button>
                <Link
                  to="/tools/what-should-i-eat"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-charcoal-light hover:text-forest transition-colors"
                >
                  BUILD ANOTHER MEAL
                </Link>
              </div>
            </div>
          </div>

          {/* Related Recipe Link */}
          <div className="mt-6 text-center">
            <Link
              to={`/recipes/${result.slug}`}
              className="text-sm text-forest font-medium hover:underline"
            >
              View full recipe details →
            </Link>
          </div>

          {/* Meal Plan CTA */}
          <div className="mt-12 bg-gradient-to-br from-forest to-forest-light rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl text-white mb-3">
              Want Your Whole Week Planned?
            </h2>
            <p className="text-white/80 max-w-md mx-auto mb-6">
              Get the 21-Day High-Protein Meal Plan with 30 recipes, grocery lists, and meal prep guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['7-Day Meal Plan', '30 Recipes', 'Grocery List', 'Meal Prep', '21-Day Challenge'].map(item => (
                <span key={item} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">
                  {item}
                </span>
              ))}
            </div>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProductCTA('meal_result')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest font-medium rounded-full hover:bg-cream transition-colors btn-press"
            >
              GET THE PLAN <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

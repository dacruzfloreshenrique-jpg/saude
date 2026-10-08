import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calculator, Info, Zap, UtensilsCrossed } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function ProteinGuide() {
  const [ageRange, setAgeRange] = useState('');
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w || !ageRange || !sex || !activity || !goal) return;

    // Base: 0.8g per kg (RDA minimum)
    let perKg = 0.8;

    // Activity adjustment
    if (activity === 'sedentary') perKg = 0.8;
    else if (activity === 'light') perKg = 1.0;
    else if (activity === 'moderate') perKg = 1.2;
    else if (activity === 'active') perKg = 1.4;
    else if (activity === 'very-active') perKg = 1.6;

    // Goal adjustment
    if (goal === 'maintain') perKg *= 1.0;
    else if (goal === 'muscle') perKg *= 1.2;
    else if (goal === 'weight-loss') perKg *= 1.3;

    const min = Math.round(w * perKg * 0.9);
    const max = Math.round(w * perKg * 1.2);

    setResult({ min, max });
    trackEvent('calculator_completed', { tool: 'protein-guide' });
  };

  const canCalculate = ageRange && sex && weight && activity && goal;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-24 lg:pb-12">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <Link to="/tools" className="inline-flex items-center gap-1 text-sm text-charcoal-light hover:text-forest mb-4">
          <ArrowLeft className="w-4 h-4" /> All Tools
        </Link>
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-3">How Much Protein Do You Need?</h1>
        <p className="text-charcoal-light max-w-lg mx-auto">
          Get a general protein estimate based on your profile. This is educational information, not medical advice.
        </p>
      </div>

      {/* Calculator */}
      <div className="bg-white rounded-3xl border border-beige p-6 lg:p-8 mb-8">
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {/* Age Range */}
          <div>
            <label className="block text-sm font-medium text-forest mb-2">Age Range</label>
            <select
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-sm"
            >
              <option value="">Select...</option>
              <option value="18-30">18–30</option>
              <option value="31-45">31–45</option>
              <option value="46-55">46–55</option>
              <option value="56-65">56–65</option>
              <option value="65+">65+</option>
            </select>
          </div>

          {/* Sex */}
          <div>
            <label className="block text-sm font-medium text-forest mb-2">Sex</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-sm"
            >
              <option value="">Select...</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-forest mb-2">Weight (lbs)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g., 150"
              className="w-full px-4 py-3 rounded-xl border border-beige bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-sm"
            />
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-sm font-medium text-forest mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-sm"
            >
              <option value="">Select...</option>
              <option value="sedentary">Sedentary (little exercise)</option>
              <option value="light">Lightly active (1-2 days/week)</option>
              <option value="moderate">Moderately active (3-4 days/week)</option>
              <option value="active">Active (5-6 days/week)</option>
              <option value="very-active">Very active (intense daily)</option>
            </select>
          </div>

          {/* Goal */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-forest mb-2">Primary Goal</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'maintain', label: 'Maintain' },
                { value: 'muscle', label: 'Build Muscle' },
                { value: 'weight-loss', label: 'Lose Weight' },
              ].map(g => (
                <button
                  key={g.value}
                  onClick={() => setGoal(g.value)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all btn-press ${
                    goal === g.value
                      ? 'bg-forest text-white'
                      : 'bg-cream text-charcoal hover:bg-beige'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={calculate}
          disabled={!canCalculate}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed btn-press"
        >
          <Calculator className="w-5 h-5" /> Calculate Estimate
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="animate-fade-in-up bg-gradient-to-br from-sage/10 to-cream rounded-3xl p-6 lg:p-8 mb-8 border border-sage/20">
          <div className="text-center mb-4">
            <p className="text-sm text-charcoal-light mb-2">Your estimated daily protein range</p>
            <p className="font-serif text-4xl lg:text-5xl text-forest">
              {result.min}–{result.max}g
            </p>
            <p className="text-sm text-charcoal-light mt-2">per day</p>
          </div>
          <div className="bg-white/60 rounded-xl p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-sage-dark flex-shrink-0 mt-0.5" />
            <p className="text-xs text-charcoal-light leading-relaxed">
              <strong>General educational estimate — not individualized medical or nutritional advice.</strong> Actual protein needs vary based on many factors. Consult a healthcare provider for personalized guidance.
            </p>
          </div>
        </div>
      )}

      {/* Educational Content */}
      <div className="space-y-8">
        <div className="bg-white rounded-2xl border border-beige p-6">
          <h2 className="font-serif text-xl text-forest mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5" /> What Is Protein?
          </h2>
          <p className="text-sm text-charcoal leading-relaxed">
            Protein is one of three macronutrients (along with carbohydrates and fats) that your body needs to function. 
            It's made up of amino acids, which are the building blocks for muscles, enzymes, hormones, and immune cells. 
            Your body can't store protein the way it stores fat or carbs, so you need a regular supply through your diet.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-beige p-6">
          <h2 className="font-serif text-xl text-forest mb-3">Why Protein Matters</h2>
          <ul className="space-y-3 text-sm text-charcoal">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-sage mt-1.5 flex-shrink-0" />
              <span><strong>Muscle maintenance:</strong> Protein helps preserve and build muscle mass, which is especially important as we age.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-sage mt-1.5 flex-shrink-0" />
              <span><strong>Satiety:</strong> Protein is the most filling macronutrient. Higher-protein meals tend to keep you satisfied longer.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-sage mt-1.5 flex-shrink-0" />
              <span><strong>Recovery:</strong> Protein supports tissue repair after physical activity and daily wear.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-sage mt-1.5 flex-shrink-0" />
              <span><strong>Blood sugar stability:</strong> Including protein with carbohydrates can help moderate blood sugar response.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-beige p-6">
          <h2 className="font-serif text-xl text-forest mb-3 flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5" /> Protein-Rich Foods
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-charcoal mb-2">Animal sources</h3>
              <ul className="space-y-1 text-charcoal-light">
                <li>• Chicken breast (~31g per 3oz)</li>
                <li>• Greek yogurt (~17g per cup)</li>
                <li>• Eggs (~6g each)</li>
                <li>• Salmon (~23g per 3oz)</li>
                <li>• Cottage cheese (~14g per ½ cup)</li>
                <li>• Turkey (~25g per 3oz)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-charcoal mb-2">Plant sources</h3>
              <ul className="space-y-1 text-charcoal-light">
                <li>• Lentils (~18g per cup cooked)</li>
                <li>• Black beans (~15g per cup)</li>
                <li>• Tofu (~20g per cup)</li>
                <li>• Edamame (~17g per cup)</li>
                <li>• Quinoa (~8g per cup)</li>
                <li>• Chickpeas (~15g per cup)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-beige p-6">
          <h2 className="font-serif text-xl text-forest mb-3">How to Distribute Protein Across Meals</h2>
          <p className="text-sm text-charcoal leading-relaxed mb-4">
            Research suggests that spreading protein intake across meals (rather than eating it all at once) may be more effective for muscle maintenance and satiety. Aim for 20-35g per meal.
          </p>
          <div className="bg-cream rounded-xl p-4">
            <h3 className="font-medium text-forest text-sm mb-2">Example day (~100g protein):</h3>
            <ul className="space-y-2 text-sm text-charcoal">
              <li className="flex justify-between">
                <span>Breakfast: Greek yogurt bowl</span>
                <span className="text-sage-dark font-medium">~20g</span>
              </li>
              <li className="flex justify-between">
                <span>Lunch: Chicken rice bowl</span>
                <span className="text-sage-dark font-medium">~35g</span>
              </li>
              <li className="flex justify-between">
                <span>Snack: Cottage cheese toast</span>
                <span className="text-sage-dark font-medium">~22g</span>
              </li>
              <li className="flex justify-between">
                <span>Dinner: Salmon with vegetables</span>
                <span className="text-sage-dark font-medium">~35g</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          to="/tools/what-should-i-eat"
          className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors btn-press"
        >
          TURN PROTEIN INTO MEALS <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

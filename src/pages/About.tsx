import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 pb-24 lg:pb-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sage/20 to-forest/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">👩‍🍳</span>
        </div>
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-3">Meet Ava Brooks</h1>
        <p className="text-lg text-sage-dark font-medium mb-2">Virtual Wellness Creator</p>
        <p className="text-charcoal-light max-w-lg mx-auto">
          Making high-protein eating, meal planning, and healthy habits simpler for real people with real lives.
        </p>
      </div>

      {/* About Content */}
      <div className="space-y-8">
        <div className="bg-white rounded-2xl border border-beige p-6 lg:p-8">
          <h2 className="font-serif text-xl text-forest mb-4">What I Do</h2>
          <p className="text-charcoal leading-relaxed mb-4">
            I create practical wellness content focused on one core idea: healthy eating doesn't have to be complicated. 
            My goal is to help you answer the daily question of "what should I eat?" with confidence and simplicity.
          </p>
          <p className="text-charcoal leading-relaxed mb-4">
            I believe in practical over perfect. The recipes, tools, and guides I create are designed around real life — 
            busy schedules, limited ingredients, and the need for meals that actually taste good and keep you satisfied.
          </p>
          <p className="text-charcoal leading-relaxed">
            Every piece of content prioritizes protein because it's the macronutrient most people struggle to get enough of, 
            and it makes the biggest difference in how satisfied and energized you feel throughout the day.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-beige p-6 lg:p-8">
          <h2 className="font-serif text-xl text-forest mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> My Approach
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Practical over perfect', desc: 'Meals that work with your real life, not an idealized version of it.' },
              { title: 'Protein-first', desc: 'Every recipe and suggestion prioritizes protein for lasting satisfaction.' },
              { title: 'Simple ingredients', desc: 'No hard-to-find items. Everything is available at any grocery store.' },
              { title: 'Education, not rules', desc: 'Understanding why helps you make better choices independently.' },
            ].map((item, i) => (
              <div key={i} className="bg-cream rounded-xl p-4">
                <h3 className="font-medium text-forest text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-charcoal-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-beige p-6 lg:p-8">
          <h2 className="font-serif text-xl text-forest mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" /> Transparency
          </h2>
          <p className="text-charcoal leading-relaxed mb-4">
            I want to be upfront: I'm a virtual wellness creator, not a doctor, registered dietitian, or medical professional. 
            The content I create is for general educational and informational purposes.
          </p>
          <p className="text-charcoal leading-relaxed mb-4">
            My tools provide estimates and general guidance — they are not individualized medical or nutritional advice. 
            If you have specific health conditions, dietary restrictions, or medical concerns, please consult with a qualified healthcare provider.
          </p>
          <p className="text-charcoal leading-relaxed">
            What I can offer is practical, well-researched content that makes healthy eating feel more accessible. 
            My goal is to be a helpful resource in your wellness journey, not a replacement for professional guidance.
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-6 lg:p-8">
          <h2 className="font-serif text-xl text-forest mb-4">What You'll Find Here</h2>
          <ul className="space-y-3">
            {[
              'Free interactive tools to help you plan meals',
              'Simple high-protein recipes with real ingredients',
              'Practical guides on protein, meal prep, and healthy habits',
              'A 21-day meal plan for those who want a complete system',
              'Honest, straightforward wellness content',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-charcoal">
                <span className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          to="/tools/what-should-i-eat"
          className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors btn-press"
        >
          Try the Free Meal Builder <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

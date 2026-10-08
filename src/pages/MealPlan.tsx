import { Link } from 'react-router-dom';
import { ArrowRight, Check, Calendar, BookOpen, ShoppingCart, ChefHat, Apple, Trophy, FileText, Gift } from 'lucide-react';
import { trackProductCTA } from '../utils/analytics';
import { EmailCaptureForm } from './Home';

const GUMROAD_URL = 'https://floreshenrique.gumroad.com/l/ssuoev';

const features = [
  { icon: <Calendar className="w-6 h-6" />, title: '7-Day Meal Plan', desc: 'A full week of high-protein meals mapped out for you. Breakfast, lunch, dinner, and snacks.' },
  { icon: <BookOpen className="w-6 h-6" />, title: '30 Easy Recipes', desc: 'Simple recipes with accessible ingredients. Most ready in 30 minutes or less.' },
  { icon: <ShoppingCart className="w-6 h-6" />, title: 'Grocery List', desc: 'Organized shopping list so you know exactly what to buy. No wasted trips or forgotten items.' },
  { icon: <ChefHat className="w-6 h-6" />, title: 'Meal Prep System', desc: 'Strategic prep guidance to set up your week in under an hour. Components, not full meals.' },
  { icon: <Apple className="w-6 h-6" />, title: 'Snack Ideas', desc: 'High-protein snack options for between meals. Quick, practical, and satisfying.' },
  { icon: <Trophy className="w-6 h-6" />, title: '21-Day Challenge', desc: 'A structured 21-day framework to build lasting habits. Track your progress day by day.' },
  { icon: <FileText className="w-6 h-6" />, title: 'Printable Trackers', desc: 'Print-friendly tracking sheets for meals, water intake, and daily protein goals.' },
  { icon: <Gift className="w-6 h-6" />, title: 'Bonuses', desc: 'Additional resources including substitution guides, eating-out tips, and quick-reference cards.' },
];

export default function MealPlan() {
  return (
    <div className="pb-24 lg:pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream to-beige-light py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage/10 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-sage" />
            <span className="text-xs font-medium text-sage-dark uppercase tracking-wide">Digital Meal Plan</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest mb-6 leading-tight">
            21 Days of High-Protein Meals — Without the Guesswork
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mx-auto mb-8">
            A complete meal planning system with recipes, grocery lists, and meal prep guidance. 
            Designed for real life — practical, flexible, and sustainable.
          </p>
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProductCTA('plan_hero')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-all btn-press shadow-lg shadow-forest/20 text-lg"
          >
            GET THE 21-DAY PLAN
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-charcoal-light mt-4">Instant digital download • Start today</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-forest mb-3">Everything You Get</h2>
          <p className="text-charcoal-light">A complete system to make high-protein eating effortless for 21 days.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl border border-beige p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center text-forest mb-4">
                {feature.icon}
              </div>
              <h3 className="font-medium text-forest mb-2">{feature.title}</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-forest text-center mb-12">How It Works</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Download instantly', desc: 'Get immediate access to all materials after purchase. PDF format works on any device.' },
              { step: '2', title: 'Review the meal plan', desc: 'See your 7-day plan with specific meals for breakfast, lunch, dinner, and snacks.' },
              { step: '3', title: 'Shop with the grocery list', desc: 'Use the organized shopping list to get everything you need in one trip.' },
              { step: '4', title: 'Prep strategically', desc: 'Follow the meal prep guide to set up your week in under an hour.' },
              { step: '5', title: 'Cook and enjoy', desc: 'Use the simple recipes to prepare meals. Most take 30 minutes or less.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-medium flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-medium text-forest mb-1">{item.title}</h3>
                  <p className="text-sm text-charcoal-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="font-serif text-3xl text-forest text-center mb-8">Designed for Real Life</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            'Recipes use accessible, everyday ingredients',
            'Most meals ready in 30 minutes or less',
            'Flexible — swap proteins and vegetables freely',
            'No expensive or hard-to-find ingredients',
            'Includes vegetarian-friendly modifications',
            'Meal prep designed for busy schedules',
            'No calorie counting required',
            'Focus on protein, not restriction',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-beige">
              <Check className="w-5 h-5 text-sage flex-shrink-0" />
              <span className="text-sm text-charcoal">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-forest to-forest-light rounded-3xl p-8 lg:p-16 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
            Start Your 21-Day Plan Today
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8 text-lg">
            Stop wondering what to eat. Get a complete system that makes high-protein eating simple and sustainable.
          </p>
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProductCTA('plan_bottom')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest font-medium rounded-full hover:bg-cream transition-colors btn-press shadow-lg text-lg"
          >
            GET THE 21-DAY PLAN
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/60 text-sm mt-4">Instant download • PDF format • Start immediately</p>
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-cream rounded-2xl p-8 text-center">
          <h3 className="font-serif text-xl text-forest mb-2">Not ready yet? Try a free sample.</h3>
          <p className="text-charcoal-light text-sm mb-4">Get a free 7-day high-protein starter plan via email.</p>
          <EmailCaptureForm compact />
        </div>
      </section>
    </div>
  );
}

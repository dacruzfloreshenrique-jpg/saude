import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, UtensilsCrossed, Zap, Sparkles } from 'lucide-react';
import { trackProductCTA } from '../utils/analytics';
import { MailerLiteForm } from '../components/MailerLiteForm';

const GUMROAD_URL = 'https://floreshenrique.gumroad.com/l/ssuoev';

export default function Home() {
  return (
    <div className="pb-20 lg:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-warm-white to-beige-light" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sage/10 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5 text-sage-dark" />
                <span className="text-xs font-medium text-sage-dark uppercase tracking-wide">Free High-Protein Meal Tool</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-tight mb-6">
                Not sure what to eat? Let's make it simple.
              </h1>
              
              <p className="text-lg text-charcoal-light leading-relaxed mb-8 max-w-lg">
                Build a practical high-protein meal from ingredients you already have. No complicated recipes, no special shopping trips.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  to="/tools/what-should-i-eat"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-all btn-press shadow-lg shadow-forest/20"
                >
                  BUILD MY MEAL
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/recipes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-forest font-medium rounded-full border border-beige hover:border-sage transition-all btn-press"
                >
                  Explore Recipes
                </Link>
              </div>

              <p className="text-sm text-charcoal-light flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage" />
                Free • No account required
              </p>
            </div>

            {/* Right - Visual */}
            <div className="relative animate-fade-in-up stagger-2">
              <div className="relative bg-white rounded-3xl shadow-xl shadow-forest/5 p-6 lg:p-8 border border-beige overflow-hidden">
                {/* Hero Image */}
                <div className="absolute inset-0 opacity-10">
                  <img 
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" 
                    alt="" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative">
                  {/* Preview card */}
                  <div className="bg-gradient-to-br from-cream to-beige-light rounded-2xl p-6 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                        <UtensilsCrossed className="w-6 h-6 text-forest" />
                      </div>
                      <div>
                        <p className="text-xs text-charcoal-light">Your meal suggestion</p>
                        <p className="font-medium text-forest">High-Protein Chicken Rice Bowl</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-xs text-charcoal-light">
                        <Clock className="w-3 h-3" /> 30 min
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-xs text-charcoal-light">
                        <Zap className="w-3 h-3" /> ~35g protein
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-xs text-charcoal-light">
                        Easy
                      </span>
                    </div>
                  </div>
                  
                  {/* Ingredient chips */}
                  <div className="flex flex-wrap gap-2">
                    {['Chicken', 'Rice', 'Broccoli', 'Olive oil'].map(item => (
                      <span key={item} className="px-3 py-1.5 bg-sage/10 text-sage-dark text-sm rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sage/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-beige rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-forest mb-4">Free Tools to Make Eating Simpler</h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Practical tools designed to help you answer "what should I eat?" without the overwhelm.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Tool 1 */}
          <Link to="/tools/what-should-i-eat" className="card-hover group">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-beige h-full">
              <div className="w-14 h-14 rounded-2xl bg-forest/5 flex items-center justify-center mb-5 group-hover:bg-forest/10 transition-colors">
                <UtensilsCrossed className="w-7 h-7 text-forest" />
              </div>
              <h3 className="font-serif text-xl text-forest mb-3">What Should I Eat?</h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-5">
                Tell us what you have and we'll help turn it into a high-protein meal. Simple, fast, practical.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-forest group-hover:gap-2 transition-all">
                TRY IT <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Tool 2 */}
          <Link to="/tools/protein-guide" className="card-hover group">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-beige h-full">
              <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center mb-5 group-hover:bg-sage/20 transition-colors">
                <Zap className="w-7 h-7 text-sage-dark" />
              </div>
              <h3 className="font-serif text-xl text-forest mb-3">Protein Guide</h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-5">
                Get a general protein-intake estimate and learn how to build protein-rich meals that actually satisfy.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-forest group-hover:gap-2 transition-all">
                EXPLORE <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Tool 3 */}
          <Link to="/tools/build-my-plate" className="card-hover group">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border border-beige h-full">
              <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center mb-5 group-hover:bg-beige-light transition-colors">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-serif text-xl text-forest mb-3">Build My Protein Plate</h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-5">
                Create a balanced high-protein plate in seconds. See your protein estimate and get swap ideas.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-forest group-hover:gap-2 transition-all">
                BUILD MY PLATE <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Social Proof / Value Section */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl text-forest mb-4">Why Protein Simple?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🎯', title: 'Practical', desc: 'Real meals with ingredients you actually have' },
              { emoji: '⚡', title: 'Fast', desc: 'Most meals ready in 30 minutes or less' },
              { emoji: '💪', title: 'High-Protein', desc: 'Every suggestion prioritizes protein' },
              { emoji: '🆓', title: 'Free', desc: 'All tools are free, no account needed' },
            ].map(item => (
              <div key={item.title} className="text-center p-6">
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <h3 className="font-medium text-forest mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plan CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-gradient-to-br from-forest to-forest-light rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-sage rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              Want Your Whole Week Planned?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
              Get the 21-Day High-Protein Meal Plan — recipes, grocery lists, and meal prep guidance delivered to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['7-Day Meal Plan', '30 Recipes', 'Grocery List', 'Meal Prep Guide', '21-Day Challenge'].map(item => (
                <span key={item} className="px-4 py-2 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackProductCTA('home_section')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest font-medium rounded-full hover:bg-cream transition-colors btn-press shadow-lg"
            >
              GET THE PLAN
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="bg-cream rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl text-forest mb-3">
            Free 7-Day High-Protein Starter Plan
          </h2>
          <p className="text-charcoal-light mb-6 max-w-md mx-auto">
            Get a week of simple, high-protein meals delivered to your inbox. No spam, just useful content.
          </p>
          <MailerLiteForm />
        </div>
      </section>
    </div>
  );
}

export function EmailCaptureForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Future: integrate with email provider via env vars
    }
  };

  if (submitted) {
    return (
      <div className="animate-fade-in">
        <p className="text-forest font-medium text-lg mb-2">Your starter plan is on its way! ✨</p>
        <p className="text-charcoal-light text-sm mb-4">Check your inbox in a few minutes.</p>
        <Link
          to="/21-day-plan"
          className="inline-flex items-center gap-2 text-forest font-medium hover:underline"
        >
          While you wait — explore the 21-Day Meal Plan →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${compact ? 'max-w-md mx-auto' : 'max-w-lg mx-auto'}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-5 py-3 rounded-full border border-beige bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-colors btn-press text-sm whitespace-nowrap"
      >
        GET THE FREE PLAN
      </button>
    </form>
  );
}

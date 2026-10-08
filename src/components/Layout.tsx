import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { trackProductCTA } from '../utils/analytics';

const GUMROAD_URL = 'https://floreshenrique.gumroad.com/l/ssuoev';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Tools', path: '/tools' },
    { label: 'Recipes', path: '/recipes' },
    { label: 'Guides', path: '/guides' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-serif text-xl text-forest">Protein Simple</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-forest ${
                    isActive(item.path) ? 'text-forest' : 'text-charcoal-light'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackProductCTA('header')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-white text-sm font-medium rounded-full hover:bg-forest-light transition-colors btn-press"
              >
                21-Day Meal Plan
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-warm-white animate-fade-in">
          <div className="pt-20 px-6 pb-8">
            <nav className="flex flex-col gap-4">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-medium py-3 border-b border-beige ${
                    isActive(item.path) ? 'text-forest' : 'text-charcoal'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { trackProductCTA('mobile_menu'); setMobileOpen(false); }}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-forest text-white font-medium rounded-full"
            >
              21-Day Meal Plan
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-warm-white/95 backdrop-blur-sm border-t border-beige p-3">
        <a
          href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProductCTA('mobile_sticky')}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-forest text-white font-medium rounded-full text-sm"
        >
          GET THE MEAL PLAN
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-cream border-t border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-serif text-xl text-forest">Protein Simple</span>
            </Link>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Eat better without overthinking it. Practical tools and recipes for high-protein eating.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-medium text-forest mb-4">Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/tools/what-should-i-eat" className="text-sm text-charcoal-light hover:text-forest transition-colors">What Should I Eat?</Link></li>
              <li><Link to="/tools/protein-guide" className="text-sm text-charcoal-light hover:text-forest transition-colors">Protein Guide</Link></li>
              <li><Link to="/tools/build-my-plate" className="text-sm text-charcoal-light hover:text-forest transition-colors">Build My Plate</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium text-forest mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/recipes" className="text-sm text-charcoal-light hover:text-forest transition-colors">Recipes</Link></li>
              <li><Link to="/guides" className="text-sm text-charcoal-light hover:text-forest transition-colors">Guides</Link></li>
              <li><Link to="/21-day-plan" className="text-sm text-charcoal-light hover:text-forest transition-colors">21-Day Plan</Link></li>
              <li><Link to="/about" className="text-sm text-charcoal-light hover:text-forest transition-colors">About Ava</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium text-forest mb-4">Info</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-charcoal-light">Privacy Policy</span></li>
              <li><span className="text-sm text-charcoal-light">Terms of Use</span></li>
              <li><span className="text-sm text-charcoal-light">Contact</span></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-beige">
          <p className="text-xs text-charcoal-light leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> The content on Protein Simple is for general educational and informational purposes only. 
            It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
            Always consult with a qualified healthcare provider before making changes to your diet. 
            Protein estimates are approximate and may vary based on specific ingredients and preparation methods.
          </p>
          <p className="text-xs text-charcoal-light mt-4">
            © {new Date().getFullYear()} Protein Simple. Created by Ava Brooks, virtual wellness creator.
          </p>
        </div>
      </div>
    </footer>
  );
}

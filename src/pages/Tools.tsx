import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Zap } from 'lucide-react';

const tools = [
  {
    title: 'What Should I Eat?',
    description: 'Tell us what you have and we\'ll help turn it into a meal. Select ingredients, time, and meal type to get a high-protein suggestion.',
    cta: 'TRY IT',
    path: '/tools/what-should-i-eat',
    icon: <UtensilsCrossed className="w-7 h-7 text-forest" />,
    bg: 'bg-forest/5',
  },
  {
    title: 'Protein Guide',
    description: 'Get a general protein-intake estimate and learn how to build protein-rich meals that keep you satisfied.',
    cta: 'EXPLORE',
    path: '/tools/protein-guide',
    icon: <Zap className="w-7 h-7 text-sage-dark" />,
    bg: 'bg-sage/10',
  },
  {
    title: 'Build My Protein Plate',
    description: 'Create a balanced high-protein plate in seconds. See your protein estimate and get swap ideas.',
    cta: 'BUILD MY PLATE',
    path: '/tools/build-my-plate',
    icon: <span className="text-2xl">🍽️</span>,
    bg: 'bg-beige',
  },
];

export default function Tools() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-24 lg:pb-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-3">Free Tools</h1>
        <p className="text-charcoal-light max-w-lg mx-auto">
          Practical tools to help you eat better without overthinking it. All free, no account required.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {tools.map(tool => (
          <Link key={tool.path} to={tool.path} className="card-hover group">
            <div className="bg-white rounded-2xl border border-beige p-6 lg:p-8 h-full flex flex-col">
              <div className={`w-14 h-14 rounded-2xl ${tool.bg} flex items-center justify-center mb-5`}>
                {tool.icon}
              </div>
              <h2 className="font-serif text-xl text-forest mb-3">{tool.title}</h2>
              <p className="text-sm text-charcoal-light leading-relaxed mb-6 flex-1">{tool.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-forest group-hover:gap-2 transition-all">
                {tool.cta} <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

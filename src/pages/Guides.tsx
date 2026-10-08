import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const guides = [
  {
    slug: 'high-protein-foods',
    title: '30 High-Protein Foods to Keep in Your Kitchen',
    description: 'A practical list of protein-rich foods to stock your kitchen with. Includes approximate protein content and usage tips for each.',
    emoji: '🥩',
    readTime: '8 min read',
  },
  {
    slug: 'high-protein-meal-prep',
    title: 'High-Protein Meal Prep for Beginners',
    description: 'A step-by-step approach to meal prepping that actually works. Learn how to prep proteins, grains, and vegetables for a week of easy meals.',
    emoji: '📦',
    readTime: '10 min read',
  },
  {
    slug: 'high-protein-snacks',
    title: '20 Easy High-Protein Snack Ideas',
    description: 'Quick, satisfying snacks that deliver protein without requiring a full meal. Perfect for between meals or on-the-go.',
    emoji: '🍎',
    readTime: '6 min read',
  },
  {
    slug: 'eating-out',
    title: 'How to Make Higher-Protein Choices When Eating Out',
    description: 'Practical strategies for ordering higher-protein meals at restaurants, fast food, and coffee shops without stress.',
    emoji: '🍽️',
    readTime: '7 min read',
  },
];

export default function Guides() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-24 lg:pb-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-3">Practical Guides</h1>
        <p className="text-charcoal-light max-w-lg mx-auto">
          Actionable guides to help you build better eating habits. No fluff, just practical information.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {guides.map(guide => (
          <Link key={guide.slug} to={`/guides/${guide.slug}`} className="card-hover group">
            <div className="bg-white rounded-2xl border border-beige p-6 lg:p-8 h-full flex flex-col">
              <span className="text-4xl mb-4">{guide.emoji}</span>
              <h2 className="font-serif text-xl text-forest mb-3 group-hover:text-sage-dark transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4 flex-1">
                {guide.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-charcoal-light">{guide.readTime}</span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-forest group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

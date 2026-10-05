import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { trackProductCTA } from '../utils/analytics';

const GUMROAD_URL = 'https://floreshenrique.gumroad.com/l/ssuoev';

interface GuideContent {
  title: string;
  emoji: string;
  intro: string;
  sections: { heading: string; content: string[] }[];
}

const guides: Record<string, GuideContent> = {
  'high-protein-foods': {
    title: '30 High-Protein Foods to Keep in Your Kitchen',
    emoji: '🥩',
    intro: 'Stocking your kitchen with protein-rich foods is the foundation of high-protein eating. Here are 30 practical options organized by category, with approximate protein content to help you plan.',
    sections: [
      {
        heading: 'Animal Proteins',
        content: [
          'Chicken breast — ~31g protein per 3oz cooked. The versatile workhorse. Grill, bake, or pan-sear.',
          'Ground turkey — ~22g per 3oz. Great for bowls, wraps, and sauces. Choose 93% lean.',
          'Salmon — ~23g per 3oz. Rich in omega-3s. Works fresh, canned, or smoked.',
          'Tuna (canned) — ~26g per can. Pantry staple. Use for bowls, salads, or melts.',
          'Eggs — ~6g each. The original complete protein. Boil, scramble, or fry.',
          'Greek yogurt — ~17g per cup. Breakfast, snack, or cooking base. Choose plain.',
          'Cottage cheese — ~14g per ½ cup. Underrated protein source. Blend for smooth texture.',
          'Deli turkey — ~15g per 3oz. Quick lunch option. Choose low-sodium when possible.',
          'Shrimp — ~20g per 3oz. Cooks in minutes. Fresh or frozen both work.',
          'Beef (lean) — ~22g per 3oz. Choose sirloin or 90% lean ground beef.',
        ]
      },
      {
        heading: 'Plant Proteins',
        content: [
          'Tofu (extra-firm) — ~20g per cup. Press, cube, and cook any way. Absorbs any flavor.',
          'Lentils — ~18g per cup cooked. No soaking needed. Great for soups and bowls.',
          'Black beans — ~15g per cup. Canned is fine. Rinse well before using.',
          'Edamame — ~17g per cup. Buy frozen. Microwave for a quick protein snack.',
          'Chickpeas — ~15g per cup. Roast for snacks, blend for hummus, add to bowls.',
          'Quinoa — ~8g per cup cooked. Complete protein. Cooks like rice.',
          'Tempeh — ~31g per cup. Fermented soy. Firm texture, nutty flavor.',
        ]
      },
      {
        heading: 'Dairy & Alternatives',
        content: [
          'Milk (dairy) — ~8g per cup. Easy to add to oats, smoothies, or coffee.',
          'Cheese (cheddar) — ~7g per oz. Use as a protein-boosting topping.',
          'Parmesan — ~10g per oz. Intense flavor means you need less.',
          'Protein powder — ~20-25g per scoop. Convenient for smoothies and oats.',
        ]
      },
      {
        heading: 'Nuts & Seeds',
        content: [
          'Almonds — ~6g per oz. Great snack or topping.',
          'Peanut butter — ~7g per 2 tbsp. Classic. Choose natural when possible.',
          'Chia seeds — ~4g per 2 tbsp. Add to anything. Rich in fiber too.',
          'Pumpkin seeds — ~9g per oz. Sprinkle on salads, bowls, or yogurt.',
          'Hemp seeds — ~10g per 3 tbsp. Mild flavor, sprinkle on everything.',
        ]
      },
      {
        heading: 'Quick Tips',
        content: [
          'Keep at least 3 protein sources available at all times.',
          'Frozen proteins (shrimp, edamame) are convenient and don\'t spoil.',
          'Canned options (tuna, beans) are shelf-stable backup proteins.',
          'Rotate your proteins throughout the week for variety.',
          'Batch-cook 2-3 proteins on the weekend for easy weekday meals.',
        ]
      }
    ]
  },
  'high-protein-meal-prep': {
    title: 'High-Protein Meal Prep for Beginners',
    emoji: '📦',
    intro: 'Meal prep doesn\'t have to mean spending your entire Sunday in the kitchen. This beginner-friendly approach focuses on strategic preparation that saves time during the week without requiring hours of cooking.',
    sections: [
      {
        heading: 'The Strategy: Prep Components, Not Full Meals',
        content: [
          'Instead of cooking complete meals, prepare individual components that you can mix and match during the week.',
          'Cook 2-3 proteins, 1-2 grains, and prep vegetables. Combine them differently each day.',
          'This approach prevents boredom and gives you flexibility if plans change.',
        ]
      },
      {
        heading: 'Step 1: Choose Your Proteins (30 minutes)',
        content: [
          'Pick 2-3 proteins for the week. Example: chicken breast, hard-boiled eggs, and canned tuna.',
          'Cook chicken: season and bake 4-5 breasts at 400°F for 20-25 minutes.',
          'Hard-boil 6-8 eggs: place in pot, cover with water, bring to boil, remove from heat, cover for 12 minutes.',
          'Open and drain canned tuna — no cooking needed.',
        ]
      },
      {
        heading: 'Step 2: Cook Your Grains (20 minutes)',
        content: [
          'Cook one large batch of rice or quinoa. This takes minimal active time.',
          'Rice: 1 cup rice + 2 cups water, bring to boil, reduce heat, cover for 18 minutes.',
          'Quinoa: 1 cup quinoa + 2 cups water, bring to boil, reduce heat, cover for 15 minutes.',
          'Store in a large container. Use throughout the week in bowls, salads, or as a side.',
        ]
      },
      {
        heading: 'Step 3: Prep Vegetables (15 minutes)',
        content: [
          'Wash and chop vegetables that you\'ll eat raw: lettuce, tomatoes, peppers, cucumbers.',
          'For cooked vegetables: broccoli, green beans, or frozen mixes that just need reheating.',
          'Store in clear containers so you can see what\'s available.',
        ]
      },
      {
        heading: 'Step 4: Assembly During the Week',
        content: [
          'Each day, combine a protein + grain + vegetable + fat source.',
          'Example Monday: chicken + rice + broccoli + olive oil',
          'Example Tuesday: tuna + rice + peppers + avocado',
          'Example Wednesday: eggs + quinoa + spinach + cheese',
          'Add different sauces or seasonings to keep things interesting.',
        ]
      },
      {
        heading: 'Storage Guidelines',
        content: [
          'Cooked proteins: 3-4 days in the refrigerator.',
          'Cooked grains: 4-5 days in the refrigerator.',
          'Fresh cut vegetables: 3-5 days depending on type.',
          'When in doubt, freeze portions you won\'t eat within 3 days.',
          'Label containers with the day you prepped them.',
        ]
      }
    ]
  },
  'high-protein-snacks': {
    title: '20 Easy High-Protein Snack Ideas',
    emoji: '🍎',
    intro: 'Snacks are an easy way to boost your daily protein intake without planning a full meal. These 20 ideas are quick, practical, and require minimal preparation.',
    sections: [
      {
        heading: 'No-Prep Snacks (Grab & Go)',
        content: [
          'Greek yogurt with berries — ~17g protein. Open, top, eat.',
          'String cheese + apple — ~7g protein. Portable and satisfying.',
          'Handful of almonds + jerky stick — ~18g protein. Shelf-stable.',
          'Cottage cheese with pineapple — ~14g protein. Open and eat.',
          'Hard-boiled eggs (prepped ahead) — ~12g for 2 eggs. Grab from fridge.',
        ]
      },
      {
        heading: '5-Minute Snacks',
        content: [
          'Cottage cheese toast with everything seasoning — ~22g protein.',
          'Tuna on crackers with avocado — ~20g protein.',
          'Protein shake (powder + milk + banana) — ~25g protein.',
          'Turkey roll-ups (deli turkey + cheese + mustard) — ~18g protein.',
          'Edamame with sea salt (microwave frozen) — ~17g protein.',
        ]
      },
      {
        heading: 'Slightly More Involved',
        content: [
          'Protein oatmeal (oats + protein powder + peanut butter) — ~28g protein.',
          'Chicken salad lettuce wraps — ~25g protein.',
          'Bean and cheese quesadilla (mini) — ~18g protein.',
          'Smoothie (Greek yogurt + banana + spinach + milk) — ~20g protein.',
          'Overnight protein oats (prep night before) — ~25g protein.',
        ]
      },
      {
        heading: 'Sweet Options',
        content: [
          'Protein pudding (Greek yogurt + cocoa + honey) — ~17g protein.',
          'Chia pudding with protein powder — ~20g protein.',
          'Apple slices with peanut butter — ~8g protein.',
          'Dark chocolate + handful of almonds — ~10g protein.',
        ]
      },
      {
        heading: 'Tips for Success',
        content: [
          'Keep protein snacks visible and accessible in your fridge.',
          'Prep hard-boiled eggs and portion nuts at the start of the week.',
          'Have at least 2 shelf-stable options (jerky, nuts, protein bars) for emergencies.',
          'Aim for 10-20g protein per snack for maximum satiety.',
          'Pair protein with fiber (fruit, vegetables) for longer-lasting satisfaction.',
        ]
      }
    ]
  },
  'eating-out': {
    title: 'How to Make Higher-Protein Choices When Eating Out',
    emoji: '🍽️',
    intro: 'Eating out doesn\'t mean abandoning your protein goals. With a few simple strategies, you can make better choices at restaurants, fast food places, and coffee shops without stress or overthinking.',
    sections: [
      {
        heading: 'General Strategies',
        content: [
          'Look for the protein first, then build the rest of the meal around it.',
          'Don\'t be afraid to ask for modifications: extra chicken, double eggs, sauce on the side.',
          'When in doubt, grilled over fried. Grilled proteins are almost always higher in protein and lower in unnecessary calories.',
          'Check menus online before you arrive — most restaurants post nutrition information.',
        ]
      },
      {
        heading: 'At Fast Food Restaurants',
        content: [
          'Choose grilled chicken sandwiches over crispy/fried options.',
          'Order a double protein patty instead of adding extra cheese or bacon.',
          'Many chains now offer protein bowls — usually a solid choice.',
          'Skip the large fries and add a side salad or fruit instead.',
          'Breakfast: egg-based items are your best protein bet. Add an extra egg white.',
        ]
      },
      {
        heading: 'At Casual Restaurants',
        content: [
          'Start with the protein on the menu: chicken, fish, steak, shrimp.',
          'Ask for double protein and swap the side for vegetables instead of fries.',
          'Salads: choose ones with substantial protein (grilled chicken, shrimp, steak) and ask for dressing on the side.',
          'Bowls and wraps are often good options — they usually include a clear protein source.',
          'Don\'t skip the protein to "save room" for sides. The protein is the most important part.',
        ]
      },
      {
        heading: 'At Coffee Shops',
        content: [
          'Many coffee shops now offer protein boxes, egg bites, or yogurt parfaits.',
          'Add a scoop of collagen or protein powder to your latte (some shops offer this).',
          'Pair your coffee with a hard-boiled egg or protein bar from the display case.',
          'Greek yogurt parfaits are increasingly common — usually 15-20g protein.',
        ]
      },
      {
        heading: 'Quick Decision Framework',
        content: [
          'Step 1: Find the protein option on the menu.',
          'Step 2: Choose grilled/baked over fried when possible.',
          'Step 3: Add vegetables as your second priority.',
          'Step 4: Don\'t stress about the rest. Getting the protein right is what matters most.',
          'Remember: a "good enough" high-protein choice beats a perfect choice you don\'t make.',
        ]
      }
    ]
  }
};

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guides[slug] : undefined;

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl text-forest mb-4">Guide not found</h1>
        <Link to="/guides" className="text-forest hover:underline">← Back to guides</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pb-24 lg:pb-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-charcoal-light mb-8">
        <Link to="/" className="hover:text-forest">Home</Link>
        <span>/</span>
        <Link to="/guides" className="hover:text-forest">Guides</Link>
        <span>/</span>
        <span className="text-forest">{guide.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <span className="text-5xl mb-4 block">{guide.emoji}</span>
        <h1 className="font-serif text-3xl lg:text-4xl text-forest mb-4">{guide.title}</h1>
        <p className="text-charcoal-light leading-relaxed text-lg">{guide.intro}</p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {guide.sections.map((section, i) => (
          <div key={i} className="bg-white rounded-2xl border border-beige p-6">
            <h2 className="font-serif text-xl text-forest mb-4">{section.heading}</h2>
            <ul className="space-y-3">
              {section.content.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-charcoal leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-sage mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-br from-forest to-forest-light rounded-2xl p-8 text-center">
        <h2 className="font-serif text-2xl text-white mb-3">Ready to Put This Into Practice?</h2>
        <p className="text-white/80 mb-6">Get 21 days of high-protein meals planned for you — no guesswork required.</p>
        <a
          href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackProductCTA('guide_bottom')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest font-medium rounded-full hover:bg-cream transition-colors btn-press"
        >
          GET THE 21-DAY PLAN <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Back to guides */}
      <div className="mt-8 text-center">
        <Link to="/guides" className="text-sm text-forest hover:underline">
          ← Back to all guides
        </Link>
      </div>
    </div>
  );
}

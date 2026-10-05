export interface Recipe {
  slug: string;
  title: string;
  description: string;
  mealCategory: ('breakfast' | 'lunch' | 'dinner' | 'snack')[];
  ingredients: string[];
  ingredientCategories: { category: string; items: string[] }[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  estimatedProtein: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  substitutions: { original: string; swap: string }[];
  mealPrepTip: string;
  faq: { question: string; answer: string }[];
  tags: string[];
  image: string;
  color: string;
}

export const recipes: Recipe[] = [
  {
    slug: 'high-protein-chicken-rice-bowl',
    title: 'High-Protein Chicken Rice Bowl',
    description: 'A satisfying bowl with seasoned chicken, fluffy rice, and fresh vegetables. Quick to make and packed with protein to keep you full all afternoon.',
    mealCategory: ['lunch', 'dinner'],
    ingredients: ['Chicken', 'Rice', 'Broccoli', 'Olive oil', 'Seasonings'],
    ingredientCategories: [
      { category: 'Protein', items: ['1 lb chicken breast, diced'] },
      { category: 'Carbs', items: ['1 cup brown rice', '2 cups water'] },
      { category: 'Vegetables', items: ['2 cups broccoli florets'] },
      { category: 'Seasoning', items: ['2 tbsp olive oil', '1 tsp garlic powder', '1 tsp paprika', 'Salt and pepper to taste', 'Soy sauce for serving'] }
    ],
    instructions: [
      'Rinse rice and cook according to package directions (about 20 minutes).',
      'While rice cooks, season diced chicken with garlic powder, paprika, salt, and pepper.',
      'Heat olive oil in a large skillet over medium-high heat.',
      'Add chicken and cook for 6-8 minutes until golden and cooked through.',
      'In the last 3 minutes, add broccoli florets to the skillet and cook until tender-crisp.',
      'Assemble bowls: rice on the bottom, chicken and broccoli on top.',
      'Drizzle with soy sauce and serve immediately.'
    ],
    prepTime: 5,
    cookTime: 25,
    totalTime: 30,
    servings: 4,
    estimatedProtein: '~35g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Chicken breast', swap: 'Turkey breast or tofu' },
      { original: 'Brown rice', swap: 'Quinoa or cauliflower rice' },
      { original: 'Broccoli', swap: 'Green beans or snap peas' }
    ],
    mealPrepTip: 'Make a double batch of rice and chicken on Sunday. Store in separate containers for up to 4 days. Reheat with a splash of water to keep chicken moist.',
    faq: [
      { question: 'Can I use frozen broccoli?', answer: 'Absolutely. Add frozen broccoli directly to the skillet — it just needs an extra 2-3 minutes.' },
      { question: 'How do I know the chicken is done?', answer: 'Internal temperature should reach 165°F. The chicken should be white throughout with no pink.' }
    ],
    tags: ['meal-prep', 'high-protein', 'quick', 'lunch', 'dinner'],
    image: '🍗',
    color: 'from-amber-50 to-orange-50'
  },
  {
    slug: 'greek-yogurt-berry-bowl',
    title: 'Greek Yogurt Berry Bowl',
    description: 'A creamy, protein-packed breakfast or snack that takes minutes to assemble. Perfect for busy mornings when you need something nutritious fast.',
    mealCategory: ['breakfast', 'snack'],
    ingredients: ['Greek yogurt', 'Oats', 'Seasonings'],
    ingredientCategories: [
      { category: 'Base', items: ['1 cup plain Greek yogurt (2% or whole)'] },
      { category: 'Toppings', items: ['½ cup mixed berries (fresh or frozen)', '2 tbsp granola or oats', '1 tbsp honey or maple syrup', '1 tbsp chia seeds (optional)'] }
    ],
    instructions: [
      'Spoon Greek yogurt into a bowl.',
      'Top with berries, granola, and chia seeds.',
      'Drizzle with honey.',
      'Eat immediately or refrigerate for up to 2 hours.'
    ],
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    servings: 1,
    estimatedProtein: '~20g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Greek yogurt', swap: 'Cottage cheese (blend until smooth)' },
      { original: 'Mixed berries', swap: 'Sliced banana or diced mango' },
      { original: 'Honey', swap: 'Maple syrup or mashed dates' }
    ],
    mealPrepTip: 'Prep 3-4 jars on Sunday: layer yogurt, berries, and granola in mason jars. Keep granola separate until serving to maintain crunch.',
    faq: [
      { question: 'Which Greek yogurt is best for protein?', answer: 'Look for yogurts with at least 15g protein per serving. Plain, full-fat or 2% tends to be most satisfying.' },
      { question: 'Can I use frozen berries?', answer: 'Yes! They\'ll thaw and create a nice syrup. Just add them right before eating.' }
    ],
    tags: ['quick', 'breakfast', 'snack', 'no-cook', 'high-protein'],
    image: '🫐',
    color: 'from-purple-50 to-pink-50'
  },
  {
    slug: 'high-protein-breakfast-wrap',
    title: 'High-Protein Breakfast Wrap',
    description: 'A portable, protein-rich breakfast you can eat on the go. Eggs, cheese, and your favorite fillings wrapped up for a satisfying start.',
    mealCategory: ['breakfast'],
    ingredients: ['Eggs', 'Tortillas', 'Cheese', 'Spinach', 'Peppers'],
    ingredientCategories: [
      { category: 'Base', items: ['3 large eggs', '1 large flour tortilla'] },
      { category: 'Fillings', items: ['¼ cup shredded cheese', '1 cup fresh spinach', '¼ bell pepper, diced', 'Salt and pepper to taste'] },
      { category: 'Optional', items: ['2 tbsp salsa', '1 tbsp avocado'] }
    ],
    instructions: [
      'Whisk eggs in a bowl with salt and pepper.',
      'Heat a non-stick skillet over medium heat. Lightly coat with oil or cooking spray.',
      'Pour in eggs and scramble gently, adding spinach and peppers in the last minute.',
      'Warm the tortilla in the same pan for 15 seconds per side.',
      'Layer eggs, cheese, and optional toppings on the tortilla.',
      'Fold in the sides and roll up tightly.',
      'Slice in half and serve.'
    ],
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 1,
    estimatedProtein: '~25g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Flour tortilla', swap: 'Whole wheat or low-carb tortilla' },
      { original: 'Eggs', swap: 'Egg whites (use ½ cup) for lower fat' },
      { original: 'Cheese', swap: 'Nutritional yeast for dairy-free' }
    ],
    mealPrepTip: 'Make 5 wraps on Sunday. Wrap individually in foil and freeze. Microwave 2 minutes from frozen for a grab-and-go breakfast all week.',
    faq: [
      { question: 'How do I prevent the tortilla from getting soggy?', answer: 'Let the egg mixture cool slightly before wrapping, and add wet ingredients (salsa, avocado) right before eating.' },
      { question: 'Can I make these the night before?', answer: 'Yes — assemble and refrigerate overnight. Reheat in a skillet for 2 minutes per side for a crispy exterior.' }
    ],
    tags: ['breakfast', 'quick', 'portable', 'high-protein', 'meal-prep'],
    image: '🌯',
    color: 'from-yellow-50 to-amber-50'
  },
  {
    slug: 'cottage-cheese-toast',
    title: 'Cottage Cheese Power Toast',
    description: 'A simple, protein-rich open-faced toast that\'s endlessly customizable. Ready in under 5 minutes and perfect for breakfast or a snack.',
    mealCategory: ['breakfast', 'snack'],
    ingredients: ['Bread', 'Cheese', 'Tomatoes', 'Seasonings'],
    ingredientCategories: [
      { category: 'Base', items: ['2 slices whole grain bread', '½ cup cottage cheese'] },
      { category: 'Toppings', items: ['1 tomato, sliced', 'Everything bagel seasoning', 'Red pepper flakes (optional)', 'Fresh basil or microgreens'] },
      { category: 'Optional', items: ['Drizzle of olive oil', 'Sliced avocado'] }
    ],
    instructions: [
      'Toast bread to your preferred level of crispness.',
      'Spread cottage cheese generously on each slice.',
      'Top with sliced tomatoes.',
      'Sprinkle with everything bagel seasoning and red pepper flakes.',
      'Add fresh herbs and a drizzle of olive oil if desired.',
      'Serve immediately.'
    ],
    prepTime: 5,
    cookTime: 3,
    totalTime: 8,
    servings: 1,
    estimatedProtein: '~22g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Whole grain bread', swap: 'Sourdough or seeded bread' },
      { original: 'Cottage cheese', swap: 'Whipped ricotta' },
      { original: 'Tomatoes', swap: 'Cucumber slices or roasted red peppers' }
    ],
    mealPrepTip: 'Keep cottage cheese and bread stocked at all times. This is your 5-minute backup meal when nothing else is ready.',
    faq: [
      { question: 'Is cottage cheese really that high in protein?', answer: 'Yes — about 14g per half cup. It\'s one of the easiest protein sources available.' },
      { question: 'I don\'t like the texture of cottage cheese.', answer: 'Try blending it until smooth — it becomes creamy like a spread while keeping all the protein.' }
    ],
    tags: ['quick', 'breakfast', 'snack', 'high-protein', 'beginner'],
    image: '🍞',
    color: 'from-orange-50 to-red-50'
  },
  {
    slug: 'turkey-avocado-wrap',
    title: 'Turkey Avocado Wrap',
    description: 'A no-cook lunch that comes together in minutes. Sliced turkey, creamy avocado, and crisp veggies in a whole wheat wrap.',
    mealCategory: ['lunch'],
    ingredients: ['Turkey', 'Tortillas', 'Avocado', 'Lettuce', 'Tomatoes'],
    ingredientCategories: [
      { category: 'Base', items: ['1 large whole wheat tortilla', '4-5 oz deli turkey breast'] },
      { category: 'Fillings', items: ['½ avocado, sliced', '1 cup shredded lettuce', '3-4 tomato slices', '2 tbsp hummus or mustard'] },
      { category: 'Seasoning', items: ['Salt and pepper', 'Lemon juice (optional)'] }
    ],
    instructions: [
      'Lay tortilla flat and spread hummus or mustard down the center.',
      'Layer turkey slices on one half of the tortilla.',
      'Add avocado slices, lettuce, and tomato.',
      'Season with salt, pepper, and a squeeze of lemon.',
      'Fold in the sides, then roll tightly from the bottom.',
      'Slice diagonally and serve.'
    ],
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 1,
    estimatedProtein: '~28g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Deli turkey', swap: 'Rotisserie chicken or grilled chicken strips' },
      { original: 'Whole wheat tortilla', swap: 'Large lettuce leaves for low-carb' },
      { original: 'Hummus', swap: 'Pesto or Greek yogurt ranch' }
    ],
    mealPrepTip: 'Pack ingredients separately and assemble at lunch. The avocado stays fresher when you add a squeeze of lemon and wrap it tightly.',
    faq: [
      { question: 'How do I pick a ripe avocado?', answer: 'It should yield slightly to gentle pressure. If it\'s rock hard, let it sit on the counter for 1-2 days.' },
      { question: 'Is deli turkey healthy?', answer: 'Look for low-sodium options with minimal ingredients. Freshly sliced turkey from the deli counter is often a better choice than pre-packaged.' }
    ],
    tags: ['lunch', 'quick', 'no-cook', 'high-protein', 'portable'],
    image: '🥑',
    color: 'from-green-50 to-emerald-50'
  },
  {
    slug: 'tuna-rice-bowl',
    title: 'Tuna Rice Bowl',
    description: 'A pantry-staple bowl that proves you don\'t need fancy ingredients for a high-protein meal. Canned tuna, rice, and simple seasonings.',
    mealCategory: ['lunch', 'dinner'],
    ingredients: ['Tuna', 'Rice', 'Avocado', 'Seasonings'],
    ingredientCategories: [
      { category: 'Base', items: ['1 can tuna (5 oz), drained', '1 cup cooked rice'] },
      { category: 'Toppings', items: ['½ avocado, diced', '2 tbsp soy sauce', '1 tsp sesame oil', 'Sliced green onions', 'Sesame seeds'] },
      { category: 'Optional', items: ['1 sheet nori, cut into strips', 'Sriracha or chili flakes', 'Pickled ginger'] }
    ],
    instructions: [
      'Cook rice according to package directions (or use leftover rice).',
      'Drain tuna well and flake with a fork.',
      'Mix tuna with soy sauce and sesame oil.',
      'Assemble bowl: rice on bottom, tuna mixture on top.',
      'Add diced avocado, green onions, and sesame seeds.',
      'Top with nori strips and sriracha if desired.'
    ],
    prepTime: 5,
    cookTime: 20,
    totalTime: 25,
    servings: 1,
    estimatedProtein: '~38g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Canned tuna', swap: 'Canned salmon or cooked shrimp' },
      { original: 'White rice', swap: 'Brown rice or cauliflower rice' },
      { original: 'Avocado', swap: 'Cucumber or edamame' }
    ],
    mealPrepTip: 'Cook a batch of rice at the start of the week. Keep canned tuna stocked — this meal comes together in 5 minutes with pre-cooked rice.',
    faq: [
      { question: 'How much tuna is safe to eat per week?', answer: 'Canned light tuna is lower in mercury — 2-3 servings per week is generally considered safe. Vary with salmon or other proteins.' },
      { question: 'Can I use microwave rice?', answer: 'Absolutely. It\'s a great shortcut for busy days and still works perfectly in this bowl.' }
    ],
    tags: ['lunch', 'dinner', 'quick', 'high-protein', 'pantry', 'meal-prep'],
    image: '🍣',
    color: 'from-blue-50 to-cyan-50'
  },
  {
    slug: 'protein-oatmeal',
    title: 'Protein Oatmeal',
    description: 'Start your morning with a warm, filling bowl of oats boosted with extra protein. Keeps you satisfied until lunch without the mid-morning crash.',
    mealCategory: ['breakfast'],
    ingredients: ['Oats', 'Greek yogurt', 'Seasonings'],
    ingredientCategories: [
      { category: 'Base', items: ['½ cup rolled oats', '1 cup water or milk', '1 scoop protein powder (vanilla or unflavored)'] },
      { category: 'Toppings', items: ['1 tbsp peanut butter or almond butter', '½ banana, sliced', 'Cinnamon', '1 tbsp chia seeds'] },
      { category: 'Optional', items: ['Handful of berries', 'Drizzle of honey'] }
    ],
    instructions: [
      'Cook oats with water or milk according to package directions.',
      'Once cooked, remove from heat and stir in protein powder until smooth.',
      'If too thick, add a splash of milk.',
      'Pour into a bowl and add toppings.',
      'Top with nut butter, banana, cinnamon, and chia seeds.',
      'Enjoy warm.'
    ],
    prepTime: 2,
    cookTime: 5,
    totalTime: 7,
    servings: 1,
    estimatedProtein: '~30g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Protein powder', swap: '¼ cup powdered milk + 2 tbsp Greek yogurt stirred in after cooking' },
      { original: 'Rolled oats', swap: 'Steel-cut oats (add 15 min cook time)' },
      { original: 'Peanut butter', swap: 'Tahini or sunflower seed butter' }
    ],
    mealPrepTip: 'Make overnight protein oats: combine oats, milk, protein powder, and chia seeds in a jar. Refrigerate overnight. In the morning, microwave 90 seconds and add toppings.',
    faq: [
      { question: 'When should I add protein powder?', answer: 'After cooking, off the heat. Adding it while boiling can make it clumpy and change the texture.' },
      { question: 'What protein powder works best?', answer: 'Whey or casein blend well into oats. Plant-based works too — just add a little extra liquid.' }
    ],
    tags: ['breakfast', 'quick', 'high-protein', 'warm', 'meal-prep'],
    image: '🥣',
    color: 'from-amber-50 to-yellow-50'
  },
  {
    slug: 'egg-veggie-bowl',
    title: 'Egg & Veggie Power Bowl',
    description: 'A colorful, nutrient-dense bowl built around eggs and whatever vegetables you have. Versatile enough for breakfast, lunch, or a light dinner.',
    mealCategory: ['breakfast', 'lunch', 'dinner'],
    ingredients: ['Eggs', 'Spinach', 'Tomatoes', 'Peppers', 'Potatoes'],
    ingredientCategories: [
      { category: 'Base', items: ['3 large eggs', '2 cups baby spinach', '1 medium potato, diced small'] },
      { category: 'Vegetables', items: ['½ cup cherry tomatoes, halved', '¼ bell pepper, diced'] },
      { category: 'Seasoning', items: ['2 tbsp olive oil', 'Salt and pepper', '½ tsp cumin', 'Hot sauce (optional)'] }
    ],
    instructions: [
      'Dice potato into small cubes. Microwave for 3 minutes to par-cook.',
      'Heat olive oil in a skillet over medium heat.',
      'Add potatoes and cook 5-6 minutes until starting to brown.',
      'Add bell pepper and cook 2 more minutes.',
      'Add spinach and tomatoes, cook until spinach wilts (1-2 minutes).',
      'Push vegetables to one side. Crack eggs into the empty side.',
      'Cook eggs to your preference (sunny-side-up works great here).',
      'Season everything with salt, pepper, and cumin. Serve with hot sauce.'
    ],
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 1,
    estimatedProtein: '~22g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Potato', swap: 'Sweet potato or butternut squash' },
      { original: 'Spinach', swap: 'Kale or frozen vegetables' },
      { original: 'Eggs', swap: 'Tofu scramble (for plant-based)' }
    ],
    mealPrepTip: 'Roast a tray of diced potatoes and peppers on Sunday. During the week, just reheat and add fresh eggs — cuts your cook time to 8 minutes.',
    faq: [
      { question: 'Can I use frozen vegetables?', answer: 'Yes — frozen spinach, peppers, or mixed vegetables work perfectly. No need to thaw first.' },
      { question: 'How do I get runny yolks without overcooking?', answer: 'Cook the vegetables first, then add eggs last. Cover the skillet for 2 minutes for perfectly runny yolks.' }
    ],
    tags: ['breakfast', 'lunch', 'dinner', 'high-protein', 'vegetables', 'versatile'],
    image: '🥚',
    color: 'from-yellow-50 to-green-50'
  },
  {
    slug: 'salmon-rice-bowl',
    title: 'Salmon Rice Bowl',
    description: 'A restaurant-quality bowl at home. Flaky salmon over seasoned rice with fresh vegetables and a simple sauce. Feels indulgent but is surprisingly simple.',
    mealCategory: ['dinner'],
    ingredients: ['Salmon', 'Rice', 'Avocado', 'Spinach', 'Seasonings'],
    ingredientCategories: [
      { category: 'Base', items: ['1 salmon fillet (5-6 oz)', '1 cup cooked rice'] },
      { category: 'Vegetables', items: ['½ avocado, sliced', '1 cup fresh spinach or cucumber', 'Sliced green onions', 'Sesame seeds'] },
      { category: 'Sauce', items: ['2 tbsp soy sauce', '1 tbsp rice vinegar', '1 tsp sesame oil', '1 tsp honey'] }
    ],
    instructions: [
      'Cook rice according to package directions.',
      'Pat salmon dry and season with salt and pepper.',
      'Heat a skillet over medium-high with a little oil.',
      'Cook salmon skin-side down for 4 minutes, then flip and cook 3 more minutes.',
      'Mix sauce ingredients in a small bowl.',
      'Assemble bowl: rice, salmon, avocado, spinach, green onions.',
      'Drizzle with sauce and sprinkle sesame seeds.'
    ],
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 1,
    estimatedProtein: '~40g per serving',
    difficulty: 'Medium',
    substitutions: [
      { original: 'Salmon fillet', swap: 'Canned salmon or shrimp' },
      { original: 'Rice', swap: 'Quinoa or cauliflower rice' },
      { original: 'Avocado', swap: 'Edamame or mango' }
    ],
    mealPrepTip: 'Bake 4 salmon fillets at once (400°F for 12-15 minutes). Store for up to 3 days and add to bowls throughout the week.',
    faq: [
      { question: 'How do I know salmon is cooked?', answer: 'It should flake easily with a fork and be opaque throughout. Internal temperature of 145°F.' },
      { question: 'Can I use frozen salmon?', answer: 'Yes — thaw overnight in the refrigerator or use the defrost setting on your microwave. Pat very dry before cooking.' }
    ],
    tags: ['dinner', 'high-protein', 'omega-3', 'restaurant-quality'],
    image: '🐟',
    color: 'from-orange-50 to-rose-50'
  },
  {
    slug: 'greek-yogurt-chicken-bowl',
    title: 'Greek Yogurt Chicken Bowl',
    description: 'Creamy, tangy yogurt-marinated chicken served over rice with fresh vegetables. The yogurt makes the chicken incredibly tender and flavorful.',
    mealCategory: ['lunch', 'dinner'],
    ingredients: ['Chicken', 'Greek yogurt', 'Rice', 'Tomatoes', 'Seasonings'],
    ingredientCategories: [
      { category: 'Protein', items: ['1 lb chicken breast, cubed', '½ cup plain Greek yogurt'] },
      { category: 'Base', items: ['1 cup cooked rice'] },
      { category: 'Vegetables', items: ['1 cup cherry tomatoes, halved', '½ cucumber, diced', 'Fresh parsley or dill'] },
      { category: 'Seasoning', items: ['2 tsp olive oil', '1 tsp garlic powder', '1 tsp cumin', '½ tsp paprika', 'Salt and pepper', 'Lemon juice'] }
    ],
    instructions: [
      'Mix Greek yogurt with olive oil, garlic powder, cumin, paprika, salt, and pepper.',
      'Coat chicken cubes in the yogurt marinade. Let sit 15 minutes (or refrigerate up to 4 hours).',
      'Heat a skillet over medium-high heat.',
      'Cook chicken for 6-8 minutes until golden and cooked through.',
      'Meanwhile, warm rice and prep vegetables.',
      'Assemble bowls: rice, chicken, tomatoes, cucumber, fresh herbs.',
      'Squeeze lemon over everything and serve.'
    ],
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    servings: 4,
    estimatedProtein: '~38g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Chicken breast', swap: 'Chicken thighs (add 2-3 min cook time)' },
      { original: 'Greek yogurt marinade', swap: 'Olive oil and lemon marinade' },
      { original: 'Rice', swap: 'Couscous or pita bread' }
    ],
    mealPrepTip: 'Marinate chicken in yogurt overnight. It gets more flavorful and tender the longer it sits. Cook fresh each day or batch-cook for 3 days of lunches.',
    faq: [
      { question: 'Does the yogurt make the chicken taste sour?', answer: 'No — the yogurt tenderizes and adds subtle tanginess. The spices are the dominant flavor.' },
      { question: 'Can I grill instead of pan-fry?', answer: 'Absolutely. Thread onto skewers and grill 4-5 minutes per side. The yogurt creates a nice char.' }
    ],
    tags: ['lunch', 'dinner', 'high-protein', 'marinated', 'meal-prep'],
    image: '🥙',
    color: 'from-emerald-50 to-teal-50'
  },
  {
    slug: 'bean-cheese-quesadilla',
    title: 'Black Bean & Cheese Quesadilla',
    description: 'A quick, satisfying meal using pantry staples. Crispy tortilla filled with protein-rich beans and melted cheese. Ready in under 15 minutes.',
    mealCategory: ['lunch', 'dinner', 'snack'],
    ingredients: ['Tortillas', 'Beans', 'Cheese', 'Peppers', 'Seasonings'],
    ingredientCategories: [
      { category: 'Base', items: ['2 large flour tortillas', '1 cup canned black beans, drained', '½ cup shredded cheese'] },
      { category: 'Fillings', items: ['¼ bell pepper, diced', '2 tbsp salsa', '1 tbsp sour cream or Greek yogurt'] },
      { category: 'Seasoning', items: ['½ tsp cumin', '¼ tsp chili powder', 'Salt to taste'] }
    ],
    instructions: [
      'Mash half the black beans with a fork. Leave the other half whole for texture.',
      'Mix beans with cumin, chili powder, and salt.',
      'Lay one tortilla flat. Spread bean mixture on one half.',
      'Top with cheese and diced peppers.',
      'Fold tortilla over to create a half-moon.',
      'Cook in a dry skillet over medium heat, 2-3 minutes per side until golden and cheese melts.',
      'Slice into triangles and serve with salsa and sour cream.'
    ],
    prepTime: 5,
    cookTime: 8,
    totalTime: 13,
    servings: 1,
    estimatedProtein: '~24g per serving',
    difficulty: 'Easy',
    substitutions: [
      { original: 'Black beans', swap: 'Pinto beans or refried beans' },
      { original: 'Flour tortilla', swap: 'Corn tortilla (use two small ones)' },
      { original: 'Cheese', swap: 'Vegan cheese or nutritional yeast' }
    ],
    mealPrepTip: 'Make a batch of seasoned beans on Sunday. They keep for 5 days and can be used for quesadillas, bowls, or tostadas all week.',
    faq: [
      { question: 'How do I get it crispy without burning?', answer: 'Medium heat is key. Don\'t rush it with high heat — the tortilla will burn before the cheese melts.' },
      { question: 'Can I add meat?', answer: 'Absolutely — shredded chicken or ground turkey work great. Add about ¼ cup per quesadilla.' }
    ],
    tags: ['lunch', 'dinner', 'snack', 'quick', 'high-protein', 'pantry'],
    image: '🫓',
    color: 'from-amber-50 to-orange-50'
  },
  {
    slug: 'tofu-stir-fry',
    title: 'Crispy Tofu Stir-Fry',
    description: 'Plant-based protein at its best. Crispy tofu with colorful vegetables in a simple savory sauce. Satisfying, quick, and endlessly customizable.',
    mealCategory: ['lunch', 'dinner'],
    ingredients: ['Tofu', 'Broccoli', 'Peppers', 'Rice', 'Seasonings'],
    ingredientCategories: [
      { category: 'Protein', items: ['1 block extra-firm tofu (14 oz), pressed and cubed'] },
      { category: 'Vegetables', items: ['2 cups broccoli florets', '1 bell pepper, sliced', '2 cloves garlic, minced'] },
      { category: 'Sauce', items: ['3 tbsp soy sauce', '1 tbsp rice vinegar', '1 tbsp maple syrup', '1 tsp sesame oil', '½ tsp ginger (grated)'] },
      { category: 'Base', items: ['2 cups cooked rice'] }
    ],
    instructions: [
      'Press tofu for 15 minutes (wrap in towel, place a plate on top). Cut into cubes.',
      'Mix sauce ingredients in a small bowl.',
      'Heat oil in a large skillet or wok over high heat.',
      'Add tofu in a single layer. Cook without moving for 3-4 minutes until golden.',
      'Flip and cook another 3 minutes.',
      'Add garlic, broccoli, and peppers. Stir-fry 3-4 minutes.',
      'Pour sauce over everything and toss to coat.',
      'Serve over rice.'
    ],
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    servings: 3,
    estimatedProtein: '~22g per serving',
    difficulty: 'Medium',
    substitutions: [
      { original: 'Tofu', swap: 'Tempeh or edamame' },
      { original: 'Broccoli', swap: 'Snap peas, green beans, or frozen stir-fry mix' },
      { original: 'Rice', swap: 'Noodles or cauliflower rice' }
    ],
    mealPrepTip: 'Press and cube tofu ahead of time — store in the fridge for up to 3 days. When ready to eat, just cook and add vegetables.',
    faq: [
      { question: 'Why do I need to press tofu?', answer: 'Pressing removes excess water so the tofu gets crispy instead of steaming. It also helps it absorb the sauce better.' },
      { question: 'What if my tofu falls apart?', answer: 'Use extra-firm tofu and don\'t move it for the first 3-4 minutes. Let it develop a crust before flipping.' }
    ],
    tags: ['lunch', 'dinner', 'high-protein', 'plant-based', 'stir-fry'],
    image: '🥡',
    color: 'from-green-50 to-lime-50'
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(r => r.slug === slug);
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter(r => r.mealCategory.includes(category as any));
}

export function searchRecipes(query: string): Recipe[] {
  const q = query.toLowerCase();
  return recipes.filter(r =>
    r.title.toLowerCase().includes(q) ||
    r.description.toLowerCase().includes(q) ||
    r.tags.some(t => t.includes(q)) ||
    r.ingredients.some(i => i.toLowerCase().includes(q))
  );
}

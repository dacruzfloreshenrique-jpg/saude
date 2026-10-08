import { recipes, Recipe } from '../data/recipes';

interface MealInput {
  ingredients: string[];
  time: string;
  mealType: string;
}

// Simple matching algorithm based on ingredients, time, and meal type
export function findMealRecommendation(input: MealInput): Recipe | null {
  const { ingredients, time, mealType } = input;
  
  const timeMinutes: Record<string, number> = {
    '5': 5,
    '10': 10,
    '20': 20,
    '30+': 60
  };

  const maxTime = timeMinutes[time] || 30;

  // Score each recipe
  const scored = recipes.map(recipe => {
    let score = 0;

    // Meal type match (high weight)
    if (recipe.mealCategory.includes(mealType.toLowerCase() as any)) {
      score += 10;
    }

    // Ingredient match
    const recipeIngredients = recipe.ingredients.map(i => i.toLowerCase());
    const matchedIngredients = ingredients.filter(ing =>
      recipeIngredients.some(ri => ri.includes(ing.toLowerCase()) || ing.toLowerCase().includes(ri))
    );
    score += matchedIngredients.length * 5;

    // Time compatibility
    if (recipe.totalTime <= maxTime) {
      score += 3;
    } else if (recipe.totalTime <= maxTime + 10) {
      score += 1;
    }

    // Bonus for matching multiple categories
    if (matchedIngredients.length >= 3) {
      score += 5;
    }

    return { recipe, score };
  });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Return best match if score > 0
  if (scored[0].score > 0) {
    return scored[0].recipe;
  }

  // Fallback: return a recipe matching the meal type
  const mealTypeMatch = recipes.find(r => r.mealCategory.includes(mealType.toLowerCase() as any));
  return mealTypeMatch || recipes[0];
}

export function getIngredientCategories() {
  return {
    protein: ['Chicken', 'Eggs', 'Greek yogurt', 'Tuna', 'Turkey', 'Beef', 'Salmon', 'Tofu', 'Beans'],
    carbohydrates: ['Rice', 'Potatoes', 'Oats', 'Bread', 'Tortillas', 'Pasta'],
    vegetables: ['Broccoli', 'Spinach', 'Tomatoes', 'Peppers', 'Lettuce', 'Frozen vegetables'],
    other: ['Avocado', 'Cheese', 'Olive oil', 'Seasonings']
  };
}

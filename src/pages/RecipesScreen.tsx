import { PageHeader } from '@/components/PageHeader';
import { BottomNav } from '@/components/BottomNav';
import { Coffee, Milk, IceCream2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const recipes = [
  {
    id: '1',
    name: 'Classic Cappuccino',
    description: 'Espresso with steamed milk foam',
    prepTime: '5 min',
    icon: Coffee,
    difficulty: 'Easy',
  },
  {
    id: '2',
    name: 'Iced Caramel Latte',
    description: 'Cold brew with caramel and milk',
    prepTime: '3 min',
    icon: IceCream2,
    difficulty: 'Easy',
  },
  {
    id: '3',
    name: 'Vanilla Flat White',
    description: 'Ristretto shots with steamed milk',
    prepTime: '4 min',
    icon: Milk,
    difficulty: 'Medium',
  },
  {
    id: '4',
    name: 'Mocha Delight',
    description: 'Espresso, chocolate, and whipped cream',
    prepTime: '6 min',
    icon: Sparkles,
    difficulty: 'Medium',
  },
];

export default function RecipesScreen() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title="Recipes" />

      <main className="max-w-lg mx-auto px-4 py-6 space-y-4">
        <p className="text-muted-foreground">
          Create delicious coffee drinks at home
        </p>

        <div className="grid grid-cols-2 gap-4">
          {recipes.map((recipe, i) => (
            <div
              key={recipe.id}
              className="coffee-card p-4 animate-scale-in cursor-pointer hover:shadow-medium"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/50 to-accent/30 flex items-center justify-center mb-3">
                <recipe.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-1">{recipe.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{recipe.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{recipe.prepTime}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="coffee-card p-5 text-center mt-6 bg-secondary/10 border border-secondary/20">
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">More Coming Soon</h3>
          <p className="text-sm text-muted-foreground">
            We're brewing up more delicious recipes for you!
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

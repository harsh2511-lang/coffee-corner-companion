import { useState } from 'react';
import { Coffee, FlameKindling, BookOpen, Lightbulb } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { CategoryCard } from '@/components/CategoryCard';
import { BottomNav } from '@/components/BottomNav';
import { CoffeeCard } from '@/components/CoffeeCard';
import { coffees } from '@/data/coffeeData';

const categories = [
  { to: '/coffees', icon: Coffee, title: 'Coffee Types', description: 'Explore varieties' },
  { to: '/brewing', icon: FlameKindling, title: 'Brewing Methods', description: 'Perfect your brew' },
  { to: '/recipes', icon: BookOpen, title: 'Recipes', description: 'Creative drinks' },
  { to: '/facts', icon: Lightbulb, title: 'Coffee Facts', description: 'Learn more' },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const filteredCoffees = coffees.filter(
    (coffee) =>
      coffee.name.toLowerCase().includes(search.toLowerCase()) ||
      coffee.origin.toLowerCase().includes(search.toLowerCase())
  );

  const displayCoffees = search ? filteredCoffees : coffees.slice(0, 4);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary to-coffee-dark px-5 pt-12 pb-8 rounded-b-3xl">
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-2xl font-bold text-primary-foreground mb-1">
            Good Morning ☕
          </h1>
          <p className="text-secondary/80 mb-6">What will you brew today?</p>
          <SearchBar value={search} onChange={setSearch} placeholder="Search coffee, origin..." />
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-8">
        {/* Categories */}
        <section>
          <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Explore</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.to} {...cat} delay={i * 100} />
            ))}
          </div>
        </section>

        {/* Featured or Search Results */}
        <section>
          <h2 className="font-serif text-lg font-semibold text-foreground mb-4">
            {search ? 'Search Results' : 'Featured Coffees'}
          </h2>
          {displayCoffees.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {displayCoffees.map((coffee) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No coffees found</p>
            </div>
          )}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

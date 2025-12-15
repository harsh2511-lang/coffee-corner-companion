import { useState } from 'react';
import { FactCard } from '@/components/FactCard';
import { PageHeader } from '@/components/PageHeader';
import { BottomNav } from '@/components/BottomNav';
import { coffeeFacts } from '@/data/coffeeData';

const categories = ['All', 'History', 'Trivia', 'Tips'] as const;

export default function CoffeeFactsScreen() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredFacts = coffeeFacts.filter(
    (fact) =>
      activeCategory === 'All' ||
      fact.category.toLowerCase() === activeCategory.toLowerCase().slice(0, -1) ||
      fact.category === activeCategory.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title="Coffee Facts" />

      <main className="max-w-lg mx-auto px-4 py-6 space-y-4">
        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Facts */}
        <div className="space-y-4">
          {filteredFacts.map((fact, i) => (
            <FactCard key={fact.id} fact={fact} index={i} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

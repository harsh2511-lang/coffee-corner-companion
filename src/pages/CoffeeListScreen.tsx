import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { CoffeeCard } from '@/components/CoffeeCard';
import { PageHeader } from '@/components/PageHeader';
import { BottomNav } from '@/components/BottomNav';
import { coffees } from '@/data/coffeeData';

const roastFilters = ['All', 'Light', 'Medium', 'Dark'] as const;

export default function CoffeeListScreen() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredCoffees = coffees.filter((coffee) => {
    const matchesSearch =
      coffee.name.toLowerCase().includes(search.toLowerCase()) ||
      coffee.origin.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === 'All' || coffee.roastLevel === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title="Coffee Types" />

      <main className="max-w-lg mx-auto px-4 py-4 space-y-4">
        <SearchBar value={search} onChange={setSearch} placeholder="Search coffee types..." />

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {roastFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-muted'
              }`}
            >
              {filter} Roast
            </button>
          ))}
        </div>

        {/* Coffee Grid */}
        {filteredCoffees.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredCoffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No coffees match your search</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

import { BrewingMethodCard } from '@/components/BrewingMethodCard';
import { PageHeader } from '@/components/PageHeader';
import { BottomNav } from '@/components/BottomNav';
import { brewingMethods } from '@/data/coffeeData';

export default function BrewingListScreen() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title="Brewing Methods" />

      <main className="max-w-lg mx-auto px-4 py-6 space-y-4">
        <p className="text-muted-foreground">
          Master the art of brewing with our step-by-step guides
        </p>

        <div className="space-y-4">
          {brewingMethods.map((method, i) => (
            <BrewingMethodCard key={method.id} method={method} index={i} />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

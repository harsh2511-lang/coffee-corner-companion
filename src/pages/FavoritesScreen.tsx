import { Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/PageHeader';
import { BottomNav } from '@/components/BottomNav';
import { useFavorites } from '@/context/FavoritesContext';
import { coffees } from '@/data/coffeeData';
import { toast } from 'sonner';

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavorites();

  const favoriteCoffees = coffees.filter((coffee) => favorites.includes(coffee.id));

  const handleRemove = (id: string, name: string) => {
    removeFavorite(id);
    toast.success(`${name} removed from favorites`);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title="Favorites" showBack={false} />

      <main className="max-w-lg mx-auto px-4 py-6">
        {favoriteCoffees.length > 0 ? (
          <div className="space-y-4">
            {favoriteCoffees.map((coffee, i) => (
              <div
                key={coffee.id}
                className="coffee-card flex overflow-hidden animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Link to={`/coffee/${coffee.id}`} className="flex flex-1">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <h3 className="font-serif font-semibold text-foreground mb-1">{coffee.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{coffee.origin}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {coffee.roastLevel} Roast
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => handleRemove(coffee.id, coffee.name)}
                  className="px-4 flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">No favorites yet</h3>
            <p className="text-muted-foreground mb-6">
              Start exploring and save your favorite coffees here
            </p>
            <Link
              to="/coffees"
              className="inline-flex px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
            >
              Explore Coffees
            </Link>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

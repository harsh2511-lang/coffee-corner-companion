import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import { Coffee } from '@/data/coffeeData';
import { useFavorites } from '@/context/FavoritesContext';
import { StrengthIndicator } from './StrengthIndicator';

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(coffee.id);

  return (
    <div className="coffee-card overflow-hidden animate-scale-in">
      <div className="relative h-40 overflow-hidden">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(coffee.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm transition-all duration-200 hover:bg-card"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              favorite ? 'fill-destructive text-destructive' : 'text-muted-foreground'
            }`}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-card/80 backdrop-blur-sm text-foreground">
            {coffee.roastLevel} Roast
          </span>
        </div>
      </div>
      <Link to={`/coffee/${coffee.id}`} className="block p-4">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{coffee.name}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span>{coffee.origin}</span>
        </div>
        <StrengthIndicator strength={coffee.strength} label="Strength" />
      </Link>
    </div>
  );
}

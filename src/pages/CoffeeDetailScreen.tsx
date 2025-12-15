import { useParams, useNavigate } from 'react-router-dom';
import { Heart, MapPin, Clock, Droplets } from 'lucide-react';
import { coffees } from '@/data/coffeeData';
import { useFavorites } from '@/context/FavoritesContext';
import { StrengthIndicator } from '@/components/StrengthIndicator';
import { toast } from 'sonner';

export default function CoffeeDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const coffee = coffees.find((c) => c.id === id);

  if (!coffee) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Coffee not found</p>
      </div>
    );
  }

  const favorite = isFavorite(coffee.id);

  const handleFavorite = () => {
    toggleFavorite(coffee.id);
    toast.success(favorite ? 'Removed from favorites' : 'Added to favorites');
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Hero Image */}
      <div className="relative h-72">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-12 left-4 p-2 rounded-full bg-card/80 backdrop-blur-sm"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Roast Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-card/90 backdrop-blur-sm text-foreground">
            {coffee.roastLevel} Roast
          </span>
        </div>
      </div>

      <main className="max-w-lg mx-auto px-4 -mt-4 relative z-10">
        <div className="coffee-card p-6 space-y-6">
          {/* Title & Origin */}
          <div>
            <h1 className="font-serif text-2xl font-bold text-foreground mb-2">{coffee.name}</h1>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{coffee.origin}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Clock className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Brew Time</p>
                <p className="text-sm font-medium text-foreground">{coffee.brewingTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Droplets className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Strength</p>
                <p className="text-sm font-medium text-foreground">{coffee.strength}/5</p>
              </div>
            </div>
          </div>

          {/* Strength Indicator */}
          <StrengthIndicator strength={coffee.strength} label="Strength Level" />

          {/* Description */}
          <div>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-2">About</h2>
            <p className="text-muted-foreground leading-relaxed">{coffee.description}</p>
          </div>

          {/* Flavor Notes */}
          <div>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Flavor Notes</h2>
            <div className="flex flex-wrap gap-2">
              {coffee.flavorNotes.map((note) => (
                <span
                  key={note}
                  className="px-3 py-1.5 text-sm rounded-full bg-secondary/30 text-foreground"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="font-serif text-lg font-semibold text-foreground mb-3">Ingredients</h2>
            <ul className="space-y-2">
              {coffee.ingredients.map((ingredient, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Favorites Button */}
          <button
            onClick={handleFavorite}
            className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
              favorite
                ? 'bg-destructive/10 text-destructive hover:bg-destructive/20'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
          >
            <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </main>
    </div>
  );
}

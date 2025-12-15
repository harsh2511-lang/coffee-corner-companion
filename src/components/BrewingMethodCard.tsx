import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';
import { BrewingMethod } from '@/data/coffeeData';

interface BrewingMethodCardProps {
  method: BrewingMethod;
  index: number;
}

export function BrewingMethodCard({ method, index }: BrewingMethodCardProps) {
  return (
    <Link
      to={`/brewing/${method.id}`}
      className="coffee-card p-5 flex items-center gap-4 group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/50 to-accent/30 flex items-center justify-center text-3xl shrink-0">
        {method.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{method.name}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{method.brewTime}</span>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

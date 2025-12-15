import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function CategoryCard({ to, icon: Icon, title, description, delay = 0 }: CategoryCardProps) {
  return (
    <Link
      to={to}
      className="category-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary/50 to-accent/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-serif text-base font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </Link>
  );
}

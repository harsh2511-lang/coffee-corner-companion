import { Lightbulb, BookOpen, Sparkles } from 'lucide-react';
import { CoffeeFact } from '@/data/coffeeData';

interface FactCardProps {
  fact: CoffeeFact;
  index: number;
}

const categoryIcons = {
  history: BookOpen,
  trivia: Sparkles,
  tip: Lightbulb,
};

const categoryColors = {
  history: 'from-amber-500/20 to-orange-500/20',
  trivia: 'from-violet-500/20 to-purple-500/20',
  tip: 'from-emerald-500/20 to-teal-500/20',
};

const categoryLabels = {
  history: 'History',
  trivia: 'Trivia',
  tip: 'Pro Tip',
};

export function FactCard({ fact, index }: FactCardProps) {
  const Icon = categoryIcons[fact.category];
  const gradientClass = categoryColors[fact.category];
  const label = categoryLabels[fact.category];

  return (
    <div
      className="coffee-card p-5 animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shrink-0`}>
          <Icon className="w-6 h-6 text-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              {label}
            </span>
          </div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{fact.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{fact.content}</p>
        </div>
      </div>
    </div>
  );
}

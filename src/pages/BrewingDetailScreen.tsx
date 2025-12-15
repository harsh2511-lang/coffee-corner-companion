import { useParams, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle2, Lightbulb, Package } from 'lucide-react';
import { brewingMethods } from '@/data/coffeeData';

export default function BrewingDetailScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const method = brewingMethods.find((m) => m.id === id);

  if (!method) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Brewing method not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary to-coffee-dark px-5 pt-12 pb-8 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-secondary/30 flex items-center justify-center text-4xl">
            {method.icon}
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-primary-foreground">{method.name}</h1>
            <div className="flex items-center gap-1 text-secondary/80">
              <Clock className="w-4 h-4" />
              <span>{method.brewTime}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{method.description}</p>

        {/* Equipment */}
        <section className="coffee-card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-5 h-5 text-secondary" />
            <h2 className="font-serif text-lg font-semibold text-foreground">Equipment Needed</h2>
          </div>
          <ul className="space-y-2">
            {method.equipment.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section className="coffee-card p-5">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-secondary" />
            <h2 className="font-serif text-lg font-semibold text-foreground">Step-by-Step Guide</h2>
          </div>
          <ol className="space-y-4">
            {method.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-primary">{i + 1}</span>
                </div>
                <p className="text-muted-foreground pt-1 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Tips */}
        <section className="coffee-card p-5 bg-secondary/10 border border-secondary/20">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-accent" />
            <h2 className="font-serif text-lg font-semibold text-foreground">Pro Tips</h2>
          </div>
          <ul className="space-y-3">
            {method.tips.map((tip, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="text-accent">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

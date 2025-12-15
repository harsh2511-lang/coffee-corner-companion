import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SteamAnimation } from '@/components/SteamAnimation';

export default function SplashScreen() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => navigate('/home'), 500);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-coffee-dark transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-glow">
            <span className="text-5xl">☕</span>
          </div>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <SteamAnimation />
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-primary-foreground mb-2">
            Coffee Corner
          </h1>
          <p className="text-secondary/90 text-lg">
            Discover the Art of Coffee
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-secondary/60 animate-pulse-soft"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

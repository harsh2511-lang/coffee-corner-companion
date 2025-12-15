import React from 'react';

interface TechBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const TechBackground: React.FC<TechBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative min-h-screen bg-background ${className}`}>
      {/* Circuit Pattern Layer */}
      <div className="fixed inset-0 circuit-pattern opacity-60 pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="fixed inset-0 data-grid pointer-events-none" />
      
      {/* Gradient Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top-right glow */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(168 100% 50% / 0.3) 0%, transparent 70%)',
          }}
        />
        {/* Bottom-left glow */}
        <div 
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, hsl(168 100% 37% / 0.4) 0%, transparent 70%)',
          }}
        />
        {/* Center subtle glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(168 100% 50% / 0.2) 0%, transparent 50%)',
          }}
        />
      </div>
      
      {/* Geometric Lines */}
      <svg 
        className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(168 100% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(168 100% 50%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(168 100% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Diagonal lines */}
        <line x1="0" y1="20%" x2="30%" y2="0" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="70%" y1="100%" x2="100%" y2="70%" stroke="url(#lineGrad)" strokeWidth="1" />
        <line x1="0" y1="60%" x2="15%" y2="40%" stroke="url(#lineGrad)" strokeWidth="0.5" />
        <line x1="85%" y1="30%" x2="100%" y2="15%" stroke="url(#lineGrad)" strokeWidth="0.5" />
      </svg>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default TechBackground;

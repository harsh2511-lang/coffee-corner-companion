interface StrengthIndicatorProps {
  strength: number;
  label?: string;
}

export function StrengthIndicator({ strength, label }: StrengthIndicatorProps) {
  const percentage = (strength / 5) * 100;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-muted-foreground">{label}</span>
          <span className="text-xs font-medium text-foreground">{strength}/5</span>
        </div>
      )}
      <div className="strength-indicator">
        <div
          className="h-full rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

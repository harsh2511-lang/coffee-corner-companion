export function SteamAnimation() {
  return (
    <div className="flex gap-1.5 items-end">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1 h-6 bg-gradient-to-t from-secondary/60 to-transparent rounded-full animate-steam"
          style={{ animationDelay: `${i * 200}ms` }}
        />
      ))}
    </div>
  );
}

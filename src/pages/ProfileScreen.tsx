import { User, Settings, Bell, HelpCircle, LogOut } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { BottomNav } from '@/components/BottomNav';

const menuItems = [
  { icon: Settings, label: 'Settings', description: 'App preferences' },
  { icon: Bell, label: 'Notifications', description: 'Manage alerts' },
  { icon: HelpCircle, label: 'Help & Support', description: 'Get assistance' },
  { icon: LogOut, label: 'Sign Out', description: 'Log out of your account' },
];

export default function ProfileScreen() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader title="Profile" showBack={false} />

      <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <div className="coffee-card p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-foreground/80" />
          </div>
          <h2 className="font-serif text-xl font-bold text-foreground mb-1">Coffee Enthusiast</h2>
          <p className="text-muted-foreground">Exploring the world of coffee</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Favorites', value: '6' },
            { label: 'Brews Tried', value: '3' },
            { label: 'Facts Learned', value: '8' },
          ].map((stat) => (
            <div key={stat.label} className="coffee-card p-4 text-center">
              <p className="font-serif text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Menu Items */}
        <div className="coffee-card overflow-hidden">
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors ${
                i !== menuItems.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <item.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

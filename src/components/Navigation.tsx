import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, MapPin, FileText, Settings, Camera, Phone, CreditCard, Contact, Receipt, Clock } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Calendar },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'contacts', label: 'Contacts', icon: Contact },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'scheduling', label: 'Schedule', icon: Calendar },
    { id: 'routing', label: 'Routes', icon: MapPin },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'billing', label: 'Billing', icon: Receipt },
    { id: 'timesheets', label: 'Timesheets', icon: Clock },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'ai-phone', label: 'AI Phone', icon: Phone },
    { id: 'subscriptions', label: 'Plans', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="bg-gradient-to-b from-green-600 to-green-700 text-white p-4 min-h-screen w-64">
      <div className="mb-8">
        <div className="flex items-center justify-center mb-2">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/6873b29b40c3fb49f72c24d7_1753487226664_3442ec20.png" 
            alt="Lawn-beast Logo" 
            className="h-16 w-auto"
          />
        </div>
        <h1 className="text-xl font-bold text-center">Lawn-beast</h1>
      </div>
      <div className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? 'secondary' : 'ghost'}
              className={`w-full justify-start text-left ${activeTab === item.id ? 'bg-white text-green-700' : 'text-white hover:bg-green-500'}`}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
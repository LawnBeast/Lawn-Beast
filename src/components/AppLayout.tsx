import React, { useState } from 'react';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import CustomerList from './CustomerList';
import ScheduleView from './ScheduleView';
import MapView from './MapView';
import InvoiceList from './InvoiceList';
import PhotoGallery from './PhotoGallery';
import Settings from './Settings';
import ContactList from './ContactList';
import AIPhoneAssist from './AIPhoneAssist';
import SubscriptionManager from './SubscriptionManager';
import CalendarView from './CalendarView';
import BillingManager from './BillingManager';
import TimesheetManager from './TimesheetManager';

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'customers':
        return <CustomerList />;
      case 'contacts':
        return <ContactList />;
      case 'calendar':
        return <CalendarView />;
      case 'scheduling':
        return <ScheduleView />;
      case 'routing':
        return <MapView />;
      case 'invoices':
        return <InvoiceList />;
      case 'billing':
        return <BillingManager />;
      case 'timesheets':
        return <TimesheetManager />;
      case 'photos':
        return <PhotoGallery />;
      case 'ai-phone':
        return <AIPhoneAssist />;
      case 'subscriptions':
        return <SubscriptionManager />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default AppLayout;
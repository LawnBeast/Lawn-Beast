import React, { createContext, useContext, useState } from 'react';
import { Customer, Service, Job, Invoice } from '@/types';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  customers: Customer[];
  services: Service[];
  jobs: Job[];
  invoices: Invoice[];
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  customers: [],
  services: [],
  jobs: [],
  invoices: [],
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const [customers] = useState<Customer[]>([
    { id: '1', name: 'John Smith', email: 'john@email.com', phone: '(555) 123-4567', address: '123 Oak Street' },
    { id: '2', name: 'Sarah Johnson', email: 'sarah@email.com', phone: '(555) 987-6543', address: '456 Pine Avenue' }
  ]);

  const [services] = useState<Service[]>([
    { id: '1', name: 'Lawn Maintenance', description: 'Regular lawn care', price: 45, duration: 60, category: 'lawn' },
    { id: '2', name: 'Snow Removal', description: 'Driveway and walkway clearing', price: 65, duration: 45, category: 'snow' }
  ]);

  const [jobs] = useState<Job[]>([
    { id: '1', customerId: '1', serviceId: '1', scheduledDate: new Date(), status: 'scheduled' }
  ]);

  const [invoices] = useState<Invoice[]>([
    { id: 'INV-001', customerId: '1', jobIds: ['1'], amount: 150, status: 'sent', createdDate: new Date(), dueDate: new Date() }
  ]);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <AppContext.Provider value={{ sidebarOpen, toggleSidebar, customers, services, jobs, invoices }}>
      {children}
    </AppContext.Provider>
  );
};
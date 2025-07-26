export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  coordinates?: { lat: number; lng: number };
  createdAt?: Date;
  subscription?: 'basic' | 'premium' | 'enterprise';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: 'lawn' | 'snow';
}

export interface Job {
  id: string;
  customerId: string;
  serviceId: string;
  scheduledDate: Date;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes?: string;
  photos?: string[];
  route?: { lat: number; lng: number }[];
}

export interface Invoice {
  id: string;
  customerId: string;
  jobIds: string[];
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  createdDate: Date;
  dueDate: Date;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  type: 'customer' | 'lead' | 'vendor';
}

export interface Subscription {
  id: string;
  name: string;
  price: number;
  features: string[];
  type: 'crm' | 'ai-phone';
}

export interface AIPhoneCall {
  id: string;
  customerId: string;
  duration: number;
  transcript: string;
  summary: string;
  date: Date;
  status: 'completed' | 'failed';
}
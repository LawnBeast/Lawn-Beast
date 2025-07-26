import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Zap, Users, Phone, Calendar, MapPin } from 'lucide-react';
import { Subscription } from '@/types';

const SubscriptionManager: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState('basic');
  
  const subscriptions: Subscription[] = [
    {
      id: 'basic',
      name: 'Basic CRM',
      price: 29,
      type: 'crm',
      features: [
        'Up to 100 customers',
        'Basic scheduling',
        'Invoice management',
        'Photo storage (1GB)',
        'Email support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium CRM',
      price: 79,
      type: 'crm',
      features: [
        'Unlimited customers',
        'Advanced scheduling',
        'Route optimization',
        'Google Earth integration',
        'Photo storage (10GB)',
        'Priority support',
        'Custom reports'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise CRM',
      price: 149,
      type: 'crm',
      features: [
        'Everything in Premium',
        'Multi-user access',
        'API access',
        'Custom integrations',
        'Unlimited photo storage',
        '24/7 phone support',
        'Dedicated account manager'
      ]
    },
    {
      id: 'ai-basic',
      name: 'AI Phone Basic',
      price: 49,
      type: 'ai-phone',
      features: [
        '100 AI calls/month',
        'Basic call handling',
        'Appointment scheduling',
        'Call transcripts',
        'Email notifications'
      ]
    },
    {
      id: 'ai-pro',
      name: 'AI Phone Pro',
      price: 99,
      type: 'ai-phone',
      features: [
        '500 AI calls/month',
        'Advanced call routing',
        'Customer sentiment analysis',
        'Multi-language support',
        'Real-time alerts',
        'Custom voice training'
      ]
    }
  ];

  const getIcon = (type: string) => {
    return type === 'crm' ? <Users className="w-5 h-5" /> : <Phone className="w-5 h-5" />;
  };

  const getPlanColor = (planId: string) => {
    if (planId === currentPlan) return 'border-green-500 bg-green-50';
    return 'border-gray-200 hover:border-gray-300';
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Subscription Plans</h2>
        <p className="text-gray-600">Choose the perfect plan for your lawn care business</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.filter(sub => sub.type === 'crm').map((subscription) => (
          <Card key={subscription.id} className={`relative ${getPlanColor(subscription.id)}`}>
            {subscription.id === 'premium' && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-3 py-1">
                  <Crown className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                {getIcon(subscription.type)}
              </div>
              <CardTitle className="text-xl">{subscription.name}</CardTitle>
              <div className="text-3xl font-bold text-green-600">
                ${subscription.price}
                <span className="text-sm text-gray-500 font-normal">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full"
                variant={subscription.id === currentPlan ? 'secondary' : 'default'}
                onClick={() => setCurrentPlan(subscription.id)}
              >
                {subscription.id === currentPlan ? 'Current Plan' : 'Upgrade'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="border-t pt-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-500" />
          AI Phone Assistant Add-ons
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subscriptions.filter(sub => sub.type === 'ai-phone').map((subscription) => (
            <Card key={subscription.id} className="border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-blue-500" />
                    {subscription.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    ${subscription.price}
                    <span className="text-sm text-gray-500 font-normal">/month</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {subscription.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Add to Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManager;
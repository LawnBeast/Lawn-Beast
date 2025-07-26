import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, PhoneCall, Clock, MessageSquare, Zap } from 'lucide-react';
import { AIPhoneCall } from '@/types';

const AIPhoneAssist: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [calls] = useState<AIPhoneCall[]>([
    {
      id: '1',
      customerId: '1',
      duration: 180,
      transcript: 'Customer called about lawn service scheduling...',
      summary: 'Scheduled weekly lawn maintenance starting next Monday',
      date: new Date(),
      status: 'completed'
    },
    {
      id: '2',
      customerId: '2',
      duration: 120,
      transcript: 'Inquiry about snow removal services...',
      summary: 'Provided quote for seasonal snow removal package',
      date: new Date(Date.now() - 86400000),
      status: 'completed'
    }
  ]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m ${seconds % 60}s`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">AI Phone Assistant</h2>
          <p className="text-gray-600">Automated call handling and customer service</p>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant={isActive ? 'default' : 'secondary'} className="px-3 py-1">
            <div className={`w-2 h-2 rounded-full mr-2 ${isActive ? 'bg-green-400' : 'bg-gray-400'}`} />
            {isActive ? 'Active' : 'Inactive'}
          </Badge>
          <Button 
            onClick={() => setIsActive(!isActive)}
            className={isActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}
          >
            <Zap className="w-4 h-4 mr-2" />
            {isActive ? 'Deactivate' : 'Activate'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Calls Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-blue-600" />
              <span className="text-2xl font-bold">12</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Call Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-2xl font-bold">2m 30s</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              <span className="text-2xl font-bold">94%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent AI Calls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {calls.map((call) => (
              <div key={call.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Customer #{call.customerId}</span>
                    <Badge variant={call.status === 'completed' ? 'default' : 'destructive'}>
                      {call.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDuration(call.duration)} • {call.date.toLocaleDateString()}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{call.summary}</p>
                <details className="text-xs text-gray-500">
                  <summary className="cursor-pointer hover:text-gray-700">View transcript</summary>
                  <p className="mt-2 p-2 bg-gray-50 rounded">{call.transcript}</p>
                </details>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPhoneAssist;
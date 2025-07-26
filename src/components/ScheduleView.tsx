import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Plus } from 'lucide-react';
import { Job } from '@/types';

const ScheduleView: React.FC = () => {
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      customerId: '1',
      serviceId: '1',
      scheduledDate: new Date('2024-01-15T09:00:00'),
      status: 'scheduled',
      notes: 'Regular lawn maintenance'
    },
    {
      id: '2',
      customerId: '2',
      serviceId: '2',
      scheduledDate: new Date('2024-01-15T11:00:00'),
      status: 'in-progress',
      notes: 'Snow removal - driveway and walkway'
    },
    {
      id: '3',
      customerId: '3',
      serviceId: '1',
      scheduledDate: new Date('2024-01-15T14:00:00'),
      status: 'scheduled',
      notes: 'First time customer'
    }
  ]);

  const getStatusColor = (status: Job['status']) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Schedule</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" />
          Schedule Job
        </Button>
      </div>

      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Today - January 15, 2024
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="font-semibold">
                      {formatTime(job.scheduledDate)}
                    </span>
                  </div>
                  <Badge className={getStatusColor(job.status)}>
                    {job.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>Customer: John Smith - 123 Oak Street</span>
                </div>
                <div className="text-sm text-gray-600">
                  Service: Lawn Maintenance
                </div>
                {job.notes && (
                  <div className="text-sm text-gray-600 mt-2">
                    Notes: {job.notes}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ScheduleView;
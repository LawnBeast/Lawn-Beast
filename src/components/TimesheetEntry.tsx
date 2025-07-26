import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, User, Edit, Trash2 } from 'lucide-react';

interface TimesheetEntryProps {
  id: string;
  employeeName: string;
  jobTitle: string;
  customerName: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  serviceType: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TimesheetEntry: React.FC<TimesheetEntryProps> = ({
  id,
  employeeName,
  jobTitle,
  customerName,
  location,
  date,
  startTime,
  endTime,
  totalHours,
  serviceType,
  status,
  notes,
  onEdit,
  onDelete
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{jobTitle}</CardTitle>
            <p className="text-sm text-gray-600">{customerName}</p>
          </div>
          <Badge className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm">{employeeName}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span className="text-sm">{startTime} - {endTime}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium">{totalHours}h • {serviceType}</span>
          </div>
        </div>
        {notes && (
          <div className="mb-4">
            <p className="text-sm text-gray-600">{notes}</p>
          </div>
        )}
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => onEdit(id)}>
            <Edit className="h-3 w-3 mr-1" />
            Edit
          </Button>
          <Button size="sm" variant="outline" onClick={() => onDelete(id)}>
            <Trash2 className="h-3 w-3 mr-1" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimesheetEntry;
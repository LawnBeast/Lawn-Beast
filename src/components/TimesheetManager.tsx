import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Calendar, Plus, Search } from 'lucide-react';
import TimesheetEntry from './TimesheetEntry';
import TimesheetForm from './TimesheetForm';

const TimesheetManager: React.FC = () => {
  const [timesheets, setTimesheets] = useState([
    {
      id: '1',
      employeeName: 'John Smith',
      jobTitle: 'Lawn Maintenance - Johnson Property',
      customerName: 'Sarah Johnson',
      location: '123 Oak Street, Springfield',
      date: '2024-01-15',
      startTime: '08:00',
      endTime: '12:00',
      totalHours: 4,
      serviceType: 'lawn-mowing',
      status: 'approved' as const,
      notes: 'Completed weekly lawn maintenance, trimmed hedges'
    },
    {
      id: '2',
      employeeName: 'Mike Davis',
      jobTitle: 'Snow Plowing - Commercial Plaza',
      customerName: 'Downtown Plaza LLC',
      location: '456 Main Street, Springfield',
      date: '2024-01-14',
      startTime: '05:00',
      endTime: '09:00',
      totalHours: 4,
      serviceType: 'snow-plowing',
      status: 'pending' as const,
      notes: 'Cleared parking lot and walkways after snowstorm'
    }
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTimesheet = (newTimesheet: any) => {
    setTimesheets([...timesheets, newTimesheet]);
    setShowForm(false);
  };

  const handleEditTimesheet = (id: string) => {
    // Implementation for editing
    console.log('Edit timesheet:', id);
  };

  const handleDeleteTimesheet = (id: string) => {
    setTimesheets(timesheets.filter(t => t.id !== id));
  };

  const filteredTimesheets = timesheets.filter(timesheet =>
    timesheet.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    timesheet.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    timesheet.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalHours = timesheets.reduce((sum, t) => sum + t.totalHours, 0);
  const pendingEntries = timesheets.filter(t => t.status === 'pending').length;
  const approvedEntries = timesheets.filter(t => t.status === 'approved').length;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Timesheet Management</h1>
        <p className="text-gray-600">Track employee hours and job progress</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Hours</p>
                <p className="text-2xl font-bold text-gray-900">{totalHours}h</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">{approvedEntries}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-yellow-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{pendingEntries}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Entries</p>
                <p className="text-2xl font-bold text-gray-900">{timesheets.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">All Timesheets</TabsTrigger>
            <TabsTrigger value="add">Add Entry</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search timesheets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button onClick={() => setShowForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Entry
            </Button>
          </div>
        </div>

        <TabsContent value="all">
          <div className="space-y-4">
            {filteredTimesheets.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500">No timesheet entries found.</p>
                </CardContent>
              </Card>
            ) : (
              filteredTimesheets.map((timesheet) => (
                <TimesheetEntry
                  key={timesheet.id}
                  {...timesheet}
                  onEdit={handleEditTimesheet}
                  onDelete={handleDeleteTimesheet}
                />
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="add">
          {showForm ? (
            <TimesheetForm
              onSubmit={handleAddTimesheet}
              onCancel={() => setShowForm(false)}
            />
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Timesheet Entry
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TimesheetManager;
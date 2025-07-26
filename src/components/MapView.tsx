import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Clock, Route } from 'lucide-react';

const MapView: React.FC = () => {
  const [routes] = useState([
    {
      id: '1',
      name: 'North Route',
      jobs: 5,
      estimatedTime: '4.5 hours',
      status: 'active'
    },
    {
      id: '2', 
      name: 'South Route',
      jobs: 3,
      estimatedTime: '2.5 hours',
      status: 'planned'
    }
  ]);

  const [locations] = useState([
    { id: '1', name: 'John Smith', address: '123 Oak St', lat: 39.7817, lng: -86.1378, status: 'completed' },
    { id: '2', name: 'Sarah Johnson', address: '456 Pine Ave', lat: 39.7900, lng: -86.1480, status: 'in-progress' },
    { id: '3', name: 'Mike Wilson', address: '789 Elm Dr', lat: 39.7750, lng: -86.1200, status: 'scheduled' }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Routes & Map</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <Route className="mr-2 h-4 w-4" />
          Optimize Routes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-96">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Interactive Map
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 h-full rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-700">Google Earth Integration</p>
                  <p className="text-sm text-gray-500">Map view would display here</p>
                </div>
                
                {/* Simulated map pins */}
                {locations.map((location, index) => (
                  <div 
                    key={location.id}
                    className="absolute w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      left: `${20 + index * 25}%`,
                      top: `${30 + index * 15}%`
                    }}
                    title={location.name}
                  >
                    <div className="w-full h-full rounded-full bg-red-500 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Routes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {routes.map((route) => (
                <div key={route.id} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{route.name}</h4>
                    <Badge className={getStatusColor(route.status)}>
                      {route.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {route.jobs} stops
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {route.estimatedTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <Navigation className="h-3 w-3 mr-1" />
                    Start Route
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Today's Stops</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center justify-between p-2 border rounded">
                  <div>
                    <p className="font-medium text-sm">{location.name}</p>
                    <p className="text-xs text-gray-500">{location.address}</p>
                  </div>
                  <Badge className={getStatusColor(location.status)} variant="secondary">
                    {location.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapView;
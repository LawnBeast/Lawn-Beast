import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, Upload, Search, Calendar } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [photos] = useState([
    {
      id: '1',
      url: '/api/placeholder/300/200',
      title: 'Before - Front Yard',
      customer: 'John Smith',
      date: '2024-01-15',
      jobId: '1'
    },
    {
      id: '2', 
      url: '/api/placeholder/300/200',
      title: 'After - Front Yard',
      customer: 'John Smith',
      date: '2024-01-15',
      jobId: '1'
    },
    {
      id: '3',
      url: '/api/placeholder/300/200', 
      title: 'Snow Removal - Driveway',
      customer: 'Sarah Johnson',
      date: '2024-01-14',
      jobId: '2'
    },
    {
      id: '4',
      url: '/api/placeholder/300/200',
      title: 'Lawn Maintenance Complete',
      customer: 'Mike Wilson', 
      date: '2024-01-13',
      jobId: '3'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPhotos = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Photo Gallery</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Camera className="mr-2 h-4 w-4" />
            Take Photo
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Upload className="mr-2 h-4 w-4" />
            Upload Photos
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search photos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <Card key={photo.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="h-12 w-12 text-gray-400" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                Photo
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-2">{photo.title}</h3>
              <div className="text-xs text-gray-600 space-y-1">
                <div className="flex items-center">
                  <span className="font-medium">Customer:</span>
                  <span className="ml-1">{photo.customer}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{photo.date}</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-3">
                <Button variant="outline" size="sm" className="flex-1">
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-12">
          <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No photos found</h3>
          <p className="text-gray-500">Upload some photos to get started</p>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
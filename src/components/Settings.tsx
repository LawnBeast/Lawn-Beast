import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Settings as SettingsIcon, User, Bell, MapPin, DollarSign } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Business Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input id="businessName" defaultValue="LawnCare Pro" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="contact@lawncarepro.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="(555) 123-4567" />
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="emailNotifs">Email Notifications</Label>
              <Switch id="emailNotifs" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="smsNotifs">SMS Notifications</Label>
              <Switch id="smsNotifs" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="weatherAlerts">Weather Alerts</Label>
              <Switch id="weatherAlerts" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Pricing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="lawnRate">Lawn Service Rate (per hour)</Label>
              <Input id="lawnRate" type="number" defaultValue="45" />
            </div>
            <div>
              <Label htmlFor="snowRate">Snow Removal Rate (per hour)</Label>
              <Input id="snowRate" type="number" defaultValue="65" />
            </div>
            <Button className="w-full">Update Rates</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Service Area
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="serviceRadius">Service Radius (miles)</Label>
              <Input id="serviceRadius" type="number" defaultValue="25" />
            </div>
            <div>
              <Label htmlFor="baseLocation">Base Location</Label>
              <Input id="baseLocation" defaultValue="Springfield, IL" />
            </div>
            <Button className="w-full">Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Users, Calendar, MapPin, TrendingUp, Award } from 'lucide-react';

export default function AmbassadorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-['Poppins'] font-semibold text-4xl text-[#1C2E25]">Ambassador Hub</h2>
          <p className="text-[#315E47] mt-2">Lead volunteers managing outreach and pilot programs</p>
        </div>
        <div className="bg-gradient-to-r from-[#315E47] to-[#50E3E3] px-6 py-3 rounded-full flex items-center gap-2">
          <Crown className="w-5 h-5 text-white" />
          <span className="font-['Poppins'] font-semibold text-white">Ambassador</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-normal text-gray-600">Rescues Coordinated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#1C2E25]">27</p>
            <p className="text-xs text-green-600 mt-1">+5 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-normal text-gray-600">Events Hosted</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#1C2E25]">12</p>
            <p className="text-xs text-green-600 mt-1">+2 upcoming</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-normal text-gray-600">Volunteers Managed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#1C2E25]">45</p>
            <p className="text-xs text-green-600 mt-1">+8 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-normal text-gray-600">Impact Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#1C2E25]">2,847</p>
            <p className="text-xs text-green-600 mt-1">Top 5%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#315E47]" />
              Local Rescue Requests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-sm">Family needs furniture - Unit #{100 + i}</p>
                    <p className="text-xs text-gray-600">Submitted 2 days ago</p>
                  </div>
                  <Button size="sm" className="bg-[#315E47]">Coordinate</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#315E47]" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Community Donation Drive', date: 'Nov 15, 2025' },
                { name: 'Volunteer Training Session', date: 'Nov 22, 2025' },
                { name: 'Furniture Rescue Coordination', date: 'Nov 28, 2025' }
              ].map((event, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-sm">{event.name}</p>
                    <p className="text-xs text-gray-600">{event.date}</p>
                  </div>
                  <Button size="sm" variant="outline">Manage</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#315E47]" />
            Ambassador Benefits & Recognition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
              <Users className="w-8 h-8 text-[#315E47] mb-2" />
              <h4 className="font-semibold mb-1">Admin Dashboard Access</h4>
              <p className="text-xs text-gray-600">Full access to rescue management tools</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-[#315E47] mb-2" />
              <h4 className="font-semibold mb-1">Franchise Pilot Program</h4>
              <p className="text-xs text-gray-600">Early participation in expansion</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
              <Crown className="w-8 h-8 text-[#315E47] mb-2" />
              <h4 className="font-semibold mb-1">Dedicated HQ Support</h4>
              <p className="text-xs text-gray-600">Direct line to ReFURRM leadership</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const schedule = [
  { date: 'Today', location: 'Downtown Plaza, Austin TX', time: '9:00 AM - 6:00 PM', status: 'current' },
  { date: 'Nov 8', location: 'Riverside Park, Austin TX', time: '10:00 AM - 5:00 PM', status: 'upcoming' },
  { date: 'Nov 9', location: 'University District, Austin TX', time: '11:00 AM - 7:00 PM', status: 'upcoming' },
  { date: 'Nov 10', location: 'South Congress Ave, Austin TX', time: '9:00 AM - 4:00 PM', status: 'upcoming' },
  { date: 'Nov 11', location: 'Mueller Development, Austin TX', time: '10:00 AM - 6:00 PM', status: 'upcoming' },
];

export function CamperSchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Upcoming Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {schedule.map((stop, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{stop.date}</span>
                  {stop.status === 'current' && (
                    <Badge className="bg-green-500">Current Location</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{stop.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{stop.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

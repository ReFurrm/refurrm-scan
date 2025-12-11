import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { volunteerPerformanceData } from '@/data/analyticsData';
import { Star } from 'lucide-react';

export function VolunteerPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Volunteer Performance</CardTitle>
        <CardDescription>Rescues completed and ratings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {volunteerPerformanceData.map((volunteer, index) => (
            <div key={volunteer.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium">{volunteer.name}</p>
                  <p className="text-sm text-muted-foreground">{volunteer.rescues} rescues</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{volunteer.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

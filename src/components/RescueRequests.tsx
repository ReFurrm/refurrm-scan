import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Heart, MapPin, Calendar, User } from 'lucide-react';
import { DonationCard } from './DonationCard';
import type { RescueRequest } from '@/types';


const mockRequests: RescueRequest[] = [
  { id: '1', submittedBy: 'Sarah Martinez', facility: 'Phoenix Storage Center', location: 'Phoenix, AZ', unitNumber: 'A-247', story: 'My grandmother\'s belongings including family photos and heirlooms', status: 'pending', dateSubmitted: '2025-11-05', priority: 'high' },
  { id: '2', submittedBy: 'James Wilson', facility: 'Metro Storage', location: 'Dallas, TX', unitNumber: 'B-103', story: 'Lost job during pandemic, unit has children\'s items and documents', status: 'assigned', assignedTo: 'Volunteer Team 3', dateSubmitted: '2025-11-03', priority: 'medium' },
];

const RescueRequests = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', facility: '', unitNumber: '', story: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Rescue request submitted! Our team will review and contact you within 48 hours.');
    setShowForm(false);
    setFormData({ name: '', facility: '', unitNumber: '', story: '' });
  };

  return (
    <section className="py-20 bg-[#F6F4EE]" id="rescue-requests">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1C2E25] mb-4">Rescue Network</h2>
          <p className="text-lg text-[#315E47]">Submit or volunteer for sentimental item recovery</p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <Button onClick={() => setShowForm(!showForm)} className="w-full md:w-auto bg-[#315E47] hover:bg-[#1C2E25]">
            <Heart className="w-4 h-4 mr-2" />
            Submit Help Request
          </Button>
        </div>

        {showForm && (
          <Card className="max-w-2xl mx-auto mb-12">
            <CardHeader>
              <CardTitle>Request Rescue Assistance</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                <Input placeholder="Storage Facility Name" value={formData.facility} onChange={e => setFormData({...formData, facility: e.target.value})} required />
                <Input placeholder="Unit Number" value={formData.unitNumber} onChange={e => setFormData({...formData, unitNumber: e.target.value})} required />
                <Textarea placeholder="Tell us your story and what items are important..." value={formData.story} onChange={e => setFormData({...formData, story: e.target.value})} required rows={4} />
                <Button type="submit" className="w-full">Submit Request</Button>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {mockRequests.map(request => (
            <Card key={request.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{request.facility}</CardTitle>
                  <Badge className={request.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'}>
                    {request.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4" />
                  <span>{request.submittedBy}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{request.location} - Unit {request.unitNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Submitted {request.dateSubmitted}</span>
                </div>
                <p className="text-sm text-gray-600 italic">"{request.story}"</p>
                <Badge variant={request.status === 'pending' ? 'secondary' : 'default'}>
                  {request.status}
                </Badge>
                {request.assignedTo && <p className="text-xs text-gray-500">Assigned to: {request.assignedTo}</p>}
                <Button size="sm" className="w-full mt-2">Volunteer for This Rescue</Button>
              </CardContent>
            </Card>
          ))}
          
          <div className="lg:col-span-1">
            <DonationCard 
              title="Fund This Rescue"
              description="Help cover sorting, storage, and reunification costs"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default RescueRequests;

import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Gavel, Bell } from 'lucide-react';
import type { Auction } from '@/types';

const mockAuctions: Auction[] = [
  { id: '1', title: 'Storage Unit Auction - 5 Units', facility: 'SecureStore Phoenix', location: 'Phoenix, AZ', date: '2025-11-15', time: '10:00 AM', distance: 5.2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', unitCount: 5, type: 'in-person' },
  { id: '2', title: 'Online Storage Auction', facility: 'Metro Storage Dallas', location: 'Dallas, TX', date: '2025-11-18', time: '2:00 PM', distance: 12.8, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3', unitCount: 8, type: 'online' },
];

const AuctionsSection = () => {
  const [filter, setFilter] = useState('all');
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const toggleBookmark = (id: string) => {
    setBookmarked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <section className="py-20 bg-[#F6F4EE]" id="auctions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1C2E25] mb-4">Upcoming Auctions</h2>
          <p className="text-lg text-[#315E47]">Find local storage auctions and shop ethically</p>
          <div className="mt-4 p-4 bg-[#50E3E3]/10 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-[#1C2E25]">💚 Remember: Follow ReFURRM's ethical guidelines. Look for sentimental items to return.</p>
          </div>
        </div>

        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'default' : 'outline'}>All</Button>
          <Button onClick={() => setFilter('online')} variant={filter === 'online' ? 'default' : 'outline'}>Online</Button>
          <Button onClick={() => setFilter('in-person')} variant={filter === 'in-person' ? 'default' : 'outline'}>In-Person</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAuctions.map(auction => (
            <Card key={auction.id} className="hover:shadow-lg transition-shadow">
              <img src={auction.image} alt={auction.title} className="w-full h-48 object-cover rounded-t-lg" />
              <CardContent className="p-6">
                <Badge className="mb-2">{auction.type}</Badge>
                <h3 className="font-bold text-lg mb-2">{auction.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{auction.location}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{auction.date} at {auction.time}</div>
                  <div className="flex items-center gap-2"><Gavel className="w-4 h-4" />{auction.unitCount} units</div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button className="flex-1" size="sm">View Details</Button>
                  <Button size="sm" variant="outline" onClick={() => toggleBookmark(auction.id)}>
                    <Bell className={`w-4 h-4 ${bookmarked.includes(auction.id) ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuctionsSection;

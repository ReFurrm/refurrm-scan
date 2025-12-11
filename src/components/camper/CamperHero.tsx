import { MapPin, Clock, Navigation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function CamperHero() {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src="https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762489105228_6e16f5e4.webp"
        alt="ReFURRM Mobile Sales Camper"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-green-500 text-white">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
            Currently Open
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            Mobile Sales Camper
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-2xl">
            Shop rescued treasures on wheels. Every purchase supports families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-white">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Downtown Plaza, Austin TX</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Open until 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

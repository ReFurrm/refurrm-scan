import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Heart, MapPin, Calendar, DollarSign, Package, Users, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface StoryCardProps {
  story: {
    id: string;
    title: string;
    familyName: string;
    location: string;
    date: string;
    beforeImage: string;
    afterImage: string;
    testimonial: string;
    itemsRecovered: number;
    donationAmount: number;
    status: 'completed' | 'in-progress';
    fullStory: string;
    donorNames?: string[];
  };
  userDonated?: boolean;
}

export default function StoryCard({ story, userDonated }: StoryCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showBefore, setShowBefore] = useState(true);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative h-64 cursor-pointer" onClick={() => setShowBefore(!showBefore)}>
          <img 
            src={showBefore ? story.beforeImage : story.afterImage} 
            alt={showBefore ? "Before rescue" : "After rescue"}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge className={showBefore ? 'bg-red-500' : 'bg-green-500'}>
              {showBefore ? 'Before' : 'After'}
            </Badge>
          </div>
          {userDonated && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#50E3E3] text-[#1C2E25]">
                <Heart className="w-3 h-3 mr-1" />
                You Helped!
              </Badge>
            </div>
          )}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
            Click to toggle
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="font-['Poppins'] text-2xl font-semibold text-[#1C2E25] mb-2">
            {story.title}
          </h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>{story.familyName}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{story.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>{story.date}</span>
            </div>
          </div>

          <p className="text-gray-700 italic mb-4 line-clamp-3">
            "{story.testimonial}"
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-[#F6F4EE] p-3 rounded-lg text-center">
              <Package className="w-5 h-5 mx-auto mb-1 text-[#315E47]" />
              <div className="font-semibold text-[#315E47]">{story.itemsRecovered}</div>
              <div className="text-xs text-gray-600">Items Recovered</div>
            </div>
            <div className="bg-[#F6F4EE] p-3 rounded-lg text-center">
              <DollarSign className="w-5 h-5 mx-auto mb-1 text-[#315E47]" />
              <div className="font-semibold text-[#315E47]">${story.donationAmount}</div>
              <div className="text-xs text-gray-600">Funded By</div>
            </div>
          </div>

          <Button 
            onClick={() => setShowDetails(true)} 
            className="w-full bg-[#315E47] hover:bg-[#1C2E25]"
          >
            Read Full Story
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{story.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold mb-2">Before Rescue</p>
                <img src={story.beforeImage} alt="Before" className="w-full rounded-lg" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">After Rescue</p>
                <img src={story.afterImage} alt="After" className="w-full rounded-lg" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Their Story</h4>
              <p className="text-gray-700 whitespace-pre-line">{story.fullStory}</p>
            </div>

            <div className="bg-[#F6F4EE] p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Testimonial</h4>
              <p className="italic text-gray-700">"{story.testimonial}"</p>
              <p className="text-sm text-gray-600 mt-2">- {story.familyName}</p>
            </div>

            {story.donorNames && story.donorNames.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Made Possible By These Donors:</h4>
                <div className="flex flex-wrap gap-2">
                  {story.donorNames.map((name, idx) => (
                    <Badge key={idx} variant="secondary">{name}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

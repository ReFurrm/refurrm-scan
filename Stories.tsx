import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, MapPin, Calendar, DollarSign, Package, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { rescueStories } from '@/data/storiesData';
import { supabase } from '@/lib/supabase';

export default function Stories() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('all');
  const [userDonations, setUserDonations] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      fetchUserDonations();
    }
  }, [user]);

  const fetchUserDonations = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('donations')
      .select('rescue_id')
      .eq('user_id', user.id)
      .not('rescue_id', 'is', null);
    
    if (data) {
      const rescueIds = data.map(d => d.rescue_id).filter(Boolean);
      setUserDonations(rescueIds);
    }
  };

  const filteredStories = rescueStories.filter(story => {
    if (activeTab === 'my') {
      return userDonations.includes(story.rescueId);
    }
    return true;
  });


  return (
    <div className="min-h-screen bg-[#F6F4EE]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#315E47] to-[#1C2E25] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-['Poppins'] text-5xl font-semibold mb-6">
            Stories of Hope & Reunion
          </h1>
          <p className="font-['Open_Sans'] text-xl max-w-3xl mx-auto text-[#F6F4EE]/90">
            Every donation transforms loss into legacy. See how your support helps rescue storage units and reunite families with their precious belongings.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#315E47]">127</div>
            <div className="text-sm text-gray-600">Units Rescued</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#315E47]">89</div>
            <div className="text-sm text-gray-600">Families Reunited</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#315E47]">12,450</div>
            <div className="text-sm text-gray-600">Items Returned</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#315E47]">$284K</div>
            <div className="text-sm text-gray-600">Funds Raised</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All Stories</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              {user && <TabsTrigger value="my">My Impact</TabsTrigger>}
            </TabsList>
          </Tabs>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStories.length > 0 ? (
              filteredStories.map(story => (
                <StoryCard 
                  key={story.id} 
                  story={story}
                  userDonated={userDonations.includes(story.rescueId)}
                />
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-600 text-lg">
                  {activeTab === 'my' 
                    ? "You haven't donated to any rescue missions yet. Start making an impact today!"
                    : "No stories available yet."}
                </p>
                {activeTab === 'my' && (
                  <Button 
                    onClick={() => window.location.href = '/rescue'} 
                    className="mt-4 bg-[#315E47] hover:bg-[#1C2E25]"
                  >
                    Make Your First Donation
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-[#315E47] to-[#50E3E3] rounded-2xl p-12 text-center text-white">
            <h3 className="font-['Poppins'] text-3xl font-semibold mb-4">
              Be Part of the Next Success Story
            </h3>
            <p className="font-['Open_Sans'] text-lg mb-6 max-w-2xl mx-auto">
              Your donation can help rescue a storage unit and reunite a family with their precious memories.
            </p>
            <Button 
              onClick={() => window.location.href = '/rescue'} 
              className="bg-white text-[#315E47] hover:bg-[#F6F4EE] text-lg px-8 py-6"
            >
              Make a Donation Today
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

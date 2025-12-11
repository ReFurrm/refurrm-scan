import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Donation {
  id: string;
  amount: number;
  donor_name: string | null;
  created_at: string;
}

export default function RecentDonationsFeed() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const { data, error } = await supabase
        .from('donations')
        .select('id, amount, donor_name, created_at')
        .eq('status', 'completed')
        .order('created_at', { ascending: false })
        .limit(15);
      
      if (error) throw error;
      setDonations(data || []);
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-red-500" />
          Recent Donations
        </CardTitle>
        <CardDescription>Live feed of community support</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-gray-500">Loading donations...</p>
        ) : donations.length === 0 ? (
          <p className="text-gray-500">No donations yet. Be the first to support!</p>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {donations.map((donation) => (
              <div key={donation.id} className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                <div>
                  <p className="font-semibold text-[#315E47]">
                    {donation.donor_name || 'Anonymous'}
                  </p>
                  <p className="text-xs text-gray-600">
                    {new Date(donation.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <Badge className="bg-[#315E47] text-white">
                  ${Number(donation.amount).toFixed(2)}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

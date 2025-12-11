import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Scale, ExternalLink, Mail } from 'lucide-react';

const stateLaws = {
  'AZ': { name: 'Arizona', noticeRequired: '14 days', auctionWait: '30 days', summary: 'Arizona requires written notice to the tenant at their last known address. The facility must wait 14 days after notice before scheduling an auction, which cannot occur sooner than 30 days from the first notice.' },
  'TX': { name: 'Texas', noticeRequired: '14 days', auctionWait: '30 days', summary: 'Texas law requires certified mail notice to the tenant. Facilities must provide at least 14 days notice and wait a minimum of 30 days before conducting a lien sale.' },
  'CA': { name: 'California', noticeRequired: '14 days', auctionWait: '21 days', summary: 'California has strict requirements including newspaper publication and certified mail. Tenants have 14 days to respond, and auctions cannot occur before 21 days from initial notice.' },
};

const LienLawLibrary = () => {
  const [selectedState, setSelectedState] = useState<string>('');

  return (
    <section className="py-20 bg-white" id="know-your-rights">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-[#315E47] mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-[#1C2E25] mb-4">Know Your Rights</h2>
          <p className="text-lg text-[#315E47]">State-by-state storage lien law summaries</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Select Your State</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a state..." />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(stateLaws).map(([code, data]) => (
                    <SelectItem key={code} value={code}>{data.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {selectedState && stateLaws[selectedState as keyof typeof stateLaws] && (
            <Card className="border-[#315E47]">
              <CardHeader>
                <CardTitle>{stateLaws[selectedState as keyof typeof stateLaws].name} Lien Laws</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#F6F4EE] rounded-lg">
                    <p className="text-sm text-gray-600">Notice Required</p>
                    <p className="text-xl font-bold text-[#315E47]">{stateLaws[selectedState as keyof typeof stateLaws].noticeRequired}</p>
                  </div>
                  <div className="p-4 bg-[#F6F4EE] rounded-lg">
                    <p className="text-sm text-gray-600">Auction Wait Period</p>
                    <p className="text-xl font-bold text-[#315E47]">{stateLaws[selectedState as keyof typeof stateLaws].auctionWait}</p>
                  </div>
                </div>
                <div className="p-4 bg-[#50E3E3]/10 rounded-lg">
                  <p className="text-sm leading-relaxed">{stateLaws[selectedState as keyof typeof stateLaws].summary}</p>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Official Resources
                  </Button>
                  <Button className="flex-1 bg-[#315E47]">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact ReFURRM for Help
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {!selectedState && (
            <div className="text-center p-12 bg-[#F6F4EE] rounded-lg">
              <p className="text-gray-600">Select a state above to view lien law information</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LienLawLibrary;

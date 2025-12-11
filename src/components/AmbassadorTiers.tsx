import { Award, TrendingUp, Users, Crown } from 'lucide-react';

export default function AmbassadorTiers() {
  const tiers = [
    { name: 'Bronze', rescues: '3 rescues', color: '#CD7F32', benefits: 'Digital badge, Community access', icon: Award, points: '0-100 pts' },
    { name: 'Silver', rescues: '10 rescues', color: '#C0C0C0', benefits: 'Affiliate links, Priority support, Rescue + Marketplace', icon: TrendingUp, points: '100-500 pts' },
    { name: 'Gold', rescues: '25 rescues', color: '#FFD700', benefits: 'Featured stories, Event hosting, Referral bonuses', icon: Users, points: '500-1500 pts' },
    { name: 'Platinum', rescues: '50+ rescues', color: '#50E3E3', benefits: 'Franchise partnership, Regional lead, Early access', icon: Crown, points: '1500+ pts' }
  ];

  return (
    <section className="bg-gradient-to-br from-[#315E47] to-[#1C2E25] py-20 px-6" id="ambassador">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Crown className="w-8 h-8 text-[#50E3E3]" />
          <h2 className="font-['Poppins'] font-semibold text-5xl text-[#F6F4EE] text-center">
            Ambassador Recognition
          </h2>
        </div>
        <p className="font-['Open_Sans'] text-xl text-[#50E3E3] text-center mb-2">
          Invitation-Only Leadership Program
        </p>
        <p className="font-['Open_Sans'] text-sm text-[#F6F4EE]/80 text-center mb-12">
          Ambassadors are approved lead volunteers who earn recognition points for coordinating rescues, hosting events, and managing community outreach
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div key={idx} className="bg-[#F6F4EE] p-6 rounded-2xl text-center hover:scale-105 transition-transform">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: tier.color }}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-['Poppins'] font-semibold text-2xl text-[#1C2E25] mb-2">{tier.name}</h3>
                <p className="font-['Open_Sans'] text-[#315E47] mb-2 font-semibold">{tier.points}</p>
                <p className="font-['Open_Sans'] text-sm text-[#315E47] mb-4">{tier.rescues}</p>
                <p className="font-['Open_Sans'] text-xs text-[#1C2E25]">{tier.benefits}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

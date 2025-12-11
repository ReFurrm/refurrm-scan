import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RescueRequests from '@/components/RescueRequests';
import ImpactFeed from '@/components/ImpactFeed';
import VolunteerMap from '@/components/VolunteerMap';
import { DonationHero } from '@/components/DonationHero';


export default function Rescue() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <DonationHero />
        <RescueRequests />
        <ImpactFeed />
        <VolunteerMap />
      
      </div>
      <Footer />
    </div>
  );
}

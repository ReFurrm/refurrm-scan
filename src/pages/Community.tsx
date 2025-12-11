import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AmbassadorTiers from '@/components/AmbassadorTiers';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Testimonials from '@/components/Testimonials';
import NewsletterSignup from '@/components/NewsletterSignup';
import CTASection from '@/components/CTASection';

export default function Community() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-[#50E3E3] to-[#315E47] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Join Our Community</h1>
            <p className="text-xl">Become an ambassador or subscribe to support families</p>
          </div>
        </div>
        <AmbassadorTiers />
        <SubscriptionPlans />
        <Testimonials />
        <NewsletterSignup />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

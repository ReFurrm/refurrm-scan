import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AuctionsSection from '@/components/AuctionsSection';
import ScannerTools from '@/components/ScannerTools';
import ShopSection from '@/components/ShopSection';
import CTASection from '@/components/CTASection';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-[#315E47] to-[#1C2E25] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">ReFURRM Marketplace</h1>
            <p className="text-xl">Buy, sell, and support families through our marketplace</p>
          </div>
        </div>
        <AuctionsSection />
        <ScannerTools />
        <ShopSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

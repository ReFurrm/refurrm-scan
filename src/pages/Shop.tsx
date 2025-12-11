import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ShopSection from '@/components/ShopSection';
import CTASection from '@/components/CTASection';

export default function Shop() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-[#50E3E3] to-[#315E47] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">ReFURRM Shop</h1>
            <p className="text-xl">Support families by purchasing official ReFURRM merchandise</p>
          </div>
        </div>
        <ShopSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

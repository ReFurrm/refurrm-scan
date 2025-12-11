import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LienLawLibrary from '@/components/LienLawLibrary';
import UnitIntake from '@/components/UnitIntake';
import DashboardSection from '@/components/DashboardSection';
import CTASection from '@/components/CTASection';

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="bg-gradient-to-br from-[#1C2E25] to-[#315E47] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Resources & Tools</h1>
            <p className="text-xl">Legal resources, intake forms, and dashboards</p>
          </div>
        </div>
        <LienLawLibrary />
        <UnitIntake />
        <DashboardSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

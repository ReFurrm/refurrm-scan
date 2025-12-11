import { Scan, DollarSign, Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ValueProp = () => {
  const features = [
    {
      icon: Scan,
      title: 'AI-Powered Scanner',
      description: 'Analyze storage auction listings with computer vision to identify high-value items and calculate market potential scores.'
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Get real-time valuations based on actual eBay sales data. Know what items are worth before you bid.'
    },
    {
      icon: Heart,
      title: 'Ethical Rescue',
      description: 'Focus on units with resale potential, not personal belongings. Help families while building a sustainable business.'
    },
    {
      icon: DollarSign,
      title: 'Maximize ROI',
      description: 'Stop guessing and start winning. Our scanner helps you bid smart and avoid costly mistakes.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1C2E25] mb-4">Why ReFURRM Scanner?</h2>
          <p className="text-lg text-[#315E47] max-w-2xl mx-auto">
            The only AI-powered tool built specifically for ethical storage auction buyers
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-[#C8BFAE] hover:shadow-lg transition">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-[#50E3E3] mb-4" />
                <CardTitle className="text-xl text-[#1C2E25]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

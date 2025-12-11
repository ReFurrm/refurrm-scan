import { TrendingUp, Users, Package, DollarSign, Clock, Home } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
}

function StatCard({ icon, value, label, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#50E3E3]">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[#315E47]">{icon}</div>
        {trend && (
          <span className="text-sm text-green-600 flex items-center gap-1">
            <TrendingUp className="w-4 h-4" />
            {trend}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-[#315E47] mb-1">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard icon={<Home className="w-8 h-8" />} value="247" label="Units Rescued" trend="+12%" />
      <StatCard icon={<Users className="w-8 h-8" />} value="189" label="Families Reunited" trend="+8%" />
      <StatCard icon={<Package className="w-8 h-8" />} value="2,847" label="Items Returned" trend="+15%" />
      <StatCard icon={<Package className="w-8 h-8" />} value="4,521" label="Items Resold" trend="+10%" />
      <StatCard icon={<DollarSign className="w-8 h-8" />} value="$47.3K" label="Funds Raised" trend="+18%" />
      <StatCard icon={<Clock className="w-8 h-8" />} value="3,456" label="Volunteer Hours" trend="+14%" />
    </div>
  );
}

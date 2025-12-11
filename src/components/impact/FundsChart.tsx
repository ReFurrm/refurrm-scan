import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { monthlyData } from '@/data/impactData';

export default function FundsChart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-[#315E47] mb-4">Funds Raised Monthly</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value}`} />
          <Area type="monotone" dataKey="funds" stroke="#315E47" fill="#50E3E3" name="Funds Raised" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

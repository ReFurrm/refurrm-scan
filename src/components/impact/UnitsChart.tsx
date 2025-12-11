import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlyData } from '@/data/impactData';

export default function UnitsChart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-[#315E47] mb-4">Units Rescued Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="units" stroke="#315E47" strokeWidth={2} name="Units Rescued" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

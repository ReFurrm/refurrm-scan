import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlyData } from '@/data/impactData';

export default function ItemsComparisonChart() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-[#315E47] mb-4">Items Returned vs Resold</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="returned" fill="#50E3E3" name="Items Returned" />
          <Bar dataKey="resold" fill="#315E47" name="Items Resold" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

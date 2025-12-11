import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { facilitySuccessData } from '@/data/analyticsData';

export function FacilitySuccessChart() {
  const chartConfig = {
    success: { label: 'Success Rate %', color: 'hsl(var(--chart-3))' },
  };

  const data = facilitySuccessData.map(f => ({
    ...f,
    rate: Math.round((f.success / f.total) * 100)
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Success Rate by Facility</CardTitle>
        <CardDescription>Percentage of successful rescues</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="facility" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="rate" fill="var(--color-success)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

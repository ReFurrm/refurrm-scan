import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { rescueTimeData } from '@/data/analyticsData';

export function RescueTimeChart() {
  const chartConfig = {
    avgTime: { label: 'Avg Time (days)', color: 'hsl(var(--chart-1))' },
    target: { label: 'Target', color: 'hsl(var(--chart-2))' },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Rescue Time</CardTitle>
        <CardDescription>Days from request to completion</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <LineChart data={rescueTimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Line type="monotone" dataKey="avgTime" stroke="var(--color-avgTime)" strokeWidth={2} />
            <Line type="monotone" dataKey="target" stroke="var(--color-target)" strokeDasharray="5 5" />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

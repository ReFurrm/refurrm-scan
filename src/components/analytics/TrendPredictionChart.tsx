import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { trendData } from '@/data/analyticsData';

export function TrendPredictionChart() {
  const chartConfig = {
    rescues: { label: 'Actual Rescues', color: 'hsl(var(--chart-1))' },
    predicted: { label: 'Predicted', color: 'hsl(var(--chart-2))' },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trend Predictions</CardTitle>
        <CardDescription>Historical data with ML predictions</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <AreaChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
            <Area type="monotone" dataKey="rescues" stroke="var(--color-rescues)" fill="var(--color-rescues)" fillOpacity={0.6} />
            <Area type="monotone" dataKey="predicted" stroke="var(--color-predicted)" fill="var(--color-predicted)" fillOpacity={0.3} strokeDasharray="5 5" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

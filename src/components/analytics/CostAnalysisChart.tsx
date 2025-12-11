import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell } from 'recharts';
import { costAnalysisData } from '@/data/analyticsData';

export function CostAnalysisChart() {
  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];
  
  const chartConfig = {
    cost: { label: 'Cost ($)' },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Analysis</CardTitle>
        <CardDescription>Breakdown of rescue operation costs</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px]">
          <PieChart>
            <Pie data={costAnalysisData} dataKey="cost" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
              {costAnalysisData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {costAnalysisData.map((item, index) => (
            <div key={item.category} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded" style={{ backgroundColor: COLORS[index] }} />
              <span className="text-sm">{item.category}: ${item.cost.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

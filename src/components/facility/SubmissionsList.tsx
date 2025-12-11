import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Clock, CheckCircle, AlertCircle, Package } from 'lucide-react';

interface Submission {
  id: string;
  unit_number: string;
  tenant_name: string;
  unit_size: string;
  estimated_value: number;
  auction_date: string;
  status: string;
  priority: string;
  created_at: string;
}

interface SubmissionsListProps {
  submissions: Submission[];
}

export function SubmissionsList({ submissions }: SubmissionsListProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'in_progress': return <Package className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'cancelled': return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Submissions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unit</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Auction Date</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground">
                    No submissions yet
                  </TableCell>
                </TableRow>
              ) : (
                submissions.map((sub) => (
                  <TableRow key={sub.id}>
                    <TableCell className="font-medium">{sub.unit_number}</TableCell>
                    <TableCell>{sub.tenant_name || 'N/A'}</TableCell>
                    <TableCell>{sub.unit_size || 'N/A'}</TableCell>
                    <TableCell>${sub.estimated_value?.toLocaleString() || '0'}</TableCell>
                    <TableCell>{sub.auction_date ? new Date(sub.auction_date).toLocaleDateString() : 'N/A'}</TableCell>
                    <TableCell>
                      <Badge variant={sub.priority === 'urgent' ? 'destructive' : 'secondary'}>
                        {sub.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(sub.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(sub.status)}
                          {sub.status.replace('_', ' ')}
                        </span>
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

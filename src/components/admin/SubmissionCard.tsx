import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Submission {
  id: string;
  unit_number: string;
  tenant_name: string;
  status: string;
  priority: string;
  facility_name: string;
  created_at: string;
  family_contacted: boolean;
  assigned_to_name?: string;
}

interface SubmissionCardProps {
  submission: Submission;
  onViewDetails: (id: string) => void;
  onAssign: (id: string) => void;
  onUpdateStatus: (id: string) => void;
}

export default function SubmissionCard({ submission, onViewDetails, onAssign, onUpdateStatus }: SubmissionCardProps) {
  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };

  const priorityColors: Record<string, string> = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-orange-100 text-orange-800',
    low: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-[#C8BFAE] hover:border-[#50E3E3] transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-['Poppins'] font-semibold text-xl text-[#1C2E25]">Unit {submission.unit_number}</h3>
          <p className="text-[#315E47]">{submission.tenant_name}</p>
          <p className="text-sm text-gray-500">{submission.facility_name}</p>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <Badge className={statusColors[submission.status] || 'bg-gray-100'}>
            {submission.status.replace('_', ' ')}
          </Badge>
          <Badge className={priorityColors[submission.priority] || 'bg-gray-100'}>
            {submission.priority}
          </Badge>
        </div>
      </div>

      <div className="space-y-2 mb-4 text-sm">
        <p className="text-gray-600">
          Submitted: {new Date(submission.created_at).toLocaleDateString()}
        </p>
        {submission.assigned_to_name && (
          <p className="text-gray-600">Assigned to: {submission.assigned_to_name}</p>
        )}
        <p className="text-gray-600">
          Family Contacted: {submission.family_contacted ? '✓ Yes' : '✗ No'}
        </p>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => onViewDetails(submission.id)} variant="outline" size="sm">
          View Details
        </Button>
        <Button onClick={() => onAssign(submission.id)} variant="outline" size="sm">
          Assign
        </Button>
        <Button onClick={() => onUpdateStatus(submission.id)} variant="outline" size="sm">
          Update Status
        </Button>
      </div>
    </div>
  );
}

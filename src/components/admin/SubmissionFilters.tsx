import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SubmissionFiltersProps {
  filters: {
    facility: string;
    status: string;
    priority: string;
    dateFrom: string;
    dateTo: string;
    search: string;
  };
  onFilterChange: (key: string, value: string) => void;
  facilities: Array<{ id: string; name: string }>;
}

export default function SubmissionFilters({ filters, onFilterChange, facilities }: SubmissionFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-xl border-2 border-[#C8BFAE] space-y-4">
      <h3 className="font-['Poppins'] font-semibold text-xl text-[#1C2E25]">Filters</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#315E47] mb-2">Search</label>
          <Input
            placeholder="Unit number, tenant..."
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#315E47] mb-2">Facility</label>
          <Select value={filters.facility} onValueChange={(val) => onFilterChange('facility', val)}>
            <SelectTrigger>
              <SelectValue placeholder="All Facilities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Facilities</SelectItem>
              {facilities.map(f => (
                <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#315E47] mb-2">Status</label>
          <Select value={filters.status} onValueChange={(val) => onFilterChange('status', val)}>
            <SelectTrigger>
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#315E47] mb-2">Priority</label>
          <Select value={filters.priority} onValueChange={(val) => onFilterChange('priority', val)}>
            <SelectTrigger>
              <SelectValue placeholder="All Priorities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#315E47] mb-2">From Date</label>
          <Input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => onFilterChange('dateFrom', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#315E47] mb-2">To Date</label>
          <Input
            type="date"
            value={filters.dateTo}
            onChange={(e) => onFilterChange('dateTo', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

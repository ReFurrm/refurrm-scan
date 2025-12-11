import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface AssignmentDialogProps {
  open: boolean;
  onClose: () => void;
  submissionId: string;
  onSuccess: () => void;
}

export default function AssignmentDialog({ open, onClose, submissionId, onSuccess }: AssignmentDialogProps) {
  const [volunteers, setVolunteers] = useState<Array<{ id: string; email: string; full_name?: string }>>([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      loadVolunteers();
    }
  }, [open]);

  const loadVolunteers = async () => {
    const { data } = await supabase
      .from('users')
      .select('id, email, full_name')
      .in('role', ['volunteer', 'admin']);
    
    if (data) setVolunteers(data);
  };

  const handleAssign = async () => {
    if (!selectedVolunteer) {
      toast({ title: 'Please select a volunteer', variant: 'destructive' });
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase.from('submission_assignments').insert({
        submission_id: submissionId,
        assigned_to: selectedVolunteer,
        assigned_by: user?.id,
        notes
      });

      if (error) throw error;

      await supabase
        .from('facility_submissions')
        .update({ status: 'in_progress' })
        .eq('id', submissionId);

      toast({ title: 'Assignment successful' });
      onSuccess();
      onClose();
    } catch (error: any) {
      toast({ title: 'Error assigning', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Rescue Request</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Assign To</label>
            <Select value={selectedVolunteer} onValueChange={setSelectedVolunteer}>
              <SelectTrigger>
                <SelectValue placeholder="Select volunteer" />
              </SelectTrigger>
              <SelectContent>
                {volunteers.map(v => (
                  <SelectItem key={v.id} value={v.id}>
                    {v.full_name || v.email}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Notes</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add assignment notes..."
              rows={3}
            />
          </div>
          <Button onClick={handleAssign} disabled={loading} className="w-full">
            {loading ? 'Assigning...' : 'Assign'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

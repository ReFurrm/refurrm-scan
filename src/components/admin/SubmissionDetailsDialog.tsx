import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface SubmissionDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  submissionId: string;
  onSuccess: () => void;
}

export default function SubmissionDetailsDialog({ open, onClose, submissionId, onSuccess }: SubmissionDetailsDialogProps) {
  const [submission, setSubmission] = useState<any>(null);
  const [notes, setNotes] = useState<any[]>([]);
  const [photos, setPhotos] = useState<any[]>([]);
  const [newNote, setNewNote] = useState('');
  const [photoCaption, setPhotoCaption] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (open && submissionId) {
      loadDetails();
    }
  }, [open, submissionId]);

  const loadDetails = async () => {
    const { data: sub } = await supabase
      .from('facility_submissions')
      .select('*, storage_facilities(name)')
      .eq('id', submissionId)
      .single();
    
    const { data: notesData } = await supabase
      .from('rescue_notes')
      .select('*, users(email)')
      .eq('submission_id', submissionId)
      .order('created_at', { ascending: false });
    
    const { data: photosData } = await supabase
      .from('rescue_photos')
      .select('*')
      .eq('submission_id', submissionId);

    if (sub) setSubmission(sub);
    if (notesData) setNotes(notesData);
    if (photosData) setPhotos(photosData);
  };

  const addNote = async () => {
    if (!newNote.trim()) return;

    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from('rescue_notes').insert({
      submission_id: submissionId,
      user_id: user?.id,
      note: newNote
    });

    if (!error) {
      toast({ title: 'Note added' });
      setNewNote('');
      loadDetails();
    }
  };

  const markFamilyContacted = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase
      .from('facility_submissions')
      .update({
        family_contacted: true,
        family_contacted_at: new Date().toISOString(),
        family_contacted_by: user?.id
      })
      .eq('id', submissionId);

    if (!error) {
      toast({ title: 'Marked as contacted' });
      loadDetails();
      onSuccess();
    }
  };

  if (!submission) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Rescue Request Details</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Unit Number</p>
              <p className="font-semibold">{submission.unit_number}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Tenant Name</p>
              <p className="font-semibold">{submission.tenant_name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Facility</p>
              <p className="font-semibold">{submission.storage_facilities?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <Badge>{submission.status}</Badge>
            </div>
          </div>

          {submission.tenant_phone && (
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p>{submission.tenant_phone}</p>
            </div>
          )}

          {submission.unit_contents && (
            <div>
              <p className="text-sm text-gray-500">Contents</p>
              <p>{submission.unit_contents}</p>
            </div>
          )}

          <div>
            <Button 
              onClick={markFamilyContacted}
              disabled={submission.family_contacted}
              variant={submission.family_contacted ? 'outline' : 'default'}
            >
              {submission.family_contacted ? '✓ Family Contacted' : 'Mark Family as Contacted'}
            </Button>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Add Note</h4>
            <Textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Add rescue notes..."
              rows={3}
            />
            <Button onClick={addNote} className="mt-2">Add Note</Button>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Notes History</h4>
            <div className="space-y-2">
              {notes.map(note => (
                <div key={note.id} className="bg-gray-50 p-3 rounded">
                  <p className="text-sm">{note.note}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {note.users?.email} - {new Date(note.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

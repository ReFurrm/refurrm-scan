import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface SubmitRescueFormProps {
  facilityId: string;
  onSuccess: () => void;
}

export function SubmitRescueForm({ facilityId, onSuccess }: SubmitRescueFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    unitNumber: '',
    tenantName: '',
    tenantContact: '',
    unitSize: '',
    estimatedValue: '',
    auctionDate: '',
    priority: 'standard',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('facility_submissions').insert({
        facility_id: facilityId,
        unit_number: formData.unitNumber,
        tenant_name: formData.tenantName,
        tenant_contact: formData.tenantContact,
        unit_size: formData.unitSize,
        estimated_value: parseFloat(formData.estimatedValue),
        auction_date: formData.auctionDate,
        priority: formData.priority,
        notes: formData.notes,
        status: 'pending'
      });

      if (error) throw error;

      toast({ title: 'Success!', description: 'Rescue request submitted successfully.' });
      setFormData({ unitNumber: '', tenantName: '', tenantContact: '', unitSize: '', estimatedValue: '', auctionDate: '', priority: 'standard', notes: '' });
      onSuccess();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Rescue Request</CardTitle>
        <CardDescription>Submit a storage unit for rescue consideration</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="unitNumber">Unit Number *</Label>
              <Input id="unitNumber" required value={formData.unitNumber} onChange={(e) => setFormData({...formData, unitNumber: e.target.value})} />
            </div>
            <div>
              <Label htmlFor="unitSize">Unit Size</Label>
              <Select value={formData.unitSize} onValueChange={(val) => setFormData({...formData, unitSize: val})}>
                <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="5x5">5x5</SelectItem>
                  <SelectItem value="5x10">5x10</SelectItem>
                  <SelectItem value="10x10">10x10</SelectItem>
                  <SelectItem value="10x15">10x15</SelectItem>
                  <SelectItem value="10x20">10x20</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="tenantName">Tenant Name</Label>
              <Input id="tenantName" value={formData.tenantName} onChange={(e) => setFormData({...formData, tenantName: e.target.value})} />
            </div>
            <div>
              <Label htmlFor="tenantContact">Tenant Contact</Label>
              <Input id="tenantContact" value={formData.tenantContact} onChange={(e) => setFormData({...formData, tenantContact: e.target.value})} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="estimatedValue">Est. Value ($)</Label>
              <Input id="estimatedValue" type="number" value={formData.estimatedValue} onChange={(e) => setFormData({...formData, estimatedValue: e.target.value})} />
            </div>
            <div>
              <Label htmlFor="auctionDate">Auction Date</Label>
              <Input id="auctionDate" type="date" value={formData.auctionDate} onChange={(e) => setFormData({...formData, auctionDate: e.target.value})} />
            </div>
            <div>
              <Label htmlFor="priority">Priority</Label>
              <Select value={formData.priority} onValueChange={(val) => setFormData({...formData, priority: val})}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" rows={3} value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} />
          </div>

          <Button type="submit" disabled={loading} className="w-full">{loading ? 'Submitting...' : 'Submit Request'}</Button>
        </form>
      </CardContent>
    </Card>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileSpreadsheet } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface BulkSubmissionFormProps {
  facilityId: string;
  onSuccess: () => void;
}

export function BulkSubmissionForm({ facilityId, onSuccess }: BulkSubmissionFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [csvData, setCsvData] = useState('');

  const handleBulkSubmit = async () => {
    setLoading(true);
    try {
      const lines = csvData.trim().split('\n');
      const submissions = lines.slice(1).map(line => {
        const [unitNumber, tenantName, tenantContact, unitSize, estimatedValue, auctionDate] = line.split(',');
        return {
          facility_id: facilityId,
          unit_number: unitNumber?.trim(),
          tenant_name: tenantName?.trim(),
          tenant_contact: tenantContact?.trim(),
          unit_size: unitSize?.trim(),
          estimated_value: estimatedValue ? parseFloat(estimatedValue.trim()) : null,
          auction_date: auctionDate?.trim(),
          status: 'pending'
        };
      }).filter(s => s.unit_number);

      const { error } = await supabase.from('facility_submissions').insert(submissions);
      if (error) throw error;

      toast({ title: 'Success!', description: `${submissions.length} units submitted successfully.` });
      setCsvData('');
      onSuccess();
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const downloadTemplate = () => {
    const template = 'Unit Number,Tenant Name,Tenant Contact,Unit Size,Estimated Value,Auction Date\nA101,John Doe,555-0100,10x10,5000,2025-12-01\n';
    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bulk_submission_template.csv';
    a.click();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileSpreadsheet className="h-5 w-5" />
          Bulk Unit Submission
        </CardTitle>
        <CardDescription>Upload multiple units at once using CSV format</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="outline" onClick={downloadTemplate} className="w-full">
          <Upload className="h-4 w-4 mr-2" />
          Download CSV Template
        </Button>

        <div>
          <Textarea
            placeholder="Paste CSV data here (Unit Number, Tenant Name, Contact, Size, Value, Date)"
            rows={8}
            value={csvData}
            onChange={(e) => setCsvData(e.target.value)}
            className="font-mono text-sm"
          />
        </div>

        <Button onClick={handleBulkSubmit} disabled={loading || !csvData} className="w-full">
          {loading ? 'Submitting...' : 'Submit Bulk Units'}
        </Button>
      </CardContent>
    </Card>
  );
}

import { useState } from 'react';

export default function UnitIntake() {
  const [unitId, setUnitId] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setTimeout(() => {
      alert(`Unit ${unitId} intake started! AI sorting in progress...`);
      setUploading(false);
      setUnitId('');
    }, 1500);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#1C2E25] text-center mb-4">
          Unit Intake System
        </h2>
        <p className="font-['Open_Sans'] text-xl text-[#315E47] text-center mb-12">
          Upload photos and let AI sort items into Return, Resell (mobile sales camper), or Donate
        </p>

        <form onSubmit={handleSubmit} className="bg-[#F6F4EE] p-8 rounded-2xl border-2 border-[#C8BFAE]">
          <div className="mb-6">
            <label className="font-['Poppins'] font-semibold text-[#1C2E25] block mb-2">
              Storage Unit ID
            </label>
            <input
              type="text"
              value={unitId}
              onChange={(e) => setUnitId(e.target.value)}
              placeholder="e.g., U-2847"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#C8BFAE] focus:border-[#50E3E3] outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="font-['Poppins'] font-semibold text-[#1C2E25] block mb-2">
              Upload Photos
            </label>
            <div className="border-2 border-dashed border-[#C8BFAE] rounded-xl p-12 text-center hover:border-[#50E3E3] transition-colors cursor-pointer">
              <p className="font-['Open_Sans'] text-[#315E47]">Click or drag photos here</p>
              <p className="font-['Open_Sans'] text-sm text-[#C8BFAE] mt-2">Supports up to 50 images</p>
            </div>
          </div>
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-[#315E47] text-[#F6F4EE] py-4 rounded-xl font-['Poppins'] font-semibold hover:bg-[#50E3E3] hover:text-[#1C2E25] transition-colors disabled:opacity-50"
          >
            {uploading ? 'Processing...' : 'Start AI Sorting'}
          </button>
        </form>
      </div>
    </section>
  );
}

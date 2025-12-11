export default function FamilyDashboard() {
  const claimableItems = [
    { id: 1, name: 'Wedding Photo Album', unit: 'U-2847', image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762416188709_50f511f7.webp' },
    { id: 2, name: 'Jewelry Box', unit: 'U-2847', image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762416190519_8e75edf0.webp' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-['Poppins'] font-semibold text-4xl text-[#1C2E25]">Family Portal</h2>
      
      <div className="bg-[#50E3E3] bg-opacity-20 border-2 border-[#50E3E3] p-6 rounded-2xl">
        <p className="font-['Poppins'] font-semibold text-xl text-[#1C2E25] mb-2">
          We found items that may belong to you
        </p>
        <p className="font-['Open_Sans'] text-[#315E47]">
          Review the items below and submit a claim with verification
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border-2 border-[#C8BFAE]">
        <h3 className="font-['Poppins'] font-semibold text-2xl text-[#1C2E25] mb-6">Potential Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {claimableItems.map(item => (
            <div key={item.id} className="border-2 border-[#C8BFAE] rounded-xl overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="font-['Poppins'] font-semibold text-lg text-[#1C2E25] mb-1">{item.name}</p>
                <p className="font-['Open_Sans'] text-sm text-[#315E47] mb-4">Unit: {item.unit}</p>
                <button className="w-full bg-[#315E47] text-[#F6F4EE] py-3 rounded-xl hover:bg-[#50E3E3] hover:text-[#1C2E25] transition-colors">
                  Claim This Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

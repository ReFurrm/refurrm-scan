export default function BuyerDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="font-['Poppins'] font-semibold text-4xl text-[#1C2E25]">Your Impact</h2>
      
      <div className="bg-gradient-to-br from-[#315E47] to-[#50E3E3] p-8 rounded-2xl text-white">
        <p className="font-['Open_Sans'] text-lg mb-2">Your purchases have funded</p>
        <p className="font-['Poppins'] font-semibold text-6xl mb-4">7 Rescues</p>
        <p className="font-['Open_Sans']">Helping 7 families reclaim their memories</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE]">
          <p className="font-['Poppins'] font-semibold text-3xl text-[#1C2E25] mb-2">$847</p>
          <p className="font-['Open_Sans'] text-[#315E47]">Total Spent</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE]">
          <p className="font-['Poppins'] font-semibold text-3xl text-[#1C2E25] mb-2">12</p>
          <p className="font-['Open_Sans'] text-[#315E47]">Items Purchased</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE]">
          <p className="font-['Poppins'] font-semibold text-3xl text-[#1C2E25] mb-2">23</p>
          <p className="font-['Open_Sans'] text-[#315E47]">Items Returned</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border-2 border-[#C8BFAE]">
        <h3 className="font-['Poppins'] font-semibold text-2xl text-[#1C2E25] mb-6">Recent Purchases</h3>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex justify-between items-center p-4 bg-[#F6F4EE] rounded-xl">
              <div>
                <p className="font-['Poppins'] font-semibold text-[#1C2E25]">Vintage Jewelry Box</p>
                <p className="font-['Open_Sans'] text-sm text-[#315E47]">Funded 1 rescue • Nov {i}, 2025</p>
              </div>
              <p className="font-['Poppins'] font-semibold text-[#50E3E3]">$89</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

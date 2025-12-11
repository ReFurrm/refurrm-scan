export default function VolunteerMap() {
  const zones = [
    { id: 1, name: 'Downtown Zone', volunteers: 12, pickups: 5, color: '#315E47' },
    { id: 2, name: 'Westside Zone', volunteers: 8, pickups: 3, color: '#50E3E3' },
    { id: 3, name: 'Eastside Zone', volunteers: 15, pickups: 7, color: '#C8BFAE' }
  ];

  return (
    <section className="bg-[#F6F4EE] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#1C2E25] text-center mb-4">
          Volunteer Network Map
        </h2>
        <p className="font-['Open_Sans'] text-xl text-[#315E47] text-center mb-12">
          Real-time volunteer availability and donation routes
        </p>
        
        <div className="bg-white p-8 rounded-2xl border-2 border-[#C8BFAE] mb-8">
          <div className="aspect-video bg-gradient-to-br from-[#F6F4EE] to-[#C8BFAE] rounded-xl flex items-center justify-center">
            <p className="font-['Poppins'] font-semibold text-2xl text-[#1C2E25]">
              Interactive Map (GPS Integration Ready)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {zones.map(zone => (
            <div key={zone.id} className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE]">
              <div className="w-4 h-4 rounded-full mb-4" style={{ backgroundColor: zone.color }}></div>
              <h3 className="font-['Poppins'] font-semibold text-xl text-[#1C2E25] mb-4">{zone.name}</h3>
              <div className="space-y-2">
                <p className="font-['Open_Sans'] text-[#315E47]">{zone.volunteers} Active Volunteers</p>
                <p className="font-['Open_Sans'] text-[#315E47]">{zone.pickups} Scheduled Pickups</p>
              </div>
              <button className="w-full mt-4 bg-[#50E3E3] text-[#1C2E25] py-2 rounded-xl hover:scale-105 transition-transform">
                View Zone
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

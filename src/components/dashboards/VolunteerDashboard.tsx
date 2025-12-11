export default function VolunteerDashboard() {
  const tasks = [
    { id: 1, title: 'Unit Cleanout - Storage #247', location: 'Downtown', time: 'Today 2:00 PM', status: 'assigned' },
    { id: 2, title: 'Donation Pickup Route', location: 'Westside', time: 'Tomorrow 10:00 AM', status: 'available' },
    { id: 3, title: 'Item Photography Session', location: 'ReFURRM Hub', time: 'Sat 1:00 PM', status: 'available' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-['Poppins'] font-semibold text-4xl text-[#1C2E25]">Volunteer Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE]">
          <p className="font-['Poppins'] font-semibold text-3xl text-[#1C2E25] mb-2">14</p>
          <p className="font-['Open_Sans'] text-[#315E47]">Tasks Completed</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE]">
          <p className="font-['Poppins'] font-semibold text-3xl text-[#1C2E25] mb-2">38</p>
          <p className="font-['Open_Sans'] text-[#315E47]">Volunteer Hours</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE]">
          <p className="font-['Poppins'] font-semibold text-3xl text-[#1C2E25] mb-2">5</p>
          <p className="font-['Open_Sans'] text-[#315E47]">Families Helped</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border-2 border-[#C8BFAE]">
        <h3 className="font-['Poppins'] font-semibold text-2xl text-[#1C2E25] mb-6">Available Tasks</h3>
        <div className="space-y-4">
          {tasks.map(task => (
            <div key={task.id} className="flex justify-between items-center p-4 bg-[#F6F4EE] rounded-xl">
              <div>
                <p className="font-['Poppins'] font-semibold text-[#1C2E25]">{task.title}</p>
                <p className="font-['Open_Sans'] text-sm text-[#315E47]">{task.location} • {task.time}</p>
              </div>
              <button className="bg-[#50E3E3] text-[#1C2E25] px-6 py-2 rounded-full hover:scale-105 transition-transform">
                {task.status === 'assigned' ? 'View' : 'Accept'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

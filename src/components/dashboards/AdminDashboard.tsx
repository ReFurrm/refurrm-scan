export default function AdminDashboard() {
  const stats = [
    { label: 'Total Units Processed', value: '247', trend: '+12 this week' },
    { label: 'Items Returned', value: '1,834', trend: '+89 this month' },
    { label: 'Active Ambassadors', value: '156', trend: '23 new' },
    { label: 'Revenue Generated', value: '$47,290', trend: '+$8,200' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="font-['Poppins'] font-semibold text-4xl text-[#1C2E25]">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE] shadow-md">
            <p className="font-['Open_Sans'] text-[#315E47] text-sm mb-2">{stat.label}</p>
            <p className="font-['Poppins'] font-semibold text-4xl text-[#1C2E25] mb-2">{stat.value}</p>
            <p className="font-['Open_Sans'] text-[#50E3E3] text-sm">{stat.trend}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-8 rounded-2xl border-2 border-[#C8BFAE]">
        <h3 className="font-['Poppins'] font-semibold text-2xl text-[#1C2E25] mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-[#315E47] text-[#F6F4EE] px-6 py-3 rounded-xl hover:bg-[#50E3E3] hover:text-[#1C2E25] transition-colors">
            Add Unit
          </button>
          <button className="bg-[#315E47] text-[#F6F4EE] px-6 py-3 rounded-xl hover:bg-[#50E3E3] hover:text-[#1C2E25] transition-colors">
            Manage Users
          </button>
          <button className="bg-[#315E47] text-[#F6F4EE] px-6 py-3 rounded-xl hover:bg-[#50E3E3] hover:text-[#1C2E25] transition-colors">
            View Reports
          </button>
          <button className="bg-[#315E47] text-[#F6F4EE] px-6 py-3 rounded-xl hover:bg-[#50E3E3] hover:text-[#1C2E25] transition-colors">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StatsBar() {
  const stats = [
    { value: '2,847', label: 'Items Returned' },
    { value: '247', label: 'Units Processed' },
    { value: '156', label: 'Active Ambassadors' },
    { value: '$47K', label: 'Rescue Funding' }
  ];

  return (
    <section className="bg-[#315E47] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="font-['Poppins'] font-semibold text-5xl text-[#50E3E3] mb-2">
                {stat.value}
              </p>
              <p className="font-['Open_Sans'] text-[#F6F4EE]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MissionSection() {
  const missions = [
    {
      title: 'Unit Discovery',
      description: 'Storage facilities, renters, or community members alert ReFURRM when a unit needs rescue.',
      icon: '↩️',
      color: '#315E47'
    },
    {
      title: 'AI Sorting',
      description: 'ReFURRM\'s AI tools help categorize every find: items to return, items to resell at our mobile sales camper, and items to donate — keeping purpose at the center of every rescue.',

      icon: '🔄',
      color: '#50E3E3'
    },
    {
      title: 'Family Reunion',
      description: 'Items that were never meant to be sold are returned to their owners. Every resale funds the next rescue.',
      icon: '💚',
      color: '#C8BFAE'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#1C2E25] text-center mb-16">
          Our Three-Part Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((mission, idx) => (
            <div key={idx} className="bg-[#F6F4EE] p-8 rounded-2xl border-2 border-[#C8BFAE] text-center hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">{mission.icon}</div>
              <h3 className="font-['Poppins'] font-semibold text-3xl text-[#1C2E25] mb-4">{mission.title}</h3>
              <p className="font-['Open_Sans'] text-[#315E47]">{mission.description}</p>
            </div>
          ))}
        </div>
        <p className="font-['Open_Sans'] text-[#315E47] text-center text-lg mt-12">
          From discovery to return, every ReFURRM process transforms loss into legacy.
        </p>
      </div>
    </section>
  );
}

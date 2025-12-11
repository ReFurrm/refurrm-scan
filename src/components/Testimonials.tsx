export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Garcia',
      role: 'Reunited Family',
      image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762416184402_3d5717fa.webp',
      quote: 'ReFURRM found my wedding album I thought was lost forever. They restored more than photos—they restored hope.'
    },
    {
      name: 'James Chen',
      role: 'Gold Ambassador',
      image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762416186185_aac435f5.webp',
      quote: 'Being an Ambassador means every rescue I document helps another family. It\'s the most meaningful work I\'ve done.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Active Volunteer',
      image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762416187872_3e351728.webp',
      quote: 'Volunteering with ReFURRM connects me to real stories. Every box we sort could change someone\'s life.'
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#1C2E25] text-center mb-16">
          Stories from Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((person, idx) => (
            <div key={idx} className="bg-[#F6F4EE] p-8 rounded-2xl border-2 border-[#C8BFAE]">
              <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
              <p className="font-['Open_Sans'] text-[#1C2E25] italic mb-6">"{person.quote}"</p>
              <p className="font-['Poppins'] font-semibold text-[#315E47] text-center">{person.name}</p>
              <p className="font-['Open_Sans'] text-sm text-[#C8BFAE] text-center">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

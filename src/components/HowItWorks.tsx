export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Unit Discovery',
      desc: 'Storage facilities partner with ReFURRM to rescue abandoned units',
      image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762416452656_da4d082c.webp'
    },
    {
      num: '2',
      title: 'AI Sorting',
      desc: 'Our system categorizes items: Return, Resell (mobile camper), or Donate',

      image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762416454513_10133122.webp'
    },
    {
      num: '3',
      title: 'Family Reunion',
      desc: 'Sentimental items are returned. Sales fund the next rescue.',
      image: 'https://d64gsuwffb70l.cloudfront.net/690c55f62a1c1509e277d961_1762416457585_d863d9c3.webp'
    }
  ];

  return (
    <section className="bg-[#F6F4EE] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#1C2E25] text-center mb-16">
          How ReFURRM Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="bg-white p-6 rounded-2xl border-2 border-[#C8BFAE] text-center">
              <div className="w-16 h-16 bg-[#315E47] text-[#F6F4EE] rounded-full flex items-center justify-center text-3xl font-['Poppins'] font-semibold mx-auto mb-6">
                {step.num}
              </div>
              <img src={step.image} alt={step.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="font-['Poppins'] font-semibold text-2xl text-[#1C2E25] mb-3">{step.title}</h3>
              <p className="font-['Open_Sans'] text-[#315E47]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

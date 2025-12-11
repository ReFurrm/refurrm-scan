export default function CTASection() {
  const handleJoin = () => {
    alert('Welcome to ReFURRM! Ambassador registration started.');
  };

  return (
    <section className="bg-gradient-to-br from-[#315E47] to-[#1C2E25] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-['Poppins'] font-semibold text-5xl text-[#F6F4EE] mb-6">
          Join the Movement
        </h2>
        <p className="font-['Open_Sans'] text-xl text-[#C8BFAE] mb-8">
          Whether you're a family searching for lost items, a volunteer ready to help, or a supporter shopping with purpose — there's a place for you at ReFURRM.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button onClick={handleJoin} className="bg-[#50E3E3] text-[#1C2E25] px-8 py-4 rounded-full font-['Poppins'] font-semibold text-lg hover:scale-105 transition-transform">
            Become an Ambassador
          </button>
          <button className="bg-transparent border-2 border-[#F6F4EE] text-[#F6F4EE] px-8 py-4 rounded-full font-['Poppins'] font-semibold text-lg hover:bg-[#F6F4EE] hover:text-[#1C2E25] transition-colors">
            Search for Items
          </button>
        </div>
      </div>
    </section>
  );
}

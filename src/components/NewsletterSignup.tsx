import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#315E47] to-[#50E3E3] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-['Poppins'] font-semibold text-4xl text-[#F6F4EE] mb-4">
          Stay Connected
        </h3>
        <p className="font-['Open_Sans'] text-xl text-[#F6F4EE] mb-8">
          Get weekly updates on reunions, rescues, and ways to help
        </p>
        {subscribed ? (
          <div className="bg-[#F6F4EE] text-[#315E47] px-8 py-4 rounded-full inline-block font-['Poppins'] font-semibold">
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full w-full md:w-96 outline-none text-[#1C2E25]"
              required
            />
            <button type="submit" className="bg-[#1C2E25] text-[#F6F4EE] px-8 py-4 rounded-full font-['Poppins'] font-semibold hover:scale-105 transition-transform">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

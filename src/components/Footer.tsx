import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#1C2E25] text-[#F6F4EE] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo className="h-12 w-12 mb-4" />
            <p className="font-['Open_Sans'] text-[#C8BFAE]">
              Restoring Hope in a System Built on Loss
            </p>
          </div>
          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-2 font-['Open_Sans']">
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">How It Works</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Ambassador Program</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Volunteer</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Shop</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 font-['Open_Sans']">
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Impact Reports</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Success Stories</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">FAQs</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 font-['Open_Sans']">
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Facebook</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Instagram</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">Twitter</a></li>
              <li><a href="#" className="text-[#C8BFAE] hover:text-[#50E3E3]">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#315E47] pt-8 text-center font-['Open_Sans'] text-[#C8BFAE]">
          <p>
            &copy; 2025 ReFURRM. All rights reserved. | 
            <a href="/privacy" className="hover:text-[#50E3E3] ml-2">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-[#50E3E3] ml-2">Terms of Service</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

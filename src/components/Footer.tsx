import { Shield } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <Logo className="w-16 h-16" />
              <div className="flex flex-col leading-none pt-1">
                <span className="text-2xl font-black tracking-widest uppercase text-white">
                  PREMIER PLUS
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-500 mt-2">
                  MANAGEMENT SERVICES
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering organizations in Qatar to achieve excellence through globally recognized ISO certification standards.
            </p>
            <div className="text-sm text-gray-400 leading-relaxed mb-6">
              <p>Office no 04, 2nd Floor</p>
              <p>Al Emadi Building, D ring road</p>
              <p>Doha | Qatar</p>
            </div>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-amber-500 transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Certifications</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">ISO 9001:2015</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">ISO 14001:2015</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">ISO 45001:2018</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">ISO 27001:2022</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">ISO 22000:2018</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/5 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 uppercase tracking-widest text-[10px]">
          <p>&copy; {new Date().getFullYear()} Premier Plus Management Services. All rights reserved.</p>
          <p className="text-gray-500">Doha, Qatar</p>
        </div>
      </div>
    </footer>
  );
}

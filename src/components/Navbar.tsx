import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-[#0a0a0b]/95 backdrop-blur-md border-white/10 py-3' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Logo className="w-12 h-12" />
            <div className="flex flex-col leading-none pt-1">
              <span className="text-xl font-black tracking-widest uppercase text-white">
                PREMIER PLUS
              </span>
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-amber-500 mt-1.5">
                MANAGEMENT SERVICES
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`hover:text-amber-500 transition-colors ${
                  isScrolled ? 'text-[#e5e5e7]' : 'text-[#e5e5e7]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2 border text-xs font-bold uppercase tracking-widest transition-all ${
                isScrolled
                  ? 'border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black'
                  : 'border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black'
              }`}
            >
              Get Certified
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-white' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0b] border-t border-white/10 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4 text-sm font-medium uppercase tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#e5e5e7] py-2 border-b border-white/5 hover:text-amber-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 px-6 py-3 text-center border border-amber-500/50 text-amber-500 text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Certified
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

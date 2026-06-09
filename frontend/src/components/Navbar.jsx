import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Founder', href: '/founder' },
  { label: 'Research', href: '/research' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Publications', href: '/publications' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (href) => location.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-forest-900/95 backdrop-blur-xl shadow-2xl border-b border-emerald-900/50' : 'bg-transparent'
    }`}>
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 group-hover:border-gold-400 transition-colors duration-300 shadow-emerald bg-white">
              <img
                src="/logo.jpeg"
                alt="VCPCRF Logo"
                className="w-full h-full object-contain p-0.5"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-forest-800 text-xl font-bold text-emerald-400 font-serif">V</div>`;
                }}
              />
            </div>
            <div>
              <div className="font-serif font-bold text-white text-sm leading-tight">VCPCRF</div>
              <div className="text-emerald-400 text-xs font-display tracking-widest uppercase">Est. 1988</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative pb-1 text-sm tracking-wide transition-all duration-300 font-medium ${
                  isActive(item.href)
                    ? 'text-emerald-400'
                    : 'text-gray-300 hover:text-emerald-400'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-gold-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden xl:block">
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-6">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden transition-all duration-300 overflow-hidden ${
        menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-forest-900/98 backdrop-blur-xl border-t border-emerald-900/50 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 py-3 border-b border-white/5 last:border-0 text-sm font-medium transition-colors duration-300 ${
                isActive(item.href) ? 'text-emerald-400' : 'text-gray-300 hover:text-emerald-400'
              }`}
            >
              {isActive(item.href) && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />}
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary block text-center mt-4 text-sm py-2.5">
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}

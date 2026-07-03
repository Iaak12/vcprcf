import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About VCPCRF', href: '/about' },
  { label: 'Meet the Founder', href: '/founder' },
  { label: 'Research Areas', href: '/research' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Publications', href: '/publications' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'Contact Us', href: '/contact' },
];

const researchLinks = [
  'Acute Promyelocytic Leukemia',
  'Chronic Pancreatitis',
  'Migraine Management',
  'Allergic Rhinitis',
  'Nutritional Anaemia',
  'Rasa Shastra & Pharmaceutics',
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-900 border-t border-emerald-900/40">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/5 rounded-full blur-[80px]" />

      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-full border-2 border-emerald-500/50 overflow-hidden flex-shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="VCPCRF"
                  className="w-full h-full object-contain bg-white p-1"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-forest-800 text-xl font-bold text-emerald-400 font-serif">V</div>`;
                  }}
                />
              </div>
              <div>
                <p className="font-serif font-bold text-white text-sm">VCPCRF</p>
                <p className="text-emerald-500 text-xs font-display tracking-widest">Est. 1988</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Vaidya Chandra Prakash Cancer Research Foundation — Bridging Ayurvedic tradition with modern scientific evidence for three decades.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-xs leading-relaxed">Prakash Villa, NH 74, Danpur Area, Rudrapur, Uttarakhand – 263153</p>
              </div>
              <a href="tel:+919837028544" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors text-xs">
                <Phone size={13} className="text-emerald-500" />
                +91 98370 28544
              </a>
              <a href="mailto:vcpcrf@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors text-xs">
                <Mail size={13} className="text-emerald-500" />
                vcpcrf@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-display text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-700 group-hover:bg-emerald-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="text-white font-semibold font-display text-sm uppercase tracking-widest mb-5">Research Areas</h4>
            <ul className="space-y-2.5">
              {researchLinks.map((item) => (
                <li key={item}>
                  <Link
                    to="/research"
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-700 group-hover:bg-gold-400 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recognition & Links */}
          <div>
            <h4 className="text-white font-semibold font-display text-sm uppercase tracking-widest mb-5">Recognition & Links</h4>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-gray-300 text-xs font-display uppercase tracking-wider mb-1">NGO Darpan ID</p>
                <p className="text-white text-xs font-mono">UA/2017/0115005</p>
              </div>
              <a
                href="https://www.vcpcrf.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium p-3 rounded-xl bg-white/3 hover:bg-white/5 border border-white/5 hover:border-emerald-500/20"
              >
                <ExternalLink size={14} />
                www.vcpcrf.org
              </a>
              <a
                href="https://www.researchgate.net/profile/Vaidya-Prakash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium p-3 rounded-xl bg-white/3 hover:bg-white/5 border border-white/5 hover:border-emerald-500/20"
              >
                <ExternalLink size={14} />
                ResearchGate Profile
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-emerald-900 to-transparent mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Vaidya Chandra Prakash Cancer Research Foundation. All rights reserved.
            <span className="mx-2">·</span>
            Reg. No. 6759/4
            <span className="mx-2">·</span>
            PAN: AAATV1805G
          </p>
          <p className="text-gray-300 text-xs flex items-center gap-1.5">
            Made with <Heart size={12} className="text-emerald-500" fill="currentColor" /> for Ayurvedic Science
          </p>
        </div>
      </div>
    </footer>
  );
}

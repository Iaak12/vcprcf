import React, { useEffect, useRef } from 'react';
import { Building2, ExternalLink } from 'lucide-react';

const collaborators = [
  { name: 'UPES, Dehradun', area: 'Pancreatitis Research & Academic Activities', logo: '🎓', type: 'Academic', active: true },
  { name: 'IISc, Bengaluru', area: 'Characterization & Standardization of Ayurvedic Formulations', logo: '🔬', type: 'Research', active: false },
  { name: 'AIIMS, New Delhi', area: 'Clinical & Pharmacological Studies — Migraine & APML', logo: '🏥', type: 'Clinical', active: false },
  { name: 'GSVM Medical College, Kanpur', area: 'Randomized Controlled Clinical Studies — Allergic Rhinitis', logo: '🏥', type: 'Clinical', active: false },
  { name: 'GB Pant University, Pantnagar', area: 'Interdisciplinary Research & Scientific Development', logo: '🎓', type: 'Academic', active: false },
  { name: 'Vipragen Biosciences, Mysuru', area: 'Experimental Pharmacology, Toxicity & Efficacy Studies', logo: '⚗️', type: 'Industry', active: false },
  { name: 'CCRAS, Ministry of AYUSH', area: 'APML Project Sponsorship & Research Advisory', logo: '🏛️', type: 'Government', active: true },
  { name: 'ICMR, New Delhi', area: 'District Nutrition Project & Multi-Centre Studies', logo: '🏛️', type: 'Government', active: false },
  { name: 'Regional Cancer Centre, Kerala', area: 'Clinical Research Unit — APML, ALL, Pancreatitis', logo: '🏥', type: 'Clinical', active: false },
  { name: 'Ipca Laboratories', area: 'R&D Partnership, Capacity Building & XRD CSR Support', logo: '💊', type: 'Industry', active: true },
  { name: 'AL-JOOD Centre, Oman', area: 'International Ayurvedic Treatment Practice', logo: '🌍', type: 'International', active: true },
  { name: 'Dharmshila Cancer Hospital, Delhi', area: 'Ayurvedic Consultation in Cancer Care', logo: '🏥', type: 'Clinical', active: false },
];

const typeColors = {
  Academic: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Research: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Clinical: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Government: 'bg-gold-500/20 text-gold-300 border-gold-500/30',
  Industry: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  International: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
};

export default function Collaborations({ hideBanner }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="collaborations" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-800" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        {!hideBanner && (
          <div className="text-center mb-16">
            <p className="section-subtitle reveal">Partners & Institutions</p>
            <h2 className="section-title reveal">Research <span className="gradient-text">Collaborations</span></h2>
            <div className="divider-gold reveal" />
          </div>
        )}
        <p className="text-gray-300 max-w-2xl mx-auto reveal">
          VCPCRF's strength lies in its interdisciplinary collaborations with premier academic, clinical, government and industry partners across India and internationally.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 mt-10">
          {collaborators.map((c, i) => (
            <div
              key={i}
              className={`glass-card p-6 reveal hover:-translate-y-2 hover:shadow-glow transition-all duration-500 group relative overflow-hidden ${c.active ? 'border-emerald-500/30 shadow-sm' : 'hover:border-emerald-500/30'}`}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative z-10 flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500 shadow-inner group-hover:shadow-glow">
                  {c.logo}
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-bold text-white text-base leading-tight group-hover:text-emerald-300 transition-colors">{c.name}</h4>
                    {c.active && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex-shrink-0 shadow-sm animate-pulse">Active</span>
                    )}
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-display font-bold mb-3 inline-block shadow-sm ${typeColors[c.type]}`}>
                    {c.type}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">{c.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Banner */}
        <div className="glass-card-dark p-8 md:p-12 reveal relative overflow-hidden group/banner hover:border-gold-500/30 hover:shadow-gold transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 translate-x-[-100%] group-hover/banner:translate-x-[100%] transition-transform duration-1000" />
          <div className="relative z-10">
            <h3 className="font-serif text-3xl font-bold text-white mb-10 text-center">
              Research <span className="gradient-text">Infrastructure</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🔬', label: 'Dedicated Research Laboratory', detail: 'Established 1996, inaugurated by Vice President K.R. Narayanan' },
                { icon: '📊', label: 'Rigaku XRD System', detail: '₹57 Lakh Benchtop X-Ray Diffraction facility installed 2025 via CSR' },
                { icon: '⚖️', label: 'Pharmaceutical Equipment', detail: 'Muffle furnaces, electronic balances, particle size analyzer, processing equipment' },
                { icon: '📚', label: 'Library & Documentation Centre', detail: 'Comprehensive collection of Ayurvedic texts and research literature' },
                { icon: '🖥️', label: 'Conference & Training Hall', detail: 'Multimedia-equipped facility for workshops, symposia, and training programs' },
                { icon: '🌿', label: 'Medicinal Plant Nursery', detail: 'High-altitude nursery for Atees (Aconitum heterophyllum) in Uttarakhand' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-gold transition-all duration-300 group/item relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-start gap-5 w-full">
                    <span className="text-3xl group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0 pt-1">{item.icon}</span>
                    <div className="pt-0.5">
                      <p className="text-white font-bold text-base mb-2 group-hover/item:text-gold-300 transition-colors">{item.label}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

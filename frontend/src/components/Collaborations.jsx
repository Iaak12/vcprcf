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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {collaborators.map((c, i) => (
            <div
              key={i}
              className={`glass-card p-5 reveal hover:-translate-y-1 transition-all duration-500 group ${c.active ? 'border-emerald-500/25' : ''}`}
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {c.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-white text-sm leading-tight">{c.name}</h4>
                    {c.active && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 flex-shrink-0">Active</span>
                    )}
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-display font-medium mb-2 inline-block ${typeColors[c.type]}`}>
                    {c.type}
                  </span>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Banner */}
        <div className="glass-card-dark p-8 md:p-10 reveal">
          <h3 className="font-serif text-2xl font-bold text-white mb-6 text-center">
            Research <span className="gradient-text">Infrastructure</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '🔬', label: 'Dedicated Research Laboratory', detail: 'Established 1996, inaugurated by Vice President K.R. Narayanan' },
              { icon: '📊', label: 'Rigaku XRD System', detail: '₹57 Lakh Benchtop X-Ray Diffraction facility installed 2025 via CSR' },
              { icon: '⚖️', label: 'Pharmaceutical Equipment', detail: 'Muffle furnaces, electronic balances, particle size analyzer, processing equipment' },
              { icon: '📚', label: 'Library & Documentation Centre', detail: 'Comprehensive collection of Ayurvedic texts and research literature' },
              { icon: '🖥️', label: 'Conference & Training Hall', detail: 'Multimedia-equipped facility for workshops, symposia, and training programs' },
              { icon: '🌿', label: 'Medicinal Plant Nursery', detail: 'High-altitude nursery for Atees (Aconitum heterophyllum) in Uttarakhand' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/4 border border-white/8 hover:border-emerald-500/20 transition-colors duration-300 flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

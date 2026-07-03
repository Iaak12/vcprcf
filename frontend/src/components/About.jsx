import React, { useEffect, useRef } from 'react';
import { Target, Eye, CheckCircle2, Building2 } from 'lucide-react';

const pillars = [
  {
    icon: <Target size={28} />,
    title: 'Scientific Validation',
    desc: 'Rigorous clinical, pharmacological and analytical research to validate Ayurvedic formulations and treatment protocols.',
  },
  {
    icon: <Eye size={28} />,
    title: 'Evidence Generation',
    desc: 'Observational studies, controlled trials and translational research generating reproducible, peer-reviewed evidence.',
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Quality Standards',
    desc: 'Establishing reproducible manufacturing processes and quality standards for Ayurvedic medicines.',
  },
  {
    icon: <Building2 size={28} />,
    title: 'Institutional Collaboration',
    desc: 'Partnering with AIIMS, IISc, CCRAS and other premier institutions for interdisciplinary research.',
  },
];

const highlights = [
  '30+ years of continuous research',
  '40+ peer-reviewed publications',
  '3 Patents',
  'Advanced XRD facility installed in 2025',
  'NGO Darpan Unique ID: UA/2017/0115005',
];

export default function About({ hideBanner }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />

      <div className="container-max relative z-10">
        {/* Header */}
        {!hideBanner && (
          <div className="text-center mb-16">
            <p className="section-subtitle reveal">Who We Are</p>
            <h2 className="section-title reveal">About <span className="gradient-text">VCPCRF</span></h2>
            <div className="divider-gold reveal" />
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed reveal">
              Established in 1988 by Padma Shri Vaidya Balendu Prakash, the Vaidya Chandra Prakash Cancer Research Foundation
              is one of India's pioneering independent organizations dedicated to scientific validation of Ayurvedic interventions
              through clinical research, translational studies, and community health initiatives.
            </p>
          </div>
        )}

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="glass-card p-8 reveal-left hover:border-emerald-500/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Eye size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent mb-5" />
            <p className="text-gray-300 leading-relaxed text-lg italic font-serif">
              "To establish Ayurveda as an evidence-based healthcare system through scientific research, innovation and
              interdisciplinary collaboration."
            </p>
          </div>

          <div className="glass-card p-8 reveal-right hover:border-gold-500/30 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                <Target size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <div className="h-px bg-gradient-to-r from-gold-500/50 to-transparent mb-5" />
            <ul className="space-y-2">
              {[
                'Scientifically validate Ayurvedic formulations and treatment protocols',
                'Establish quality standards and reproducible manufacturing processes',
                'Generate clinical evidence through observational and controlled studies',
                'Foster collaboration between Ayurveda and modern science',
                'Improve public health through safe and effective interventions',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="glass-card p-6 text-center reveal hover:border-emerald-500/30 hover:-translate-y-2 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 flex items-center justify-center text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                {p.icon}
              </div>
              <h4 className="font-semibold text-white mb-2 font-display">{p.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="glass-card-dark p-8 md:p-12 reveal">
          <h3 className="font-serif text-2xl font-bold text-white mb-8 text-center">
            Research <span className="gradient-text">Highlights</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-emerald-900/20 transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

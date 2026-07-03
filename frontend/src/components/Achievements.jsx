import React, { useEffect, useRef } from 'react';
import { Trophy, Star, Medal, Crown } from 'lucide-react';

const awards = [
  { year: '1998', title: 'National Citizen Award–1996', body: 'Awarded by H.E. Sh. K.R. Narayanan, President of India' },
  { year: '2000', title: 'Best Ayurvedic Physician–98', body: 'Awarded by Hon\'ble Smt. Sheela Dixit, Chief Minister of Delhi' },
  { year: '2001', title: 'Pride of Doon', body: 'Awarded by Sh. Nityanand Swami, CM Uttarakhand & H.E. Sh. S.S. Barnala, Governor Uttarakhand' },
  { year: '2011', title: 'Bhishak Shree', body: 'Conferred by Sri Sri Ravishankar Ji, Art of Living' },
  { year: '2016', title: 'Outstanding Achievement Award', body: 'Garhwal Post' },
  { year: '2018', title: 'Ayurved Vibhushan Award', body: 'Amar Ujala' },
  { year: '2019', title: 'Aarogyam Excellence in Healthcare Award', body: 'Healthcare Excellence Recognition' },
  { year: '2019', title: 'Uttarakhand Ratna', body: 'Awarded by Governor of Uttarakhand' },
  { year: '1997', title: 'Doon Ratna', body: 'Awarded by Swami Vidyanand Giri, Dehradun' },
  { year: '1996', title: 'Pranacharya', body: 'Awarded by Hon\'ble Saleem Iqbal Shervani, Union Minister of State Health' },
  { year: '1996', title: 'Uttarakhand Gaurav Samman', body: 'Awarded by Sh. Nityanand Swami, Chairman, UP Legislative Assembly' },
];

const achievements = [
  {
    icon: <Trophy size={24} />,
    label: 'US & European Patent',
    desc: 'APML treatment formulation accorded US and European patent — first of its kind in Ayurveda.',
  },
  {
    icon: <Medal size={24} />,
    label: 'CCRAS Collaboration',
    desc: 'Sponsored research on APML at Indian Rotary Cancer Hospital, AIIMS New Delhi (1997–2000).',
  },
  {
    icon: <Star size={24} />,
    label: 'Technology Vision 2035',
    desc: 'Non-iron Ayurvedic anaemia formulation included in India\'s Technology Vision 2035.',
  },
  {
    icon: <Crown size={24} />,
    label: 'Presidential Physician',
    desc: 'Honorary Physician to H.E. President of India, Shri KR Narayanan (1997–2002).',
  },
];

const events = [
  { year: '1997', event: 'Public seminar on state of Ayurvedic formulations under VCP Cancer Research Foundation' },
  { year: '2004', event: 'National Training Workshop on Rasa-Shastra (NTWRS) — sponsored by ICMR, AYUSH, Govt. of Uttarakhand' },
  { year: '2006', event: '14th ICON Meet, Dehradun — organized under VCP Cancer Research Foundation' },
  { year: '2025', event: 'Symposium on Ayurveda for Optimal Immunity' },
  { year: '2026', event: 'UP State Level Symposium on IMMBO — herbo-mineral formulation for allergic rhinitis' },
];

export default function Achievements({ hideBanner }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900" />
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        {!hideBanner && (
          <div className="text-center mb-16">
            <p className="section-subtitle reveal">Honours & Recognition</p>
            <h2 className="section-title reveal">Awards & <span className="gradient-text">Achievements</span></h2>
            <div className="divider-gold reveal" />
          </div>
        )}

        {/* Top Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((a, i) => (
            <div key={i} className="glass-card p-8 text-center reveal hover:border-gold-500/50 hover:-translate-y-2 hover:shadow-gold transition-all duration-500 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-900/30 border border-gold-500/20 flex items-center justify-center text-gold-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:shadow-gold">
                  {a.icon}
                </div>
                <h4 className="font-semibold text-white mb-3 font-display text-base">{a.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Awards Timeline */}
          <div className="reveal-left">
            <h3 className="font-serif text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy size={22} className="text-gold-400" />
              Awards & Honors
            </h3>

            <div className="space-y-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:-translate-x-1 shadow-lg group relative overflow-hidden ${
                    award.highlight
                      ? 'bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/30 hover:border-gold-500/50 hover:shadow-gold'
                      : 'bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:shadow-glow'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-white/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className={`relative z-10 text-xs font-display font-bold px-3 py-1.5 rounded-xl flex-shrink-0 shadow-inner ${
                    award.highlight ? 'bg-gold-400 text-forest-900' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {award.year}
                  </div>
                  <div className="relative z-10 mt-0.5">
                    <p className={`font-bold text-base mb-1.5 ${award.highlight ? 'text-gold-300' : 'text-white group-hover:text-emerald-300 transition-colors'}`}>
                      {award.highlight && '⭐ '}{award.title}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">{award.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Scientific Achievements */}
            <div className="reveal-right">
              <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Medal size={22} className="text-emerald-400" />
                Key Scientific Milestones
              </h3>
              <div className="space-y-5">
                {[
                  { label: 'APML Study (1997–2000)', detail: '11 patients successfully treated — proof of concept for Ayurvedic blood cancer treatment, sponsored by CCRAS at AIIMS New Delhi.' },
                  { label: 'First Clinical Research Unit (1999–2001)', detail: 'Established first of its kind unit at Regional Cancer Centre, Thiruvananthapuram, Kerala — evidence for APML, ALL, Chronic Pancreatitis and sub-mucous fibrosis.' },
                  { label: 'AIIMS Migraine RCT (2010–2016)', detail: 'Randomized Controlled Trial at AIIMS New Delhi proved Ayurvedic protocol significantly superior to modern medicine for migraine prevention.' },
                  { label: 'Pancreatitis Patent (2024)', detail: 'Indian Patent granted in 2024 for pioneering Ayurvedic treatment of Chronic Pancreatitis — a disease with no known cure worldwide.' },
                  { label: 'CRAV Guru (2021)', detail: 'Selected as CRAV Guru in Rasa Shastra by Rashtriya Ayurveda Vidyapeeth — highest recognition in the field.' },
                ].map((m, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 group shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="relative z-10">
                      <p className="text-emerald-400 font-bold text-base mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> {m.label}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Organized */}
            <div className="reveal-right glass-card-dark p-8 relative overflow-hidden group hover:border-gold-500/40 hover:shadow-gold transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-500/10 to-gold-900/30 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300 shadow-inner border border-gold-500/20">
                    <Star size={24} />
                  </div>
                  Events Organized
                </h3>
                <div className="relative pl-6 mt-2">
                  {events.map((ev, i) => (
                    <div key={i} className="timeline-item relative mb-5 last:mb-0">
                      <span className="text-gold-400 font-bold text-sm font-display tracking-wider block mb-1">{ev.year}</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{ev.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

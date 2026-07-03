import React, { useEffect, useRef } from 'react';
import { Award, MapPin, Globe, BookOpen, FlaskConical, GraduationCap, Star } from 'lucide-react';

const positions = [
  { period: '1985–present', role: 'Ayurvedic Physician (Private Practice)' },
  { period: '1988–present', role: 'Founder & Medical Director, VCPCRF' },
  { period: '1997–2002', role: 'Honorary Physician to the President of India, Shri K.R. Narayanan' },
  { period: '1997–2007', role: 'Member, Central Council of Indian Medicine, Govt. of India' },
  { period: '1999–2001', role: 'Head, Clinical Research Unit, Regional Cancer Centre, Kerala' },
  { period: '2003–2007', role: 'Medical Director, Specialized Indian Traditional Medical Centre, Abu Dhabi, UAE' },
  { period: '2006–present', role: 'Medical Director, AL-JOOD Specialized Ayurvedic Centre, Muscat, Oman' },
  { period: '2007–2011', role: 'Director R&D, IPCA Traditional Remedies Pvt. Ltd., Mumbai' },
  { period: '2010–2013', role: 'Consultant in Ayurveda, Dharmshila Cancer Hospital, New Delhi' },
  { period: '2014–present', role: 'Member, Expert Advisory Committee, Ayurvedic & Unani Tibia College, Delhi' },
];

const memberships = [
  { year: '2001–present', body: 'Life Member, Indian Co-operation Oncology Network (ICON) & Head, Subcommittee (Ayurveda)' },
  { year: '2007–present', body: 'Member, International Headache Society, United Kingdom' },
];

export default function Founder({ hideBanner }) {
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
    <section id="founder" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-800" />
      {/* decorative */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        {!hideBanner && (
          <div className="text-center mb-16">
            <p className="section-subtitle reveal">Leadership</p>
            <h2 className="section-title reveal">Meet the <span className="gradient-text">Founder</span></h2>
            <div className="divider-gold reveal" />
          </div>
        )}

        {/* Founder Profile */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Left — Profile Card */}
          <div className="lg:col-span-2 reveal-left">
            <div className="glass-card p-8 text-center hover:border-gold-500/50 hover:-translate-y-2 hover:shadow-gold transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/20 transition-all duration-700" />
              <div className="relative z-10">
              {/* Avatar */}
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-700 to-forest-800 border-[5px] border-gold-400/30 flex items-center justify-center shadow-gold overflow-hidden group-hover:border-gold-400/80 transition-all duration-500">
                  <img
                    src="/Vd BP.webp"
                    alt="Vaidya Balendu Prakash"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML += `<span class="font-serif text-6xl font-bold text-gold-400">VB</span>`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gold-400 rounded-full p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Award size={20} className="text-forest-900" />
                </div>
              </div>

              <h3 className="font-serif text-3xl font-bold text-white mb-2">Vaidya Balendu Prakash</h3>
              <p className="text-emerald-400 text-sm font-display tracking-wider uppercase mb-2">Padma Shri (1999)</p>
              <p className="text-gray-300 text-sm mb-6">Date of Birth: 14 March 1959</p>

              <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent mb-6" />

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <BookOpen size={16} className="text-emerald-400" />
                  </div>
                  <span className="text-gray-300 text-sm mt-1">300+ lectures delivered across India</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <FlaskConical size={16} className="text-emerald-400" />
                  </div>
                  <span className="text-gray-300 text-sm mt-1">Specialist in Rasa Shastra — classical Ayurvedic metallurgy</span>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-xl bg-gradient-to-br from-gold-500/10 to-gold-900/10 border border-gold-500/20 group-hover:border-gold-500/40 transition-colors duration-500">
                <p className="text-gold-300 text-xs font-display tracking-wider uppercase mb-2">ResearchGate Profile</p>
                <a
                  href="https://www.researchgate.net/profile/Vaidya-Prakash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors break-all flex items-center justify-center gap-2"
                >
                  <Globe size={14} /> researchgate.net/profile/Vaidya-Prakash
                </a>
              </div>
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="lg:col-span-3 reveal-right">
            <div className="mb-10 p-8 glass-card border-none bg-white/5 hover:bg-white/10 transition-colors duration-500">
              <h3 className="font-serif text-3xl font-bold text-white mb-6">
                A Legacy Built on <span className="gradient-text">Science & Tradition</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5 text-lg">
                Born into a family of a Rasa Vaidya in Dehradun, Vaidya Balendu Prakash practises one of the eight classical forms
                of Ayurveda — <span className="text-emerald-400 font-semibold">Rasa Shastra</span>. During his nearly four decades of
                clinical experience, Prakash has conceptualized and developed research-based products, all grounded in classical
                Ayurvedic texts, including innovations developed by his father, Vaidya Chandra Prakash.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                His innovative treatment protocols for diseases like Chronic Pancreatitis, Anaemia, Migraine, Acute Promyelocytic
                Leukaemia (APML), and Childhood Asthma have benefited thousands of patients globally. He has also pioneered a
                high-altitude medicinal plant nursery and engaged local farmers in conserving endangered medicinal plants in Uttarakhand.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Awarded the prestigious <span className="text-gold-400 font-semibold">Padma Shri in 1999</span> by the President of
                India, Vaidya Balendu Prakash stands as one of the most decorated and scientifically credible Ayurvedic practitioners
                in the country, with collaborations spanning AIIMS New Delhi, IISc Bengaluru, CCRAS and leading hospitals worldwide.
              </p>
            </div>

            {/* Positions Timeline */}
            <div className="glass-card-dark p-8 relative overflow-hidden group hover:border-emerald-500/40 hover:shadow-glow transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative z-10">
                <h4 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-inner">
                    <GraduationCap size={20} />
                  </div>
                  Positions Held
                </h4>
              <div className="relative pl-8">
                {positions.slice(0, 6).map((pos, i) => (
                  <div key={i} className="timeline-item relative mb-4 last:mb-0">
                    <p className="text-gold-400 text-xs font-display font-semibold tracking-wider mb-0.5">{pos.period}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{pos.role}</p>
                  </div>
                ))}
              </div>
                <button
                  className="mt-6 text-emerald-400 text-sm hover:text-emerald-300 transition-colors flex items-center gap-2 font-medium bg-emerald-500/10 px-4 py-2 rounded-lg hover:bg-emerald-500/20"
                  onClick={(e) => {
                    const container = e.target.closest('.glass-card-dark').querySelector('.extra-positions');
                    container.classList.toggle('hidden');
                    e.target.innerHTML = container.classList.contains('hidden') ? '+ View more positions' : '− Show less';
                  }}
                >
                  + View more positions
                </button>
                <div className="extra-positions hidden mt-6 relative pl-8">
                  {positions.slice(6).map((pos, i) => (
                    <div key={i} className="timeline-item relative mb-5 last:mb-0">
                      <p className="text-gold-400 text-xs font-display font-semibold tracking-wider mb-1">{pos.period}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{pos.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="reveal">
          <h3 className="font-serif text-3xl font-bold text-white mb-10 text-center">Professional <span className="gradient-text">Memberships</span></h3>
          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((m, i) => (
              <div key={i} className="glass-card p-6 flex items-start gap-5 hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-gold transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300 shadow-inner flex-shrink-0 relative z-10">
                  <Star size={20} />
                </div>
                <div className="relative z-10 pt-1">
                  <p className="text-gold-400 text-xs font-display font-semibold tracking-wider mb-2">{m.year}</p>
                  <p className="text-gray-200 text-sm leading-relaxed font-medium">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

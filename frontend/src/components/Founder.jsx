import React, { useEffect, useRef } from 'react';
import { Award, MapPin, Globe, BookOpen, FlaskConical, GraduationCap, Star } from 'lucide-react';

const positions = [
  { period: '1985–present', role: 'Ayurvedic Physician (Private Practice)' },
  { period: '1988–present', role: 'Founder & Medical Director, VCPCRF (Accredited SIRO)' },
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
            <div className="glass-card p-8 text-center hover:border-gold-500/30 transition-all duration-500">
              {/* Avatar */}
              <div className="w-36 h-36 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-700 to-forest-800 border-4 border-gold-400/50 flex items-center justify-center shadow-gold overflow-hidden">
                  <img
                    src="/Vd BP.webp"
                    alt="Vaidya Balendu Prakash"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML += `<span class="font-serif text-5xl font-bold text-gold-400">VB</span>`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gold-400 rounded-full p-2">
                  <Award size={16} className="text-forest-900" />
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-1">Vaidya Balendu Prakash</h3>
              <p className="text-emerald-400 text-sm font-display tracking-wider uppercase mb-1">Padma Shri (1999)</p>
              <p className="text-gray-400 text-sm mb-6">Date of Birth: 14 March 1959</p>

              <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent mb-6" />

              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Prakash Villa, NH 74, Danpur Area, Rudrapur, Uttarakhand</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">300+ international trips across the globe</span>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">200+ lectures delivered across India</span>
                </div>
                <div className="flex items-start gap-3">
                  <FlaskConical size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Specialist in Rasa Shastra — classical Ayurvedic metallurgy</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20">
                <p className="text-gold-300 text-xs font-display tracking-wider uppercase mb-1">ResearchGate Profile</p>
                <a
                  href="https://www.researchgate.net/profile/Vaidya-Prakash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors break-all"
                >
                  researchgate.net/profile/Vaidya-Prakash
                </a>
              </div>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="lg:col-span-3 reveal-right">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                A Legacy Built on <span className="gradient-text">Science & Tradition</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
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
            <div className="glass-card-dark p-6">
              <h4 className="font-serif text-lg font-bold text-white mb-5 flex items-center gap-2">
                <GraduationCap size={20} className="text-emerald-400" />
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
                className="mt-4 text-emerald-400 text-sm hover:text-emerald-300 transition-colors flex items-center gap-1 font-medium"
                onClick={(e) => {
                  const container = e.target.closest('.glass-card-dark').querySelector('.extra-positions');
                  container.classList.toggle('hidden');
                  e.target.textContent = container.classList.contains('hidden') ? '+ View more positions' : '− Show less';
                }}
              >
                + View more positions
              </button>
              <div className="extra-positions hidden mt-4 relative pl-8">
                {positions.slice(6).map((pos, i) => (
                  <div key={i} className="timeline-item relative mb-4 last:mb-0">
                    <p className="text-gold-400 text-xs font-display font-semibold tracking-wider mb-0.5">{pos.period}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{pos.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="reveal">
          <h3 className="font-serif text-2xl font-bold text-white mb-6 text-center">Professional <span className="gradient-text">Memberships</span></h3>
          <div className="grid md:grid-cols-2 gap-4">
            {memberships.map((m, i) => (
              <div key={i} className="glass-card p-5 flex items-start gap-4 hover:border-gold-500/30 transition-all duration-300">
                <Star size={16} className="text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gold-400 text-xs font-display font-semibold tracking-wider mb-1">{m.year}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

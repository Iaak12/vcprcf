import React, { useEffect, useRef, useState } from 'react';
import { Microscope, Heart, Brain, Wind, Droplets, Leaf, ChevronRight, FlaskConical } from 'lucide-react';

const areas = [
  {
    icon: <Microscope size={32} />,
    color: 'emerald',
    tag: 'APML & Haematology',
    title: 'Acute Promyelocytic Leukemia',
    short: 'Pioneering metal-based Ayurvedic formulations for a fatal blood cancer with documented 37-year survival.',
    details: [
      'CCRAS Monograph on metal-based formulations in APML patients',
      'Collaborative study at AIIMS with Indian Rotary Cancer Hospital (1997–2000)',
      'US and European patent accorded for the innovation',
      'Ongoing CCRAS-supported development and validation project (2019–present)',
      'Publications on APML and AML with long-term survival outcomes up to 37 years',
      '11 patients successfully treated in proof-of-concept study',
    ],
    period: '1997 – Present',
    status: 'Active',
  },
  {
    icon: <Heart size={32} />,
    color: 'gold',
    tag: 'Flagship Programme',
    title: 'Chronic Pancreatitis',
    short: 'First-ever evidence for sustainable treatment of a fatal disease with no known cure worldwide.',
    details: [
      '2700+ patient enrolments with long-term follow-up data',
      'Clinical evaluation across recurrent acute, chronic and hereditary pancreatitis',
      'Experimental studies in animal models (L-Arginine induced)',
      'Analytical characterization of Ayurvedic mineral complexes',
      'Studies on inflammatory markers and CA19-9 reduction',
      'Indian Patent granted in 2024 (PCT application no. 3373/DEL/2014)',
      'Funded under Mission Nobel Prize, Govt. of Uttarakhand',
    ],
    period: '1997 – Present',
    status: 'Active',
  },
  {
    icon: <Brain size={32} />,
    color: 'emerald',
    tag: 'Neurology',
    title: 'Migraine Management',
    short: 'One of the largest Ayurvedic observational programmes for migraine — proven significantly more effective than modern medicine.',
    details: [
      'Multi-centric observational studies across leading institutions',
      'Randomized Controlled Trial with AIIMS New Delhi (April 2010 – Aug 2016)',
      'Three published papers in Cephalalgia, Headache & other journals',
      'I-3 CAP project conceptualized at Dhanwantri Ayurvedic College, Chandigarh',
      'Acute and sub-acute toxicity safety studies',
      'Refractory and chronic migraine protocol validated (RCT, 2021)',
    ],
    period: '2002 – Present',
    status: 'Active',
  },
  {
    icon: <Wind size={32} />,
    color: 'gold',
    tag: 'Immunology',
    title: 'Allergic Rhinitis',
    short: 'IMMBO — 4× more effective, 4× fewer side-effects than available allopathic medicines.',
    details: [
      'Herbo-mineral formulation IMMBO developed and clinically validated',
      'Randomized controlled clinical trial (GSVM Medical College, Kanpur)',
      'Immunomodulatory, anti-inflammatory and anti-allergic evaluations',
      'Open Label RCT published in Cureus (Oct 2023)',
      'Adopted by a leading pharmaceutical company of India',
      'UP State Level Symposium on IMMBO (2026)',
    ],
    period: '1995 – Present',
    status: 'Commercializing',
  },
  {
    icon: <Droplets size={32} />,
    color: 'emerald',
    tag: 'Public Health',
    title: 'Nutritional Anaemia',
    short: 'Non-iron Ayurvedic formulation for nutritional anaemia included in Technology Vision 2035.',
    details: [
      'Controlled studies with state and central government agencies',
      'ICMR recommended multi-centre study (August 2016)',
      'Included in Technology Vision 2035 for improving Nutritional Anaemia',
      'Three published papers in international journals',
      'Community-based studies among women and adolescents',
      'Integration with Iron Folic Acid supplementation protocols',
    ],
    period: '2000 – 2016',
    status: 'Completed',
  },
  {
    icon: <Leaf size={32} />,
    color: 'gold',
    tag: 'Rasa Shastra',
    title: 'Ayurvedic Pharmaceutics',
    short: 'Scientific standardization and characterization of Rasa Aushadhis — classical metal-based formulations.',
    details: [
      'Mandoor Bhasma standardization for industrial production',
      'Toxicity and safety evaluation of Rasa Aushadhis (OECD parameters)',
      'Characterization with IISc Bengaluru — XRD, particle analysis',
      'Rigaku Benchtop XRD system (₹57L) installed via CSR in 2025',
      'Development of Prak-20 with strongest hepato-protective effect',
      'SOPs for quality preparation of Ayurvedic formulations',
    ],
    period: '1996 – Present',
    status: 'Active',
  },
];

const statusColors = {
  Active: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Completed: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
  Commercializing: 'bg-gold-500/20 text-gold-300 border-gold-500/30',
};

export default function Research({ hideBanner }) {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(null);

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
    <section id="research" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800 to-forest-900" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        {!hideBanner && (
          <div className="text-center mb-16">
            <p className="section-subtitle reveal">Scientific Work</p>
            <h2 className="section-title reveal">Major <span className="gradient-text">Research Areas</span></h2>
            <div className="divider-gold reveal" />
            <p className="text-gray-300 max-w-2xl mx-auto text-lg reveal">
              Three decades of evidence-based research across six critical disease domains, combining Ayurvedic wisdom with modern scientific methodologies.
            </p>
          </div>
        )}

        {/* Research Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {areas.map((area, i) => {
            const isExpanded = expanded === i;
            const colorMap = {
              emerald: { icon: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', hover: 'hover:border-emerald-500/40' },
              gold: { icon: 'bg-gold-500/10 text-gold-400 border-gold-500/20', hover: 'hover:border-gold-500/40' },
            };
            const c = colorMap[area.color];
            return (
              <div
                key={i}
                className={`glass-card p-6 reveal ${c.hover} transition-all duration-500 cursor-pointer group`}
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                onClick={() => setExpanded(isExpanded ? null : i)}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${c.icon} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`text-xs px-3 py-1 rounded-full border font-display font-semibold tracking-wider uppercase ${statusColors[area.status]}`}>
                      {area.status}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 font-display tracking-widest uppercase mb-1">{area.tag}</p>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{area.short}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-display">{area.period}</span>
                  <button className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                    area.color === 'emerald' ? 'text-emerald-400' : 'text-gold-400'
                  }`}>
                    {isExpanded ? 'Show Less' : 'Key Outputs'}
                    <ChevronRight size={14} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                </div>

                {/* Expanded Details */}
                <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-80 mt-4' : 'max-h-0'}`}>
                  <div className="border-t border-white/10 pt-4">
                    <ul className="space-y-2">
                      {area.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                          <FlaskConical size={13} className={`mt-0.5 flex-shrink-0 ${area.color === 'emerald' ? 'text-emerald-400' : 'text-gold-400'}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Projects Banner */}
        <div className="mt-16 glass-card-dark p-8 md:p-10 reveal">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <FlaskConical size={32} />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl font-bold text-white mb-2">Ongoing Research Projects (2025 onwards)</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20">
                  <p className="text-emerald-400 text-xs font-display font-semibold tracking-wider uppercase mb-2">UPES Collaboration</p>
                  <p className="text-gray-300 text-sm">Comprehensive Investigation of AMAR Formulation for Pancreatitis — analytical characterization, optimization & experimental validation.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-gold-500/20">
                  <p className="text-gold-400 text-xs font-display font-semibold tracking-wider uppercase mb-2">CCRAS Supported (2019–present)</p>
                  <p className="text-gray-300 text-sm">Development of Metal-Based Formulation for Acute Promyelocytic Leukemia (APML) — building on pioneering clinical evidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

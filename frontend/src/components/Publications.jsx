import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, ExternalLink, Filter } from 'lucide-react';

const publications = [
  { year: '2024', title: 'Observational Research on the Effect of an Ayurvedic Treatment Protocol in Patients of Hereditary Pancreatitis', journal: 'JAIM', authors: 'Prakash VB, Prakash S, Negi N, Sati ST', tag: 'Pancreatitis' },
  { year: '2023', title: 'Proof of Efficacy Study to Evaluate an Ayurvedic Formulation in the Treatment of Allergic Rhinitis: An Open Label Randomized Controlled Clinical Trial', journal: 'Cureus, 15(10): e46663', authors: 'Prakash VB, Rao YK, Prakash S, et al.', tag: 'Rhinitis' },
  { year: '2023', title: 'Ayurvedic Treatment Protocol for Hereditary Pancreatitis: A Case Report Demonstrating Disease Arrestation', journal: 'Cureus, 15(8): e42876', authors: 'Prakash VB, Prakash S, Negi N, Sati ST', tag: 'Pancreatitis' },
  { year: '2023', title: 'Significant Reduction of Carbohydrate 19-9 Antigen Levels in a Patient of Acute on Chronic Pancreatitis through Ayurvedic Treatment Protocol', journal: 'IJSR, 12(7):235-239', authors: 'Prakash VB, Prakash S, Negi N, Sati ST', tag: 'Pancreatitis' },
  { year: '2021', title: 'Randomized Controlled Study to Evaluate Prophylactic Properties of Ayurvedic Treatment Protocol in Refractory and Chronic Migraine', journal: 'Int J Inn Res Med Sci, 6(04):259-263', authors: 'Prakash VB, Chandurkar N, Prakash VS, Sharma S, Tiwari S', tag: 'Migraine' },
  { year: '2021', title: 'Symptom-free status after prolonged suffering with refractory chronic migraine: A case report', journal: 'J Ayurveda Case Rep, 4:100-4', authors: 'Prakash VB, Ramachandani GD, Prakash VS, Sharma S, Tiwari S', tag: 'Migraine' },
  { year: '2020', title: 'Acute Promyelocytic Leukemia: 37 years long ongoing survival in a de novo patient with Metal based Ayurvedic Treatment', journal: 'Asian J Oncol', authors: 'Prakash VB et al.', tag: 'APML' },
  { year: '2020', title: 'Transformation of Copper into therapeutic mineral complex following principles of Rasa Shastra', journal: 'Annals Ayurvedic Med, 9(3)', authors: 'Prakash VB, Prakash S, Sharma S, Tiwari S', tag: 'Rasa Shastra' },
  { year: '2020', title: 'CA19-9 Lowering Effect of Ayurvedic Mineral Complex in the Patients of Chronic Pancreatitis', journal: 'EC Gastroenterology and Digestive System, 7.1: 01-05', authors: 'Prakash VB, Prakash S, Sharma S, Tiwari S, Jaryal VP', tag: 'Pancreatitis' },
  { year: '2019', title: 'Remission in a Relapse Case of Acute Promyelocytic Leukaemia for Twenty-two years using Metal Based Ayurvedic Treatment: A Case Report', journal: 'J Ayurveda Case Reports, 2(2), 3-8', authors: 'Balendu Prakash, Shikha Prakash, Shakshi Sharma, Sneha Tiwari', tag: 'APML' },
  { year: '2019', title: 'Anti-Inflammatory Properties of a Processed Copper Complex in L-Arginine Induced Pancreatitis', journal: 'EC Gastroenterology and Digestive System, 6.7: 519-524', authors: 'Prakash VB, Tiwari S, Prakash S, Sharma S', tag: 'Pancreatitis' },
  { year: '2019', title: 'Changing Demography of Pancreatitis Patients in India – A Hospital based Study', journal: 'Acta Scientific Gastrointestinal Disorders, 2.7: 08-11', authors: 'Prakash VB et al.', tag: 'Pancreatitis' },
  { year: '2018', title: 'Impact evaluation of Ayurvedic Treatment Protocol on three hundred nineteen cases of different variants of Pancreatitis', journal: 'Pancreatic Disorders & Therapy, 8:2', authors: 'Prakash VB, Prakash S, Sharma S, Tiwari S', tag: 'Pancreatitis' },
  { year: '2017', title: 'Relevance of metal based Ayurvedic formulations in the management of recurrent acute/chronic pancreatitis', journal: 'TANG Humanitas Medicine, 7(2)/e9', authors: 'Vaidya Balendu Prakash et al.', tag: 'Pancreatitis' },
  { year: '2016', title: 'Integration of Ayurvedic Formulations with Iron Folic Acid in the Treatment of Nutritional Anaemia Among School Going Adolescents', journal: 'TANG Humanitas Medicine, 6(1)/e5', authors: 'Vaidya Balendu Prakash et al.', tag: 'Anaemia' },
  { year: '2013', title: 'Growing up with Mercury in an Ayurvedic Family Tradition in Northern India', journal: 'Asian Medicine, 8: 211-228', authors: 'Prakash VB', tag: 'Rasa Shastra' },
  { year: '2011', title: 'Treatment of Relapsed Undifferentiated Acute Myeloid Leukaemia (AML-M0) with Ayurvedic Therapy', journal: 'Int J Ayurveda Research, 2(1): 56-59', authors: 'Prakash VB', tag: 'APML' },
  { year: '2010', title: 'Herbo-mineral Ayurvedic Treatment in a High Risk Acute Promyelocytic Leukaemia Patient With Second Relapse: 12 years follow up', journal: 'J Ayurveda & Integrative Medicine, 1(3): 215-218', authors: 'Prakash BV, Parikh PM, Pal SK', tag: 'APML' },
  { year: '2010', title: 'Sustainable Effect of Ayurvedic Formulation in the Treatment of Nutritional Anaemia in Adolescence Students', journal: 'J Alternative and Complementary Medicine, 16(2): 205-211', authors: 'Prakash VB, Prakash S, Sharma R, Pal SK', tag: 'Anaemia' },
  { year: '2010', title: 'Response to Ayurvedic Therapy in the Treatment of Migraine Without Aura', journal: 'Int J Ayurveda Research, 1(1): 30-36', authors: 'Prakash Balendu Vaidya, Babu SR Vaidya, Suresh Kumar K Vaidya', tag: 'Migraine' },
  { year: '2006', title: 'Observational Study of Ayurvedic Treatment on Migraine Without Aura', journal: 'CEPHALALGIA, 26(11): 1317', authors: 'Prakash VB, Pareek A, Narayan JP', tag: 'Migraine' },
  { year: '2000', title: 'Ayurvedic Preparation in the Treatment of Nutritional Anaemia', journal: 'Indian Journal of Hematology & Blood Transfusion, 18(4): 79-83', authors: 'Prakash VB, Pandey S, Singh S', tag: 'Anaemia' },
];

const tags = ['All', 'Pancreatitis', 'APML', 'Migraine', 'Anaemia', 'Rhinitis', 'Rasa Shastra'];

const tagColors = {
  'Pancreatitis': 'bg-emerald-500/20 text-emerald-300',
  'APML': 'bg-red-500/20 text-red-300',
  'Migraine': 'bg-purple-500/20 text-purple-300',
  'Anaemia': 'bg-blue-500/20 text-blue-300',
  'Rhinitis': 'bg-cyan-500/20 text-cyan-300',
  'Rasa Shastra': 'bg-gold-500/20 text-gold-300',
};

export default function Publications({ hideBanner }) {
  const ref = useRef(null);
  const [activeTag, setActiveTag] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeTag === 'All' ? publications : publications.filter(p => p.tag === activeTag);
  const displayed = showAll ? filtered : filtered.slice(0, 8);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="publications" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800 to-forest-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        {!hideBanner && (
          <div className="text-center mb-12">
            <p className="section-subtitle reveal">Research Output</p>
            <h2 className="section-title reveal">Publications & <span className="gradient-text">Patents</span></h2>
            <div className="divider-gold reveal" />
            <p className="text-gray-300 max-w-2xl mx-auto reveal">
              40+ peer-reviewed publications in national and international journals. 3 patents granted and filed on Ayurvedic innovations.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 reveal">
          {[
            { n: '40+', l: 'Total Publications' },
            { n: '3', l: 'Patents' },
            { n: '36', l: 'Journal Papers' },
            { n: '2024', l: 'Latest Patent' },
          ].map((s, i) => (
            <div key={i} className="glass-card p-5 text-center hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text-gold font-display mb-1">{s.n}</div>
              <div className="text-gray-400 text-xs font-display uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 reveal">
          <Filter size={16} className="text-gray-400 mt-2.5 mr-1" />
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => { setActiveTag(tag); setShowAll(false); }}
              className={`px-4 py-1.5 rounded-full text-xs font-display font-semibold tracking-wider uppercase transition-all duration-300 border ${
                activeTag === tag
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'border-white/10 text-gray-400 hover:border-emerald-500/40 hover:text-emerald-400 bg-white/3'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-3 mb-8">
          {displayed.map((pub, i) => (
            <div
              key={i}
              className="glass-card p-5 hover:border-emerald-500/30 transition-all duration-300 group reveal"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:bg-emerald-800/50 transition-colors">
                  <BookOpen size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gold-400 font-display">{pub.year}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-display font-semibold ${tagColors[pub.tag] || 'bg-gray-500/20 text-gray-300'}`}>
                      {pub.tag}
                    </span>
                  </div>
                  <p className="text-white text-sm font-medium leading-relaxed mb-1 group-hover:text-emerald-100 transition-colors">
                    {pub.title}
                  </p>
                  <p className="text-gray-500 text-xs">{pub.authors}</p>
                  <p className="text-emerald-600 text-xs mt-0.5 italic">{pub.journal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length > 8 && (
          <div className="text-center reveal">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline text-sm py-2.5"
            >
              {showAll ? 'Show Less' : `View All ${filtered.length} Publications`}
            </button>
          </div>
        )}

        {/* Patents */}
        <div className="mt-16 reveal">
          <h3 className="font-serif text-2xl font-bold text-white mb-6 text-center">Patents & <span className="gradient-text">Intellectual Property</span></h3>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'US Patent', detail: 'Metal-based Ayurvedic formulation for Acute Promyelocytic Leukemia (APML)', status: 'Granted', color: 'emerald' },
              { title: 'European Patent', detail: 'Metal-based Ayurvedic formulation for Acute Promyelocytic Leukemia (APML)', status: 'Granted', color: 'emerald' },
              { title: 'Indian Patent (2024)', detail: 'Ayurvedic Treatment Protocol for Chronic Pancreatitis — PCT application no. 3373/DEL/2014', status: 'Granted', color: 'gold' },
            ].map((p, i) => (
              <div key={i} className={`glass-card p-6 hover:border-${p.color}-500/40 transition-all duration-300 hover:-translate-y-1`}>
                <div className={`text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 ${
                  p.color === 'gold' ? 'bg-gold-500/20 text-gold-300' : 'bg-emerald-500/20 text-emerald-300'
                }`}>
                  {p.status}
                </div>
                <h4 className="font-serif font-bold text-white mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

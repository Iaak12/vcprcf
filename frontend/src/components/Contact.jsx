import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin size={22} />,
    label: 'Address',
    lines: ['Prakash Villa, Beside Rave Cinemas, NH 74,', 'Danpur Area, Rudrapur, Uttarakhand – 263153'],
  },
  {
    icon: <Phone size={22} />,
    label: 'Mobile',
    lines: ['+91 98370 28544'],
    href: 'tel:+919837028544',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email (Personal)',
    lines: ['balenduprakash@gmail.com'],
    href: 'mailto:balenduprakash@gmail.com',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email (Foundation)',
    lines: ['vcpcrf@gmail.com'],
    href: 'mailto:vcpcrf@gmail.com',
  },
];

export default function Contact({ hideBanner }) {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-800 to-forest-900" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        {/* Header */}
        {!hideBanner && (
          <div className="text-center mb-16">
            <p className="section-subtitle reveal">Get in Touch</p>
            <h2 className="section-title reveal">Contact <span className="gradient-text">Us</span></h2>
            <div className="divider-gold reveal" />
          </div>
        )}
        <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 reveal">
          For research collaborations, patient consultations, media inquiries or general information, we'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div className="reveal-left">
            <div className="space-y-5 mb-10">
              {contactInfo.map((info, i) => (
                <div key={i} className="glass-card p-5 flex items-start gap-4 hover:border-emerald-500/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-display uppercase tracking-widest mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white hover:text-emerald-400 transition-colors font-medium">
                        {info.lines[0]}
                      </a>
                    ) : (
                      info.lines.map((line, j) => (
                        <p key={j} className="text-white font-medium text-sm leading-relaxed">{line}</p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Info */}
            <div className="glass-card-dark p-6">
              <h4 className="font-serif text-lg font-bold text-white mb-4">Foundation Details</h4>
              <div className="space-y-2">
                {[
                  { label: 'NGO Darpan Unique ID', value: 'UA/2017/0115005' },
                  { label: 'Registration No.', value: '6759/4' },
                  { label: 'PAN', value: 'AAATV1805G' },
                  { label: 'SIRO Accreditation', value: 'Dept. of Scientific Industrial Research, Govt. of India' },
                  { label: 'Established', value: '1988, Dehradun, Uttarakhand' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-500 text-xs font-display tracking-wider min-w-[140px]">{item.label}</span>
                    <span className="text-emerald-300 text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* ResearchGate */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <a
                  href="https://www.researchgate.net/profile/Vaidya-Prakash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium group"
                >
                  <Globe size={16} />
                  <span>ResearchGate Profile</span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="reveal-right">
            <div className="glass-card p-8 h-full">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mb-6 animate-pulse-slow">
                    <CheckCircle size={40} className="text-emerald-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thank you for reaching out. We will get back to you at the earliest.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn-primary mt-8 text-sm py-2.5"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-xl font-bold text-white mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-xs font-display uppercase tracking-wider mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs font-display uppercase tracking-wider mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-display uppercase tracking-wider mb-2">Subject *</label>
                      <select
                        required
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-all duration-300 appearance-none"
                      >
                        <option value="" className="bg-forest-900">Select a Subject</option>
                        <option value="research" className="bg-forest-900">Research Collaboration</option>
                        <option value="patient" className="bg-forest-900">Patient Consultation</option>
                        <option value="media" className="bg-forest-900">Media Inquiry</option>
                        <option value="donation" className="bg-forest-900">Donation / CSR</option>
                        <option value="other" className="bg-forest-900">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-display uppercase tracking-wider mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Write your message here..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:bg-white/8 transition-all duration-300 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

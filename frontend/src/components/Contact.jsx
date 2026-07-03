import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle, ShieldCheck } from 'lucide-react';

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
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaChecking, setCaptchaChecking] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCaptcha = () => {
    if (captchaVerified || captchaChecking) return;
    setCaptchaChecking(true);
    setTimeout(() => {
      setCaptchaChecking(false);
      setCaptchaVerified(true);
    }, 1200);
  };

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaVerified) return;
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: form.name,
          email: form.email,
          subject: `VCPCRF Contact: ${form.subject}`,
          message: form.message,
          from_name: 'VCPCRF Website',
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setCaptchaVerified(false);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
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
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, i) => (
                <div key={i} className="glass-card p-6 flex items-start gap-5 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-900/30 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-inner group-hover:shadow-glow relative z-10">
                    {info.icon}
                  </div>
                  <div className="relative z-10 pt-1 flex-1">
                    <p className="text-gray-400 text-xs font-display uppercase tracking-widest mb-1.5 font-medium">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white hover:text-emerald-300 transition-colors font-medium text-base">
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
            <div className="glass-card-dark p-8 relative overflow-hidden group/legal hover:border-gold-500/30 hover:shadow-gold transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/5 to-gold-500/0 translate-x-[-100%] group-hover/legal:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative z-10">
                <h4 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <ShieldCheck size={22} className="text-gold-400" /> Foundation Details
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'NGO Darpan ID', value: 'UA/2017/0115005' },
                    { label: 'Registration No.', value: '6759/4' },
                    { label: 'PAN', value: 'AAATV1805G' },
                    { label: 'SIRO Accreditation', value: 'Dept. of Scientific Industrial Research, Govt. of India' },
                    { label: 'Established', value: '1988, Dehradun, Uttarakhand' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-3 -mx-3 rounded-lg transition-colors">
                      <span className="text-gray-400 text-xs font-display tracking-wider min-w-[140px] pt-0.5">{item.label}</span>
                      <span className="text-emerald-300 text-sm font-medium leading-relaxed">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* ResearchGate */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href="https://www.researchgate.net/profile/Vaidya-Prakash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm font-bold tracking-wide uppercase bg-gold-500/10 hover:bg-gold-500/20 py-3 rounded-xl border border-gold-500/20"
                  >
                    <Globe size={18} />
                    <span>View ResearchGate Profile</span>
                    <span className="text-xs text-gold-500 ml-1">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="reveal-right">
            <div className="glass-card p-8 md:p-10 h-full relative overflow-hidden group/form hover:border-emerald-500/30 hover:shadow-glow transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover/form:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col">
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
                    {/* Custom reCAPTCHA-style checkbox */}
                    <div
                      onClick={handleCaptcha}
                      className="flex items-center justify-between px-4 py-3 rounded-lg border border-white/15 bg-white/5 cursor-pointer hover:bg-white/8 transition-all duration-200 select-none"
                      style={{ minWidth: '280px' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          captchaVerified
                            ? 'bg-emerald-500 border-emerald-500'
                            : captchaChecking
                            ? 'border-emerald-400 bg-transparent'
                            : 'border-gray-500 bg-transparent'
                        }`}>
                          {captchaChecking && !captchaVerified && (
                            <span className="w-3 h-3 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                          )}
                          {captchaVerified && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-gray-300 text-sm">I'm not a robot</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <ShieldCheck size={28} className="text-emerald-500 opacity-70" />
                        <span className="text-gray-600 text-[9px] leading-tight text-center mt-0.5">reCAPTCHA<br/>Privacy - Terms</span>
                      </div>
                    </div>
                    {error && (
                      <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2 px-4">
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading || !captchaVerified}
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
                  {/* Map */}
                  <div className="mt-8 rounded-xl overflow-hidden border border-white/10 h-64 relative group/map hover:border-emerald-500/30 transition-colors">
                    <iframe
                      title="Location Map"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                      loading="lazy"
                      allowFullScreen
                      className="group-hover/map:opacity-90 transition-opacity"
                      src="https://maps.google.com/maps?q=Prakash%20Villa,%20NH%2074,%20Danpur%20Area,%20Rudrapur,%20Uttarakhand&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    />
                  </div>
                </>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

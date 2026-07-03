import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, FlaskConical, Heart, ArrowRight, ChevronRight, Star, Stethoscope, FileText, Plane, Landmark, Trophy, ShieldCheck, Microscope } from 'lucide-react';

const stats = [
  { value: '38+', label: 'Years of Clinical Practice', icon: <Stethoscope size={28} className="text-emerald-400" /> },
  { value: '40+', label: 'Peer-reviewed Publications', icon: <BookOpen size={28} className="text-gold-400" /> },
  { value: '3', label: 'Patents', icon: <ShieldCheck size={28} className="text-emerald-400" /> },
  { value: '1988', label: 'Year Established', icon: <Landmark size={28} className="text-gold-400" /> },
];

const quickLinks = [
  { label: 'About VCPCRF', desc: 'Vision, Mission & Foundation story', href: '/about', color: 'emerald' },
  { label: 'Meet the Founder', desc: 'Padma Shri Vaidya Balendu Prakash', href: '/founder', color: 'gold' },
  { label: 'Research Areas', desc: 'APML, Pancreatitis, Migraine & more', href: '/research', color: 'emerald' },
  { label: 'Publications', desc: '40+ peer-reviewed journal papers', href: '/publications', color: 'gold' },
  { label: 'Achievements', desc: 'Awards, patents & milestones', href: '/achievements', color: 'emerald' },
  { label: 'Collaborations', desc: 'AIIMS, IISc, CCRAS & more', href: '/collaborations', color: 'gold' },
];

const highlights = [
  { icon: <ShieldCheck size={40} className="text-emerald-400" />, title: 'US & European Patent', desc: 'First Ayurvedic formulation for Acute Promyelocytic Leukemia' },
  { icon: <Microscope size={40} className="text-gold-400" />, title: 'AIIMS Collaboration', desc: 'RCT proving Ayurvedic migraine protocol superior to modern medicine' },
  { icon: <FileText size={40} className="text-emerald-400" />, title: 'Indian Patent 2024', desc: 'Pancreatitis treatment — disease with no known cure worldwide' },
];

export default function HomePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5, dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${p.opacity})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    const r = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', r);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', r); };
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800/90 to-forest-900" />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-emerald-500/5 animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-emerald-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
        </div>

        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-36 h-36 rounded-full border-4 border-emerald-500/50 overflow-hidden shadow-2xl shadow-emerald-500/20 animate-float bg-white">
                <img src="/logo.jpeg" alt="VCPCRF" className="w-full h-full object-contain p-2"
                  onError={(e) => { e.target.onerror = null; e.target.style.display='none'; e.target.parentNode.innerHTML=`<div class="w-full h-full flex items-center justify-center bg-forest-800 text-5xl font-bold text-emerald-400 font-serif">V</div>`; }} />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-gold-400/20 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight text-shadow-lg">
            Vaidya Chandra Prakash
            <span className="block gradient-text mt-2">Cancer Research Foundation</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-3 font-light leading-relaxed max-w-3xl mx-auto">
            <span className="shimmer-text font-semibold">VCPCRF</span> — Bridging the wisdom of Ayurveda with the rigour of modern science since 1988, under{' '}
            <span className="text-gold-300 font-semibold">Padma Shri Vaidya Balendu Prakash</span>.
          </p>
          <p className="text-gray-500 text-sm mb-12 font-display tracking-wider uppercase">Est. 1988 · NGO Darpan: UA/2017/0115005</p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link to="/research" className="btn-primary text-base">Explore Our Research</Link>
            <Link to="/founder" className="btn-outline text-base">Meet the Founder</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center justify-center">
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text-gold font-display">{stat.value}</div>
                <div className="text-gray-400 text-xs font-display uppercase tracking-wide leading-tight mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK NAV CARDS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-forest-900 to-forest-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-emerald-500/30 to-transparent" />
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-subtitle">Explore</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">What We Do</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickLinks.map((link, i) => (
              <Link key={i} to={link.href}
                className={`glass-card p-6 group hover:-translate-y-2 transition-all duration-500 ${
                  link.color === 'emerald' ? 'hover:border-emerald-500/40' : 'hover:border-gold-500/40'
                }`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{link.label}</h3>
                  <ArrowRight size={18} className={`transition-all duration-300 group-hover:translate-x-1 ${link.color === 'emerald' ? 'text-emerald-500' : 'text-gold-500'}`} />
                </div>
                <p className="text-gray-400 text-sm">{link.desc}</p>
                <div className={`h-0.5 w-0 group-hover:w-full mt-4 transition-all duration-500 rounded-full bg-gradient-to-r ${
                  link.color === 'emerald' ? 'from-emerald-500 to-emerald-700' : 'from-gold-400 to-gold-600'
                }`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-forest-900 relative">
        <div className="absolute right-0 top-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
        <div className="container-max relative z-10">
          <div className="text-center mb-12">
            <p className="section-subtitle">Landmark Achievements</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Key <span className="gradient-text">Highlights</span></h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlights.map((h, i) => (
              <div key={i} className="glass-card p-6 text-center hover:border-gold-500/30 hover:-translate-y-2 transition-all duration-500 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{h.icon}</div>
                <h3 className="font-semibold text-white mb-2 font-display">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="glass-card-dark p-8 md:p-12 text-center">
            <p className="text-emerald-400 font-display text-sm tracking-widest uppercase font-semibold mb-3">Three Decades of Evidence-Based Research</p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              Combining Tradition with Technology to <span className="gradient-text">Transform Healthcare</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              From establishing proof of concept in APML to being recognized by ICMR for anaemia research, VCPCRF has consistently produced world-class scientific evidence for Ayurveda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/research" className="btn-primary">View Research Areas</Link>
              <Link to="/contact" className="btn-outline">Collaborate With Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useEffect, useRef } from 'react';
import { ChevronDown, Award, BookOpen, FlaskConical, Heart } from 'lucide-react';

const stats = [
  { value: '38+', label: 'Years of Practice' },
  { value: '40+', label: 'Publications' },
  { value: '3', label: 'Patents Granted' },
  { value: '2700+', label: 'Patients Treated' },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800/90 to-forest-900" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-emerald-600/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-emerald-500/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-emerald-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      </div>

      {/* Content */}
      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-36 h-36 rounded-full border-4 border-emerald-500/50 overflow-hidden shadow-2xl shadow-emerald-500/20 animate-float">
                <img
                  src="/logo.jpeg"
                  alt="VCPCRF Logo"
                  className="w-full h-full object-contain bg-white p-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-forest-800 text-4xl font-bold text-emerald-400 font-serif">V</div>`;
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-gold-400/20 animate-ping" style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white text-shadow-lg">Vaidya Chandra Prakash</span>
            <span className="block gradient-text mt-2">Cancer Research Foundation</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-4 font-light leading-relaxed max-w-3xl mx-auto">
            <span className="shimmer-text font-semibold">VCPCRF</span> — Bridging the wisdom of Ayurveda with the rigour of modern science
            since 1988, under the visionary leadership of{' '}
            <span className="text-gold-300 font-semibold">Padma Shri Vaidya Balendu Prakash</span>.
          </p>

          <p className="text-gray-300 text-sm mb-12 font-display tracking-wider uppercase">
            Est. 1988
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="#research" className="btn-primary text-base">
              Explore Our Research
            </a>
            <a href="#founder" className="btn-outline text-base">
              Meet the Founder
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-emerald group"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text-gold font-display mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-xs font-display uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-emerald-400 opacity-70 hover:opacity-100 transition-opacity">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageBanner({ subtitle, title, highlight, description, breadcrumb }) {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-emerald-500/8 blur-[100px]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-emerald-500/5 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-gold-500/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }} />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mb-6 text-xs text-gray-300 font-display tracking-wider">
          <Link to="/" className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
            <Home size={12} />
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-emerald-400">{breadcrumb || title}</span>
        </div>

        {/* Badge */}
        {subtitle && (
          <p className="section-subtitle mb-3">{subtitle}</p>
        )}

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {title}{' '}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>

        {/* Gold divider */}
        <div className="divider-gold" />

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

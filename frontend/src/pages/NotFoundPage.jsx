import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-800" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="relative z-10 text-center px-6">
        <div className="text-8xl font-bold gradient-text font-display mb-4">404</div>
        <h1 className="font-serif text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's take you back to the VCPCRF homepage.
        </p>
        <Link to="/" className="btn-primary">Go Back Home</Link>
      </div>
    </div>
  );
}

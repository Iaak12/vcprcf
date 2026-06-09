import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FounderPage from './pages/FounderPage';
import ResearchPage from './pages/ResearchPage';
import AchievementsPage from './pages/AchievementsPage';
import PublicationsPage from './pages/PublicationsPage';
import CollaborationsPage from './pages/CollaborationsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-screen bg-forest-900 text-white">
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/collaborations" element={<CollaborationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

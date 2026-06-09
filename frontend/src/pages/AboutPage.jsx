import React from 'react';
import PageBanner from '../components/PageBanner';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        subtitle="Who We Are"
        title="About"
        highlight="VCPCRF"
        breadcrumb="About"
        description="Established in 1988, VCPCRF is India's pioneering independent organization dedicated to scientific validation of Ayurvedic interventions through clinical research, translational studies and community health initiatives."
      />
      <About hideBanner />
    </>
  );
}

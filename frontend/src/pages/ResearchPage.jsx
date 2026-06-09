import React from 'react';
import PageBanner from '../components/PageBanner';
import Research from '../components/Research';

export default function ResearchPage() {
  return (
    <>
      <PageBanner
        subtitle="Scientific Work"
        title="Major"
        highlight="Research Areas"
        breadcrumb="Research"
        description="Three decades of evidence-based research across six critical disease domains — combining Ayurvedic wisdom with modern scientific methodologies to create reproducible clinical evidence."
      />
      <Research hideBanner />
    </>
  );
}

import React from 'react';
import PageBanner from '../components/PageBanner';
import Founder from '../components/Founder';

export default function FounderPage() {
  return (
    <>
      <PageBanner
        subtitle="Leadership"
        title="Meet the"
        highlight="Founder"
        breadcrumb="Founder"
        description="Padma Shri Vaidya Balendu Prakash — a practitioner of Rasa Shastra with nearly four decades of clinical experience, 300+ international trips and groundbreaking Ayurvedic research spanning APML, Pancreatitis, Migraine and more."
      />
      <Founder hideBanner />
    </>
  );
}

import React from 'react';
import PageBanner from '../components/PageBanner';
import Publications from '../components/Publications';

export default function PublicationsPage() {
  return (
    <>
      <PageBanner
        subtitle="Research Output"
        title="Publications &"
        highlight="Patents"
        breadcrumb="Publications"
        description="40+ peer-reviewed publications in national and international journals spanning APML, Pancreatitis, Migraine, Anaemia, Allergic Rhinitis and Rasa Shastra. 3 patents granted including US, European and Indian patents."
      />
      <Publications hideBanner />
    </>
  );
}

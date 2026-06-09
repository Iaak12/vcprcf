import React from 'react';
import PageBanner from '../components/PageBanner';
import Collaborations from '../components/Collaborations';

export default function CollaborationsPage() {
  return (
    <>
      <PageBanner
        subtitle="Partners & Institutions"
        title="Research"
        highlight="Collaborations"
        breadcrumb="Collaborations"
        description="VCPCRF's strength lies in its interdisciplinary partnerships with premier academic, clinical, government and industry partners — including AIIMS, IISc Bengaluru, CCRAS, UPES, GB Pant University and international centres."
      />
      <Collaborations hideBanner />
    </>
  );
}

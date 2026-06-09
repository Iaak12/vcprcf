import React from 'react';
import PageBanner from '../components/PageBanner';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        subtitle="Get In Touch"
        title="Contact"
        highlight="Us"
        breadcrumb="Contact"
        description="For research collaborations, patient consultations, media inquiries, donation or general information — we'd love to hear from you. Reach us at Rudrapur, Uttarakhand or write to us below."
      />
      <Contact hideBanner />
    </>
  );
}

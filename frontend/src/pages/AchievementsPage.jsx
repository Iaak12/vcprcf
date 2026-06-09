import React from 'react';
import PageBanner from '../components/PageBanner';
import Achievements from '../components/Achievements';

export default function AchievementsPage() {
  return (
    <>
      <PageBanner
        subtitle="Honours & Recognition"
        title="Awards &"
        highlight="Achievements"
        breadcrumb="Achievements"
        description="From the Padma Shri awarded by the President of India to US and European patents, VCPCRF and its founder have earned landmark recognition across science, medicine and public health."
      />
      <Achievements hideBanner />
    </>
  );
}

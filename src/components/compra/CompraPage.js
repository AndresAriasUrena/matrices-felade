// components/compra/CompraPage.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import CourseContent from './CourseContent';
import PricingSection from './PricingSection';
import GuaranteeSection from './GuaranteeSection';
import BonusSection from './BonusSection';
import FastActionBonus from './FastActionBonus';
import FaqSection from './FaqSection';
import TestimonialsSection from './TestimonialsSection';
import CallToAction from './CallToAction';

const CompraPage = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <CallToAction text="¡ADQUIERE EL TALLER AHORA!" />
      <CourseContent />
      <PricingSection />
      <GuaranteeSection />
      <CallToAction text="¡ADQUIERE EL TALLER AHORA!" />
      <BonusSection />
      {/* <FastActionBonus /> */}
      <FaqSection />
      <TestimonialsSection />
      <CallToAction text="¡RESERVA TU LUGAR HOY!" />
    </main>
  );
};

export default CompraPage;
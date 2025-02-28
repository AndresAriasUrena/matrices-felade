// src/app/page.js
import HeroSection from '../components/landing/HeroSection';
import BenefitsSection from '../components/landing/BenefitsSection';
import InstructorSection from '../components/landing/InstructorSection';
import OrganizationsSection from '../components/landing/OrganizationsSection';
import SecondFormSection from '../components/landing/SecondFormSection';

export const metadata = {
  title: 'Taller Gratuito: Matrices de Riesgo BC/FT/FPADM',
  description: 'Aprende a diseñar y testear matrices de riesgo de forma real y efectiva en nuestro taller gratuito. Metodologías basadas en ISO 31000 y estándares internacionales.',
  openGraph: {
    title: 'Taller Gratuito: Matrices de Riesgo BC/FT/FPADM | FELADE',
    description: 'Aprende a diseñar y testear matrices de riesgo de forma real y efectiva. 2 clases gratuitas con contenido práctico.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taller de Matrices de Riesgo',
      }
    ],
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <InstructorSection />
      <SecondFormSection />
      <OrganizationsSection />
    </main>
  );
}
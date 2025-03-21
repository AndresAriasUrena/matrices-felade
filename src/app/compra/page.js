// app/compra/page.js
import React from 'react';
import { Metadata } from 'next';
import CompraPage from '../../components/compra/CompraPage';

export const metadata = {
  title: 'Certificación Profesional en Gestión de Riesgos BC/FT/FPADM | FELADE',
  description: 'Adquiere la certificación profesional en gestión de riesgos BC/FT/FPADM y aprende a diseñar matrices de riesgo efectivas.',
  openGraph: {
    title: 'Certificación Profesional en Gestión de Riesgos | FELADE',
    description: 'Formación especializada en prevención de BC/FT/FPADM con certificación internacional.',
    images: [
      {
        url: '/images/certificacion-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Certificación en Matrices de Riesgo',
      }
    ],
  },
};

export default function Page() {
  return <CompraPage />;
}
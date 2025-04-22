// src/components/landing/HeroSection.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-primary-light to-primary py-12 md:py-20 relative overflow-hidden">
      {/* Fondo con overlay azul */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary opacity-70"></div>
        <Image
          src="/images/hero-background.png"
          alt="Fondo"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="mix-blend-overlay"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Logos con línea divisoria vertical */}
        <div className="flex justify-center items-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-end w-1/2 pr-6">
            <Image
              src="/images/logoblanco.png"
              alt="UPAZ"
              width={250}
              height={75}
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          {/* Línea divisoria vertical */}
          <div className="h-16 w-px bg-white bg-opacity-40"></div>
          
          <div className="flex items-center justify-start w-1/2 pl-6">
            <Image
              src="/images/upaz-logo-white.png"
              alt="FELADE"
              width={250}
              height={75}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          {/* Hero Content */}
          <motion.div 
            className="w-full max-w-4xl text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ lineHeight: '1.5' }}>
            Conoce los pilares fundamentales para el diseño real y efectivo de una Matriz de Riesgo LA/FT/FPADM
            </h1>
            {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              El Paso a Paso para diseñar y testear matrices de riesgo de forma real y efectiva
            </h1> */}
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto">
            Aprende de la mano de un experto si su matriz cumple con un estandar funcional para cumplir con la normativa local e internacional
            </h2>
            {/* <h2 className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto">
              Aprende el método <strong>Probado</strong> para diseñar y testear matrices de riesgo de manera práctica y efectiva. Un taller en vivo donde transformarás la teoría en acción con pasos claros y aplicables de inmediato.
            </h2> */}
            <h3 className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto text-gray-200">
              2 clases: 21 y 22 Mayo | 6:00 pm (GTM -5 hora Panamá) <br/> Evento <strong>Online</strong> y <strong>sin costo.</strong> Vía Zoom
            </h3>
            
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
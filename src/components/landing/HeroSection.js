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
        {/* Logos superiores */}
        <div className="flex justify-around items-center mb-12 flex-wrap gap-6">
            <Image
              src="/images/upaz-logo-white.png"
              alt="UPAZ"
              width={200}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          <Image
            src="/images/logoblanco.png"
            alt="FELADE"
            width={200}
            height={60}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="/images/ssnf-logo-white.png"
            alt="Superintendencia de Sujetos No Financieros"
            width={200}
            height={60}
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          {/* Hero Content */}
          <motion.div 
            className="w-full max-w-4xl text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              El Paso a Paso para diseñar y testear matrices de riesgo de forma real y efectiva
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto">
              Aprende el método <strong>Probado</strong> para diseñar y testear matrices de riesgo de manera práctica y efectiva. Un taller en vivo donde transformarás la teoría en acción con pasos claros y aplicables de inmediato.
            </h2>
            
            {/* <div>
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#registro" 
                  className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm font-bold">✓</span>
                  Regístrate Gratis Ahora
                </a>
              </motion.div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
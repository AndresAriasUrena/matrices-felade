// src/components/landing/HeroSection.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-primary-light to-primary py-12 md:py-20 relative overflow-hidden">
      {/* Fondo con overlay azul */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0"></div>
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
        {/* Logo FELADE */}
        <div className="flex justify-start mb-6">
          <Image
            src="/images/logoblanco.png"
            alt="FELADE"
            width={150}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Hero Content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              El Método Probado para Diseñar y Testear Matrices de Riesgo de Forma Real y Efectiva
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-6">
              Únete a nuestro taller gratuito en vivo y aprende técnicas que puedes aplicar de inmediato.
            </h2>
            
            <div className="hidden md:block">
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
            </div>
          </motion.div>
          
          {/* Registration Form */}
          <motion.div 
            className="w-full md:w-5/12 bg-white rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            id="registro"
          >
            <div className="p-6 md:p-8">
              <RegistrationForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
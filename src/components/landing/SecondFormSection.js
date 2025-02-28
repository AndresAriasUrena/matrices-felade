// src/components/landing/SecondFormSection.js
"use client"; // Marcador para componente cliente

import React from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from './RegistrationForm';

const SecondFormSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }} // Animación más lenta
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No Pierdas Esta Oportunidad Única
            </h2>
            
            <p className="text-xl mb-4">
              Las plazas para este taller gratuito son limitadas y se llenan rápidamente.
            </p>
            
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>2 Clases gratuitas con contenido práctico y aplicable</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Acceso a metodologías internacionales de gestión de riesgo</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Contenido exclusivo sobre BC/FT/FPADM</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Sin costo ni compromiso</span>
              </li>
            </ul>
            
            <div className="p-4 bg-secondary-light bg-opacity-20 rounded-lg border border-secondary mb-6">
              <p className="text-lg font-medium">
                "Estas clases gratuitas son solo una muestra del poder transformador de nuestro programa completo de certificación"
              </p>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div 
            className="w-full md:w-5/12 bg-white rounded-xl shadow-2xl text-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }} // Animación más lenta
            viewport={{ once: true, margin: "-50px" }}
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

export default SecondFormSection;
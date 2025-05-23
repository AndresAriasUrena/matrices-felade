// components/compra/CallToAction.js
"use client"; // Marcador para componente cliente

import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = ({ text = '¡ADQUIERE EL TALLER AHORA!', onClick, className = '' }) => {
  const handleClick = () => {
    // Desplazarse al formulario de pago cuando se hace clic
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Ejecutar función onClick adicional si se proporciona
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <section className={`py-12 bg-secondary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.button
            className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 text-xl md:text-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            <span className="flex items-center justify-center">
              <span className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">✓</span>
              {text}
            </span>
          </motion.button>
          
          <div className="mt-4 text-primary-light">
            <p className="flex items-center justify-center">
              <span className="mr-2">⏰</span>
              <span className="font-semibold">La oferta especial termina pronto. ¡No pierdas esta oportunidad!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
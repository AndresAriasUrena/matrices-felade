// components/compra/CallToAction.js
"use client"; // Marcador para componente cliente

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

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
          
          <div className="mt-6 space-y-2">
            <div className="text-primary-light">
              <p className="flex items-center justify-center">
                <span className="mr-2">⏰</span>
                <span className="font-semibold">La oferta especial termina el 20 de junio. ¡No pierdas esta oportunidad!</span>
              </p>
            </div>
            
            {/* Nuevo banner de urgencia */}
            <motion.div 
              className="bg-red-600 text-white rounded-lg p-3 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center">
                <FaCalendarAlt className="mr-2" />
                <span className="font-bold text-sm">FECHA LÍMITE: 20 DE JUNIO</span>
              </div>
              <p className="text-xs mt-1">Después de esta fecha el precio aumentará significativamente</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
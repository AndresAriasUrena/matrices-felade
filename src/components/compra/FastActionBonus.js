// components/compra/FastActionBonus.js
"use client"; // Marcador para componente cliente

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaClock, FaFire } from 'react-icons/fa';

const FastActionBonus = () => {
  const [availablePlaces, setAvailablePlaces] = useState(30);
  
  // Simulación de escasez (en producción, esto debería venir de tu backend)
  useEffect(() => {
    const storedPlaces = localStorage.getItem('availablePlaces');
    
    if (storedPlaces) {
      setAvailablePlaces(parseInt(storedPlaces, 10));
    } else {
      localStorage.setItem('availablePlaces', '30');
    }
    
    // Decrementar aleatoriamente (para efecto de escasez)
    const timer = setTimeout(() => {
      const newPlaces = Math.max(1, availablePlaces - Math.floor(Math.random() * 3));
      setAvailablePlaces(newPlaces);
      localStorage.setItem('availablePlaces', newPlaces.toString());
    }, 30000);
    
    return () => clearTimeout(timer);
  }, [availablePlaces]);

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaClock className="text-secondary text-2xl mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">
              BONO DE ACCIÓN RÁPIDA
            </h2>
            <FaClock className="text-secondary text-2xl ml-2" />
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 rounded-lg p-8 border border-white border-opacity-20">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
            <div className="w-full md:w-1/3">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/bonos/bono_rapido.png"
                  alt="Evaluación Independiente"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                OFERTA EXCLUSIVA: ¡Solo para los primeros 30 registros!
              </h3>
              <p className="text-lg mb-4">
                Las primeras <strong>30 personas</strong> que se inscriban en las próximas 24 horas recibirán 
                <strong> GRATIS</strong> una revisión personalizada por parte del experto del modelo desarrollado durante el taller.
              </p>
              <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
                Valorada en <span className='line-through'>$997</span>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-light bg-opacity-50 rounded-lg p-6 text-center mt-6">
            <div className="flex items-center justify-center mb-2">
              <FaFire className="text-secondary text-xl mr-2" />
              <h4 className="text-xl font-bold">DISPONIBILIDAD LIMITADA</h4>
              <FaFire className="text-secondary text-xl ml-2" />
            </div>
            <p className="mb-4">¡Actúa rápido! Este bono exclusivo tiene disponibilidad limitada</p>
            <div className="inline-block bg-white text-primary rounded-full px-6 py-3 font-bold text-2xl">
              Quedan solo {availablePlaces} plazas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastActionBonus;
// components/compra/GuaranteeSection.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 border-2 border-dashed border-secondary flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-48 h-48">
              {/* Reemplazar con una imagen real de garantía cuando esté disponible */}
              <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center text-white">
                <FaShieldAlt className="text-6xl" />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              GARANTÍA DE SATISFACCIÓN 100%
            </h2>
            <p className="text-gray-700 mb-4">
              Estamos tan seguros de la calidad de nuestra certificación que ofrecemos una 
              garantía de devolución de dinero durante los primeros 14 días. Si por alguna 
              razón no estás satisfecho con el contenido, simplemente solicita un reembolso 
              y te devolveremos el 100% de tu inversión, sin preguntas.
            </p>
            <p className="text-gray-700 font-bold">
              No hay riesgo para ti. Queremos que tengas la tranquilidad de 
              que estás invirtiendo en una certificación que realmente transformará tu capacidad 
              para gestionar riesgos en tu organización.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
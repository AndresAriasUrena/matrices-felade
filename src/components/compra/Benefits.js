// components/compra/Benefits.js
"use client"; // Marcador para componente cliente

import React from 'react';
import { motion } from 'framer-motion';

const BenefitItem = ({ number, text }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
        {number}
      </div>
      <div>
        <p className="text-gray-700"><strong>Beneficio {number}:</strong> {text}</p>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const benefits = [
    "Conocerás los principios fundamentales de la gestión de riesgos y cómo aplicarlos de manera efectiva en tu organización.",
    "Obtendrás herramientas prácticas para diseñar y personalizar matrices de riesgo que se ajusten a las necesidades específicas de tu empresa.",
    "Te mostraré cómo identificar y evaluar riesgos potenciales utilizando metodologías reconocidas y basadas en estándares internacionales.",
    "Tendrás la oportunidad de trabajar en casos de estudio reales, aplicando lo aprendido y fortaleciendo tu capacidad de análisis.",
    "Conocerás estrategias para establecer un enfoque basado en riesgos que priorice tus recursos de manera más eficiente.",
    "Obtendrás acceso a plantillas y recursos adicionales que facilitarán la implementación de matrices de riesgo en tu entorno laboral.",
    "Te mostraré cómo comunicar tus hallazgos y recomendaciones de manera efectiva a diferentes partes interesadas dentro de tu organización.",
    "Aprenderás a diseñar una matriz de riesgo en excel aplicando metodología de gestión de riesgo desde 0.",
    "Aprenderás a utilizar la inteligencia artificial en la gestión de riesgo y a tener un aliado importante en tu gestión de cumplimiento.",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            BENEFICIOS DE TU INFOPRODUCTO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforma tu capacidad para gestionar riesgos con nuestro taller especializado.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} number={index + 1} text={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
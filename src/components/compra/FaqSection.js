// components/compra/FaqSection.js
"use client"; // Marcador para componente cliente

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FaqItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
          isOpen ? 'bg-primary text-white' : 'bg-white text-gray-800'
        }`}
        onClick={toggle}
      >
        <span className="font-medium">{question}</span>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      
      {isOpen && (
        <div className="p-4 bg-white">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openFaqId, setOpenFaqId] = useState(null);
  
  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  const faqs = [
    {
      id: 1,
      question: '¿Qué es el Sistema de Administración de Riesgos BC/FT/FPADM y cómo se aplica en mi organización?',
      answer: 'Es un marco que ayuda a identificar, evaluar y mitigar riesgos de Blanqueo de Capitales y Financiamiento del Terrorismo en tu empresa.'
    },
    {
      id: 2,
      question: '¿Cuáles son las principales señales de alerta de BC/FT que debo tener en cuenta?',
      answer: 'Son patrones de comportamiento inusuales, transacciones sospechosas y cambios repentinos en la actividad del cliente.'
    },
    {
      id: 3,
      question: '¿Cómo puedo personalizar la matriz de riesgo para que se ajuste a las necesidades específicas de mi empresa?',
      answer: 'Te enseñaremos a considerar tus operaciones, clientes y el entorno legal al diseñar la matriz.'
    },
    {
      id: 4,
      question: '¿Qué metodologías internacionales se consideran al desarrollar la matriz de riesgo?',
      answer: 'Utilizaremos estándares como ISO 31000 y prácticas recomendadas de organismos internacionales.'
    },
    {
      id: 5,
      question: '¿Cómo se llevará a cabo la capacitación virtual y qué recursos se proporcionarán durante la misma?',
      answer: 'La capacitación será por videoconferencia, con materiales PDF y recursos adicionales.'
    },
    {
      id: 6,
      question: '¿Qué tipo de seguimiento se ofrecerá después del taller y cómo puedo implementar los aprendizajes?',
      answer: 'Tendrás tres sesiones grupales de seguimiento para revisar avances y resolver dudas sobre la implementación.'
    },
    {
      id: 7,
      question: '¿Qué beneficios incluye la evaluación independiente sobre mi programa de cumplimiento?',
      answer: 'Se identificarán debilidades y oportunidades de mejora que garantizarán el cumplimiento normativo, ofreciendo recomendaciones específicas para optimizar tus procesos.'
    },
    {
      id: 8,
      question: '¿Qué se abordará en el taller presencial de dos días y qué tipo de actividades se realizarán?',
      answer: 'Aprenderás a diseñar una matriz de riesgo a través de ejercicios prácticos y estudios de caso.'
    },
    {
      id: 9,
      question: '¿Cómo se aplicarán las leyes de prevención de BC/FT en mi sector y cuáles son sus implicaciones?',
      answer: 'Te enseñaremos las leyes relevantes y cómo implementarlas en tus procesos operativos.'
    },
    {
      id: 10,
      question: '¿Recibiré algún certificado por participar en el taller y las capacitaciones?',
      answer: 'Sí, recibirás un certificado que valida tu participación en las capacitaciones.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestra certificación
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FaqItem 
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqId === faq.id}
              toggle={() => toggleFaq(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
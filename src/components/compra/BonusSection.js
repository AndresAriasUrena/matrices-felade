// components/compra/BonusSection.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGift } from 'react-icons/fa';

const BonusCard = ({ number, title, description, value, image }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-primary-light text-white p-4 relative">
        <h3 className="text-xl font-bold">BONO #{number}</h3>
        <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm">
          Valor: ${value}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4 relative w-full h-56">
          <Image 
            src={image} 
            alt={title}
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-md"
          />
        </div>
        <h4 className="text-lg font-bold text-primary mb-3">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const BonusSection = () => {
  const bonuses = [
    {
      number: 1,
      title: "Plantilla Modelo de Matriz de Riesgo",
      description: "Te proporcionaremos una plantilla modelo especializada de matriz de riesgo, diseñada para simplificar el proceso de diseño y evaluación.",
      value: 297,
      image: "/images/bonos/bono1.png"
    },
    {
      number: 2,
      title: "Sesiones de Seguimiento",
      description: "Incluye tres sesiones de seguimiento durante el primer mes, donde se revisarán los avances de tu matriz de riesgo, asegurando una implementación efectiva y continua.",
      value: 397,
      image: "/images/bonos/bono2.png"
    },
    {
      number: 3,
      title: "Revisión de modelo de Matriz desarrollado",
      description: "Recibirás una sesión personalizada que incluye la revisión del modelo desarrollado durante el taller",
      value: 397,
      image: "/images/bonos/bono3.png"
    }
  ];
  
  // Calcular el valor total
  const totalValue = bonuses.reduce((sum, bonus) => sum + bonus.value, 0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            BONOS EXCLUSIVOS
          </h2>
          <div className="flex items-center justify-center mb-4">
            <FaGift className="text-secondary text-4xl mr-3" />
            <p className="text-xl text-gray-700">
              Recibe estos bonos valorados en <span className="font-bold text-primary">${totalValue}</span> completamente GRATIS
            </p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus) => (
            <BonusCard 
              key={bonus.number}
              number={bonus.number}
              title={bonus.title}
              description={bonus.description}
              value={bonus.value}
              image={bonus.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
// src/components/landing/BenefitsSection.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaChartLine, FaCertificate } from 'react-icons/fa';

const BenefitCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }} // Animación más lenta
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Clase 1: Enfoque Basado en Riesgo",
      description: "Aprenderás a implementar un enfoque basado en riesgo para priorizar recursos en controles estratégicos, maximizando la eficiencia de tu sistema de prevención.",
      delay: 0.2
    },
    {
      icon: <FaCheckCircle />,
      title: "Clase 2: Identificación de Riesgos",
      description: "Identificación de Riesgos BC/FT/FPADM en clientes, productos, servicios, canales y zonas geográficas para una gestión integral.",
      delay: 0.3
    },
    {
      icon: <FaChartLine />,
      title: "Aprendizaje Extra: Metodologías Internacionales",
      description: "Conocerás metodologías internacionales de gestión de riesgo según ISO 31000 y las mejores prácticas del sector.",
      delay: 0.4
    },
    {
      icon: <FaCertificate />,
      title: "Certificación Internacional",
      description: "✅ Certificación AML – UPAZ / ONU ✅ Certificación AML Profesional de FIBA Risk Manager IS0 31000",
      delay: 0.5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} // Animación más lenta
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Lo Que Aprenderás en Este Taller
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adquiere conocimientos prácticos y aplicables de inmediato en tu organización
          </p>
        </motion.div>
        
        {/* Nueva sección con imagen del curso - Visible en móvil y desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={benefit.delay}
              />
            ))}
          </div>
          
          <motion.div 
            className="w-full lg:w-1/3 mt-8 lg:mt-0 order-first lg:order-last mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }} // Animación más lenta
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* <div className="bg-white rounded-lg shadow-lg p-4 text-center"> */}
            <div className=" p-4 text-center">
              {/* <div className="uppercase text-xs md:text-sm font-semibold text-primary mb-3">
                EL PASO A PASO HACIA EL
              </div>
              <div className="uppercase text-sm md:text-base font-bold text-primary mb-4">
                MÉTODO PROBADO PARA DISEÑAR Y TESTEAR MATRICES DE RIESGO DE FORMA REAL Y EFECTIVA
              </div> */}
              <div className="relative mx-auto w-full max-w-xs h-[31rem]">
                <Image
                  src="/images/pasoapaso.png"
                  alt="Método para Matrices de Riesgo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              {/* <div className="mt-4 flex justify-center">
                <Image
                  src="/images/logoazul.png"
                  alt="FELADE"
                  width={120}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
// components/compra/CourseContent.js
"use client"; // Marcador para componente cliente

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaGraduationCap, FaFileAlt, FaTable, FaUsers, FaMedal } from 'react-icons/fa';

const ContentItem = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row items-start gap-4 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="text-primary text-3xl md:mt-1 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const CourseContent = () => {
  const contents = [
    {
      icon: <FaGraduationCap />,
      title: "Dos sesiones de capacitación virtual de 2.5 horas c/u",
      description: "Sobre el Sistema de Administración de Riesgos BC/FT/FPADM, que te proporcionará conocimientos clave para gestionar riesgos en tu organización."
    },
    {
      icon: <FaUsers />,
      title: "Taller Presencial de Dos Días",
      description: "Asistencia a un taller presencial de dos días donde aprenderán el paso a paso para diseñar una matriz de riesgo, proporcionando una experiencia práctica y dinámica que enfatiza la aplicación de conceptos teóricos."
    },
    {
      icon: <FaFileAlt />,
      title: "Paso a Paso Escrito",
      description: "Recibirás un documento detallado que describe el paso a paso para desarrollar una matriz de riesgo de BC/FT/FPADM, garantizando claridad y orientación en cada etapa."
    },
    // {
    //   icon: <FaTable />,
    //   title: "Plantilla Modelo de Matriz de Riesgo",
    //   description: "Te proporcionaremos una plantilla modelo especializada de matriz de riesgo, diseñada para simplificar el proceso de diseño y evaluación."
    // },
    // {
    //   icon: <FaCheck />,
    //   title: "Sesiones de Seguimiento",
    //   description: "Incluye tres sesiones de seguimiento durante el primer mes, donde se revisarán los avances de tu matriz de riesgo, asegurando una implementación efectiva y continua."
    // },
    {
      icon: <FaMedal />,
      title: "Certificación de participación",
      description: "Al completar el programa, recibirás una certificación oficial que valida tus conocimientos y participación."
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
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿QUÉ INCLUYE TU INFOPRODUCTO?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una formación completa con todo lo que necesitas para dominar la gestión de riesgos
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {contents.map((item, index) => (
            <ContentItem 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
// components/compra/CourseContent.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaChalkboardTeacher, 
  FaTable, 
  FaLightbulb, 
  FaShieldAlt, 
  FaChartBar, 
  FaComments, 
  FaMedal,
  FaRobot,
  FaFileAlt,
  FaHeadset,
  FaMoneyBillWave,
  FaPercentage,
  FaTags,
  FaVideo,
  FaLaptop
} from 'react-icons/fa';

const ContentItem = ({ icon, title, description, price }) => {
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
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {price && (
        <div className="text-right text-xl font-bold text-green-700 md:min-w-[120px] flex-shrink-0 mt-2 md:mt-0">
          ${price}
        </div>
      )}
    </motion.div>
  );
};

const CourseContent = () => {
  const contents = [
    {
      icon: <FaCalendarAlt />,
      title: "SEIS SESIONES DE 3 HORAS",
      description: "Duración total del taller 1 mes; dos clases por semana. Programa intensivo y completo para dominar la gestión de riesgos.",
      // price: "3,000"
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "DOS SESIONES INTENSIVAS DE METODOLOGÍA",
      description: "Aprenderás los estándares internacionales más importantes: ISO, COSO ERM y SARLAFT para una sólida base teórica.",
      includedIn: "clases"
    },
    {
      icon: <FaTable />,
      title: "TALLER DE DISEÑO DE MATRIZ EN EXCEL",
      description: "Aprenderás y entenderás las principales fórmulas que están por detrás de cada matriz, garantizando un dominio técnico completo.",
      includedIn: "clases"
    },
    {
      icon: <FaLightbulb />,
      title: "TALLER DE IDENTIFICACIÓN DE RIESGOS",
      description: "Utilizando inteligencia artificial para optimizar y acelerar el proceso de identificación de riesgos relevantes.",
      includedIn: "clases"
    },
    {
      icon: <FaShieldAlt />,
      title: "TALLER DE DISEÑO DE CONTROLES",
      description: "Aprenderás a crear controles efectivos con el apoyo de inteligencia artificial para mitigar los riesgos identificados.",
      includedIn: "clases"
    },
    {
      icon: <FaChartBar />,
      title: "TALLER DE INTERPRETACIÓN DE RESULTADOS",
      description: "Desarrollarás la capacidad de analizar y comprender los datos obtenidos para tomar decisiones basadas en evidencia.",
      includedIn: "clases"
    },
    {
      icon: <FaComments />,
      title: "TALLER DE COMUNICACIÓN ESTRATÉGICA DEL RIESGO",
      description: "Aprenderás a presentar y comunicar efectivamente los resultados de tu análisis a diferentes stakeholders.",
      includedIn: "clases"
    },
    {
      icon: <FaVideo />,
      title: "GRABACIÓN DE TODAS LAS SESIONES",
      description: "Todas las sesiones del taller serán grabadas y estarán disponibles para que puedas repasarlas en cualquier momento. Tendrás acceso ilimitado para reforzar tu aprendizaje a tu propio ritmo.",
      includedIn: "bonus"
    },
    {
      icon: <FaMedal />,
      title: "CERTIFICADO DE PARTICIPACIÓN",
      description: "Al completar el programa, recibirás una certificación oficial que valida tus conocimientos y participación, avalada por FELADE y reconocida internacionalmente.",
      includedIn: "bonus"
    }
  ];

  // Valores fijos para evitar problemas con toLocaleString
  const totalValue = "4,744";
  const salePrice = "397";
  const discountPercentage = 92; // Calculado manualmente

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
              price={item.price}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center bg-blue-50 p-6 rounded-lg border border-blue-100 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl text-primary mb-4">
            <FaRobot className="inline-block" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">POTENCIADO POR INTELIGENCIA ARTIFICIAL</h3>
          <p className="text-gray-700">
            Nuestro programa incorpora las últimas tecnologías de IA para optimizar los procesos de identificación de riesgos y 
            diseño de controles, permitiéndote obtener resultados más precisos en menos tiempo.
          </p>
        </motion.div>
        
        {/* Nuevo bloque destacado sobre acceso a las grabaciones */}
        {/* <motion.div 
          className="mt-6 text-center bg-green-50 p-6 rounded-lg border border-green-100 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl text-primary mb-4">
            <FaLaptop className="inline-block" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">APRENDE A TU RITMO</h3>
          <p className="text-gray-700">
            ¿No puedes asistir a todas las sesiones en vivo? ¡No hay problema! Todas las sesiones quedarán grabadas 
            y disponibles para que puedas verlas cuando quieras y cuantas veces necesites. Maximiza tu aprendizaje 
            con acceso permanente a todo el contenido.
          </p>
        </motion.div> */}
        
        {/* Sección con listado numerado del contenido del curso */}
        {/* <motion.div 
          className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-200 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-primary mb-4 text-center">CONTENIDO COMPLETO DEL PROGRAMA</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li className="font-medium">DOS SESIONES INTENSIVAS DE METODOLOGÍA</li>
                <li className="font-medium">TALLER DE DISEÑO DE MATRIZ EN EXCEL</li>
                <li className="font-medium">TALLER DE IDENTIFICACIÓN DE RIESGOS</li>
                <li className="font-medium">TALLER DE DISEÑO DE CONTROLES</li>
              </ol>
            </div>
            <div>
              <ol className="list-decimal list-inside space-y-3 text-gray-700" start="5">
                <li className="font-medium">TALLER DE INTERPRETACIÓN DE RESULTADOS</li>
                <li className="font-medium">TALLER DE COMUNICACIÓN ESTRATÉGICA DEL RIESGO</li>
                <li className="font-medium">CERTIFICADO DE PARTICIPACIÓN</li>
              </ol>
              
              <div className="mt-6 bg-primary bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-bold text-primary mb-2">BONOS INCLUIDOS:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Plantilla modelo en Excel</li>
                  <li>Paso a paso escrito</li>
                  <li>Sesiones de seguimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div> */}
        {/* Imagen descriptiva del contenido del curso */}
        <motion.div 
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative w-full h-96 lg:h-[500px]">
            <Image 
              src="/images/modulos-curso.png" 
              alt="Módulos del Curso de Matrices de Riesgo" 
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
        </motion.div>
        
        {/* Sección de precio y descuento */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-100 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="flex items-center text-2xl font-bold text-primary mb-4">
                <FaMoneyBillWave className="mr-2" /> VALOR REAL DEL PROGRAMA
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">24 Horas de Clase</span>
                  <span className="font-bold text-gray-800">${"3,000"}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Plantilla Modelo</span>
                  <span className="font-bold text-gray-800">${"1,000"}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Paso a Paso Escrito</span>
                  <span className="font-bold text-gray-800">${"347"}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">Sesiones Seguimiento</span>
                  <span className="font-bold text-gray-800">${"397"}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-gray-800">VALOR TOTAL</span>
                  <span className="text-xl font-bold text-gray-800">${totalValue}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-lg p-6 shadow-lg transform rotate-2 relative">
                {/* Etiqueta de descuento */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold z-10 transform rotate-12 shadow-md">
                  <div>
                    <span>-{discountPercentage}</span>
                    <FaPercentage className="inline mr-0.5 text-sm" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-green-700 mb-3 flex items-center">
                  <FaTags className="mr-2" /> TU INVERSIÓN HOY
                </h3>
                
                <div className="mb-4">
                  <p className="text-gray-500 line-through text-lg">${totalValue}</p>
                  <p className="text-4xl font-bold text-green-600">${salePrice}</p>
                  <p className="text-sm text-gray-600 mt-2">Pago único • Sin cuotas • Acceso inmediato</p>
                </div>
                
                <p className="text-gray-700 text-sm border-t border-gray-100 pt-3">
                  Aprovecha esta oportunidad única para transformar tu carrera profesional con 
                  conocimientos especializados en gestión de riesgos a un precio excepcional.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseContent;
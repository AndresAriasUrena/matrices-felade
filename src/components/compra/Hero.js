// components/compra/Hero.js
"use client"; // Marcador para componente cliente

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Timer from './Timer'; // Crearemos este componente después


const Hero = () => {
  // Fecha final para el contador - 20 de Junio a las 11:59pm hora de Panamá (UTC-5)
  const [endDate] = useState(() => {
    // Crear la fecha en la zona horaria de Panamá
    const panamaDate = new Date('2025-06-20T23:59:59-05:00');
    return panamaDate;
  });
  
  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4K\")",
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Logos con línea divisoria vertical */}
        <div className="flex justify-center items-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-end w-1/2 pr-6">
            <Image
              src="/images/logoblanco.png"
              alt="UPAZ"
              width={250}
              height={75}
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          {/* Línea divisoria vertical */}
          <div className="h-16 w-px bg-white bg-opacity-40"></div>
          
          <div className="flex items-center justify-start w-1/2 pl-6">
            <Image
              src="/images/upaz-logo-white.png"
              alt="FELADE"
              width={250}
              height={75}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        
        {/* Contador de tiempo regresivo */}
        <motion.div 
          className="bg-red-600 bg-opacity-80 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-center border-2 border-red-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl mb-3 font-bold text-yellow-300">🔥 OFERTA ESPECIAL LIMITADA - TERMINA EN: 🔥</h3>
          <Timer endDate={endDate} />
          <p className="text-sm mt-2 text-yellow-200">
            ¡Después del 20 de junio la oferta se cierra! No pierdas esta oportunidad única.
          </p>
        </motion.div>
        
        {/* Título y subtítulo principal */}
        <div className="flex flex-col items-center justify-center">
          {/* Hero Content */}
          <motion.div 
            className="w-full max-w-4xl text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              El Paso a Paso para diseñar y testear matrices de riesgo de forma real y efectiva
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto">
              Aprende el método <strong>Probado</strong> para diseñar y testear matrices de riesgo de manera práctica y efectiva. Un taller en vivo donde transformarás la teoría en acción con pasos claros y aplicables de inmediato.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// src/app/whatsapp/page.js
"use client"; // Marcador para componente cliente

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppPage() {
  const [leadName, setLeadName] = useState('');
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [countdown, setCountdown] = useState(5); // Reducido a 5 segundos
  
  // Grupo de WhatsApp URL actualizado
  const whatsappGroupUrl = 'https://chat.wapp.ly/e5lmqd';
  
  // Recuperar el nombre del lead del localStorage
  useEffect(() => {
    try {
      const leadData = JSON.parse(localStorage.getItem('leadData'));
      if (leadData && leadData.name) {
        // Extraer solo el primer nombre
        const firstName = leadData.name.split(' ')[0];
        setLeadName(firstName);
      }
    } catch (error) {
      console.error('Error al recuperar datos del lead:', error);
    }
  }, []);
  
  // Cuenta regresiva
  useEffect(() => {
    if (isCountingDown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsCountingDown(false);
    }
  }, [countdown, isCountingDown]);
  
  return (
    <main className="min-h-screen relative">
      {/* Fondo de imagen con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10"></div>
        <Image
          src="/images/whatsapp-bg.png"
          alt="Fondo de certificación"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="z-0"
        />
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-2xl relative z-20">
        <motion.div 
          className="bg-white bg-opacity-95 rounded-xl shadow-lg overflow-hidden text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-primary text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              ¡Alto, aún te falta un paso!
            </h1>
            {leadName && (
              <p className="text-lg">
                ¡Gracias por registrarte, {leadName}!
              </p>
            )}
          </div>
          
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 text-xl font-semibold text-primary mb-4">
                <span>👋</span>
                <p>Únete a nuestra comunidad de <span className="font-bold">WhatsApp</span></p>
                <span>👋</span>
              </div>
              
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Para recibir contenido valioso y aprender el método exacto para diseñar y testear matrices de riesgo de manera práctica y efectiva. 😎
              </p>
            </div>
            
            {/* WhatsApp Button Section */}
            <div className="mb-8">
              {isCountingDown ? (
                <div className="mb-4 text-center">
                  <p className="text-gray-600 mb-2">El botón estará disponible en:</p>
                  <div className="text-4xl font-bold text-primary">{countdown}</div>
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="max-w-md mx-auto"
                >
                  <a 
                    href={whatsappGroupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 w-full inline-flex items-center justify-center"
                  >
                    <FaWhatsapp className="text-2xl mr-2" />
                    Unirme a la comunidad de WhatsApp
                  </a>
                </motion.div>
              )}
            </div>
            
            {/* Footer Note */}
            <div className="border-t border-gray-200 pt-4 text-center">
              <p className="text-sm text-gray-500 flex items-center justify-center">
                <FaEnvelope className="mr-2" /> 
                Por último, revisa tu correo electrónico, ya debiste recibir contenido 🚀
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
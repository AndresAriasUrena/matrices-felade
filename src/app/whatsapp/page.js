// src/app/whatsapp/page.js
"use client"; // Marcador para componente cliente

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp, FaCheck, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppPage() {
  const [leadName, setLeadName] = useState('');
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [countdown, setCountdown] = useState(10);
  
  // Grupo de WhatsApp URL (reemplazar con el enlace real)
  const whatsappGroupUrl = 'https://chat.whatsapp.com/tu-enlace-de-invitacion';
  
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
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-primary text-white p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              ¡Gracias por registrarte, {leadName || 'Participante'}!
            </h1>
            <p className="text-lg">
              Un paso más para asegurar tu lugar en el taller
            </p>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="w-full md:w-2/3">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92z" clipRule="evenodd" />
                        <path d="M10 12a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 00-1 1v5a1 1 0 002 0V5a1 1 0 00-1-1z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>¡Importante!</strong> Para recibir el material complementario y acceder al taller, debes unirte a nuestro grupo privado de WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-primary mb-4">
                  ¿Por qué unirte a nuestro grupo de WhatsApp?
                </h2>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Recibirás recordatorios y enlaces para acceder a ambas clases.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Accederás a material complementario exclusivo sobre matrices de riesgo.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Podrás hacer preguntas directamente al instructor antes del taller.</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Te conectarás con otros profesionales interesados en prevención de BC/FT/FPADM.</span>
                  </li>
                </ul>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    También hemos enviado un correo a tu bandeja de entrada
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Revisa tu correo electrónico para encontrar:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <FaEnvelope className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Confirmación de tu registro</span>
                    </li>
                    <li className="flex items-start">
                      <FaEnvelope className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Datos de acceso al taller</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-sm text-gray-500 italic">
                  <p>
                    Si no ves el correo en tu bandeja de entrada, por favor revisa la carpeta de spam o promociones.
                  </p>
                </div>
              </div>
              
              {/* WhatsApp Button Section */}
              <div className="w-full md:w-1/3">
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  {isCountingDown ? (
                    <div className="mb-4">
                      <p className="text-gray-600 mb-2">El botón estará disponible en:</p>
                      <div className="text-4xl font-bold text-primary">{countdown}</div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-green-800 mb-4">
                        ¡Únete ahora!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        No te pierdas la oportunidad de formar parte de este grupo exclusivo.
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a 
                          href={whatsappGroupUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 w-full inline-flex items-center justify-center"
                        >
                          <FaWhatsapp className="text-2xl mr-2" />
                          Unirme al Grupo
                        </a>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
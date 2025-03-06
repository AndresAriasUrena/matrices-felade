// src/components/landing/InstructorSection.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUniversity, FaAward } from 'react-icons/fa';

const CredentialItem = ({ icon, text }) => (
  <div className="flex items-start mb-3">
    <div className="text-secondary text-xl mr-3 mt-1">{icon}</div>
    <p className="text-gray-700">{text}</p>
  </div>
);

const InstructorSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Fondo con overlay azul */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Image
          src="/images/hero-background.png"
          alt="Fondo"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Instructor Image */}
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }} // Animación más lenta
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl mx-auto max-w-sm">
              <Image
                src="/images/_44A5611.png"
                alt="Instructor"
                width={400}
                height={500}
                style={{ objectFit: 'cover' }}
                className="w-full"
              />
            </div>
          </motion.div>
          
          {/* Instructor Info */}
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }} // Animación más lenta
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl font-bold text-primary mb-2">
              Aprende de un Experto con Reconocimiento Internacional
            </h2>
            
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Especialista en Gestión de Riesgos BC/FT/FPADM
            </h3>
            
            <p className="text-gray-600 mb-6">
              Con más de 12 años de experiencia en el sector bancario y financiero, 
              nuestro instructor ha asesorado a importantes instituciones en la 
              implementación de sistemas de gestión de riesgos efectivos y conformes 
              con estándares internacionales.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 border border-gray-100">
              <h4 className="text-lg font-bold text-primary mb-4">Credenciales destacadas:</h4>
              
              <CredentialItem 
                icon={<FaBriefcase />}
                text="12+ años de experiencia en el sector bancario y financiero"
              />
              
              <CredentialItem 
                icon={<FaAward />}
                text="Especialización en ISO 31000 (Gestión de Riesgos) y 37001 (Sistemas Antisoborno)"
              />
              
              <CredentialItem 
                icon={<FaUniversity />}
                text="Experiencia en Deloitte asesorando bancos como Capital Bank, Banco Lafise, St. Georges Bank y Banesco"
              />
              
              <CredentialItem 
                icon={<FaAward />}
                text="Certificación AML – UPAZ / ONU ✓ Certificación ISO 31000 Risk Manager"
              />
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              {/* <a 
                href="#registro" 
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
              >
                <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm font-bold">✓</span>
                Reserva tu lugar ahora mismo
              </a> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
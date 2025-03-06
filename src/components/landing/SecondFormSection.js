// src/components/landing/SecondFormSection.js
"use client"; // Marcador para componente cliente

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaGraduationCap, FaLock, FaClock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';

const BenefitItem = ({ icon, text }) => (
  <li className="flex items-start">
    <span className="text-secondary mr-2 mt-1">{icon}</span>
    <span>{text}</span>
  </li>
);

// Esquema de validación
const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Por favor, ingresa tu nombre')
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  
  email: yup
    .string()
    .required('Por favor, ingresa tu correo electrónico')
    .email('Por favor, ingresa un correo electrónico válido'),
  
  phone: yup
    .string()
    .required('Por favor, ingresa tu número telefónico')
    .matches(/^(\+\d{1,3})?\s?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/, 'Por favor, ingresa un número telefónico válido'),
});

const SecondFormSection = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(registrationSchema),
    mode: 'onBlur'
  });
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Guardar datos en localStorage
      localStorage.setItem('leadData', JSON.stringify(data));
      
      // Intentar llamar a la API
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        // Si hay error en la API, continuamos con la redirección
        if (!response.ok) {
          console.warn('Error al registrar en la API, pero continuamos con la redirección');
        }
      } catch (apiError) {
        console.warn('Error al llamar a la API, pero continuamos con la redirección:', apiError);
      }
      
      // Redirección programática a la página de WhatsApp
      window.location.href = '/whatsapp';
      
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Hubo un problema al procesar tu registro. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No Pierdas Esta Oportunidad Única
            </h2>
            
            <p className="text-xl mb-6">
              Las plazas para este taller gratuito son limitadas y se llenan rápidamente.
            </p>
            
            <ul className="mb-8 space-y-4">
              <BenefitItem 
                icon={<FaCheck />}
                text="2 Clases gratuitas con contenido práctico y aplicable"
              />
              <BenefitItem 
                icon={<FaGraduationCap />}
                text="Acceso a metodologías internacionales de gestión de riesgo"
              />
              <BenefitItem 
                icon={<FaLock />}
                text="Contenido exclusivo sobre BC/FT/FPADM"
              />
              <BenefitItem 
                icon={<FaClock />}
                text="Sin costo ni compromiso"
              />
            </ul>
            
            <div className="p-6 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 mb-6">
              <p className="text-lg font-medium italic">
                "Estas clases gratuitas son solo una muestra del poder transformador de nuestro programa completo de certificación"
              </p>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div 
            className="w-full md:w-5/12 bg-white rounded-xl shadow-2xl text-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="p-6 md:p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Reserva Tu Lugar Ahora
                </h3>
                <p className="text-gray-600 mb-6">
                  Regístrate para acceder a las 2 clases gratuitas
                </p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Nombre completo</label>
                    <input 
                      type="text"
                      {...register('name')}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'}`}
                      placeholder="Ej. Juan Pérez"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 text-left">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Correo electrónico</label>
                    <input 
                      type="email"
                      {...register('email')}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'}`}
                      placeholder="tu@correo.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 text-left">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Teléfono (con código de país)</label>
                    <input 
                      type="tel"
                      {...register('phone')}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'}`}
                      placeholder="+123 456 7890"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 text-left">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        {...register('consent')}
                        className="mt-1 mr-2"
                      />
                      <span className="text-sm text-gray-600 text-left">
                        Acepto recibir información sobre este taller. No recibirás correos molestos ni ajenos a tu interés.
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </div>
                    ) : (
                      <>
                        <span className="bg-white text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm font-bold">✓</span>
                        Quiero Acceder a las Clases Gratis
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondFormSection;
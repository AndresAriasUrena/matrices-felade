// src/components/landing/BenefitsSection.js
"use client"; // Marcador para componente cliente

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import BrevoFormEmbed from './BrevoFormEmbed';

const BenefitCard = ({ icon, title, description, isHighlighted = false }) => {
  return (
    <div className={`flex items-start p-4 ${isHighlighted ? 'bg-gray-50 rounded-lg' : ''}`}>
      <div className="text-green-600 text-xl mr-3 mt-1 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-primary mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

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

const BenefitsSection = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
      // Guarda los datos en localStorage
      localStorage.setItem('leadData', JSON.stringify(data));
      
      // Llama a la API para registrar el lead
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        // Si hay un error en la API, continuamos de todos modos con la redirección
        if (!response.ok) {
          console.warn('Error al registrar en la API, pero continuamos con la redirección');
        }
      } catch (apiError) {
        // Si falla la API, registramos el error pero continuamos con la redirección
        console.warn('Error al llamar a la API, pero continuamos con la redirección:', apiError);
      }
      
      // Redirige a la página de WhatsApp
      router.push('/whatsapp');
      
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Hubo un problema al procesar tu registro. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <FaCheckCircle />,
      title: "Clase Gratuita 1:",
      description: "Aprenderás a implementar un enfoque basado en riesgo para tu negocio, que te permita priorizar recursos en la implementación de controles."
    },
    {
      icon: <FaCheckCircle />,
      title: "Clase Gratuita 2:",
      description: "Identificación de Riesgos BC/FT/FPADM (Clientes, Productos, Servicios, Canales y Zonas Geográficas)."
    },
    {
      icon: <FaCheckCircle />,
      title: "Aprendizaje 3:",
      description: "Entendimiento de las principales metodologías internacionales de gestión de riesgo."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="registro">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            En esta Capacitación en vivo aprenderás:
          </h2>
        </motion.div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Columna 1: Formulario de Registro */}
            <motion.div 
              className="p-6 lg:border-r border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-center text-primary mb-4">
                  Solamente debes registrarte y te enviamos todo el contenido, directo a tu correo.
                </h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input 
                      type="text"
                      {...register('name')}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'}`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                    <input 
                      type="email"
                      {...register('email')}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'}`}
                      placeholder="tu@correo.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléf</label>
                    <input 
                      type="tel"
                      {...register('phone')}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-200 ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-primary focus:border-primary'}`}
                      placeholder="+123 456 7890"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-500 italic">*Te garantizo que no recibirás correos molestos ni de otros temas que no sean de tu interés.</p>
                  
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
            </motion.div>
            
            {/* Columna 2: Beneficios */}
            <motion.div 
              className="p-6 space-y-4 lg:border-r border-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {benefits.map((benefit, index) => (
                <BenefitCard 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  isHighlighted={index === 0}
                />
              ))}
            </motion.div>
            
            {/* Columna 3: Solo Imagen */}
            <motion.div 
              className="p-3 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-full h-[25rem] mb-4">
                  <Image
                    src="/images/curso-grafico.png"
                    alt="Método para Matrices de Riesgo"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
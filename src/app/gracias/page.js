"use client"; // Marcador para componente cliente

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

// Componente interno que usa useSearchParams
function GraciasContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  
  useEffect(() => {
    // Recuperar información del cliente desde localStorage
    const name = localStorage.getItem('customer_name');
    const email = localStorage.getItem('customer_email');
    
    if (name) setCustomerName(name.split(' ')[0]); // Solo el primer nombre
    if (email) setCustomerEmail(email);
    
    // Registrar conversión en Facebook Pixel si está disponible
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 575.00,
        currency: 'USD'
      });
    }
    
    // Registrar conversión en Google Analytics si está disponible
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: new Date().getTime().toString(),
        value: 575.00,
        currency: 'USD',
        items: [{
          id: 'CERT-MATRIZ-RIESGO',
          name: 'Certificación en Gestión de Riesgos BC/FT/FPADM',
          quantity: 1,
          price: 575.00
        }]
      });
    }
  }, []);

  if (status !== 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error en el pago</h1>
          <p className="mb-6">
            Lo sentimos, ha ocurrido un error durante el proceso de pago. Por favor, inténtalo nuevamente o 
            contáctanos si el problema persiste.
          </p>
          <Link 
            href="/compra" 
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded inline-block"
          >
            Volver a intentar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-primary text-white p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-3">
                <FaCheckCircle className="text-4xl text-green-500" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">¡Pago confirmado!</h1>
            <p className="text-xl">
              Tu inscripción a la Certificación en Gestión de Riesgos ha sido completada exitosamente.
            </p>
          </div>
          
          <div className="p-6">
            {customerName && (
              <div className="mb-6">
                <p className="text-lg">
                  ¡Hola <span className="font-bold">{customerName}</span>!
                </p>
                <p>
                  Gracias por confiar en nosotros para tu formación profesional. Estamos emocionados 
                  de tenerte en nuestra certificación.
                </p>
              </div>
            )}
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-primary mb-3">Próximos pasos:</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Recibirás un email con los detalles de tu compra en <strong>{customerEmail || "tu correo registrado"}</strong>.</li>
                <li>En las próximas 24 horas, te enviaremos los accesos a la plataforma de capacitación.</li>
                <li>También recibirás información sobre las fechas del taller presencial y cómo prepararte.</li>
                <li>Si tienes alguna duda, contáctanos vía WhatsApp o email.</li>
              </ol>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a 
                href="https://wa.me/50769999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" /> Contáctanos por WhatsApp
              </a>
              
              <a 
                href="mailto:soporte@felade.org" 
                className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg flex items-center justify-center"
              >
                <FaEnvelope className="mr-2" /> Escríbenos por Email
              </a>
            </div>
            
            <div className="text-center">
              <Link 
                href="/" 
                className="text-primary hover:underline"
              >
                Volver a la página principal
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

// Componente principal con Suspense
export default function GraciasPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      <GraciasContent />
    </Suspense>
  );
}
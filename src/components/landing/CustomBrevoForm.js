// src/components/landing/CustomBrevoForm.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const CustomBrevoForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    aceptaTerminos: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Crear FormData para enviar a Brevo
      const form = new FormData();
      form.append('NOMBRE', formData.nombre);
      form.append('EMAIL', formData.email);
      form.append('SMS', formData.telefono);
      form.append('OPT_IN', formData.aceptaTerminos ? '1' : '0');
      form.append('locale', 'es');
      
      // Envío directo al endpoint de Brevo
      const response = await fetch(
        'https://sibforms.com/serve/MUIFABJBgJYE63SSpl21IIRZp9-bnX4qWpi18BW3orA8P4lZZTWm0o9fSeI7zIA5vp15EbRFG84ScI8gmzhGklCfNksIlX5gWKpRxCJLk3te4FXPwo_Vcy_8wzTorjn0fIPDZzulMjFZXd7o13jA4XzhPYlWHvOKIJ6wCjcEr8eOAORj4pcdeTxmd5xXljB8LGtRNkOzE6sfl5cn',
        {
          method: 'POST',
          body: form
        }
      );

      if (response.ok) {
        // Almacenar datos en localStorage para uso posterior
        localStorage.setItem('leadData', JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono
        }));
        
        // Redirigir a la página de WhatsApp
        window.location.href = '/whatsapp';
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Hubo un problema al procesar tu registro. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-blue-900">
          Reserva Tu Lugar Ahora
        </h3>
        <p className="text-gray-600">
          Regístrate para acceder a las 2 clases gratuitas
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Nombre completo<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Correo electrónico<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Teléfono<span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <div className="relative w-24">
              <select
                className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="+506"
              >
                <option value="+506">+506</option>
                {/* Agrega más opciones de países según sea necesario */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="tu teléfono"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            *Te garantizo que no recibirás correos molestos ni de otros temas que no sean de tu interés.
          </p>
        </div>

        {/* Términos y condiciones */}
        <div className="mt-4">
          <label className="flex items-start">
            <input
              type="checkbox"
              name="aceptaTerminos"
              checked={formData.aceptaTerminos}
              onChange={handleChange}
              className="mt-1 mr-2"
              required
            />
            <span className="text-sm text-gray-600">
              Acepto los {' '}
              <Link href="/terminos" className="text-blue-500 hover:underline">
                términos y condiciones
              </Link>{' '}
              y estoy de acuerdo con la {' '}
              <Link href="/privacidad" className="text-blue-500 hover:underline">
                política de privacidad
              </Link>.
            </span>
          </label>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
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
              <span className="mr-2">✓</span>
              Quiero Acceder a las Clases Gratis
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CustomBrevoForm;
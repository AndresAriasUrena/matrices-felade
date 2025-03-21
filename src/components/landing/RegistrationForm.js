// src/components/landing/RegistrationForm.js
"use client"; // Marcador para componente cliente

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import FormInput from '../common/FormInput';
import Button from '../common/Button';
import { registrationSchema } from '../../lib/validation/registrationSchema';
import Link from 'next/link';

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
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
      // Llamada a la API para registrar el lead
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Error al registrar');
      }
      
      // Almacenar datos del lead en localStorage para uso posterior
      localStorage.setItem('leadData', JSON.stringify(data));
      
      // Redireccionar a la página de WhatsApp
      router.push('/whatsapp');
    } catch (error) {
      console.error('Error al registrar:', error);
      // Implementar manejo de errores - podría mostrar un toast o mensaje de error
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="text-center">
      {/* <h3 className="text-2xl font-bold text-primary mb-2">
        Reserva Tu Lugar Ahora
      </h3>
      <p className="text-gray-600 mb-6">
        Regístrate para acceder a las 2 clases gratuitas
      </p> */}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          label="Nombre completo"
          name="name"
          placeholder="Ej. Juan Pérez"
          register={register('name')}
          error={errors.name?.message}
          required
        />
        
        <FormInput
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="tu@correo.com"
          register={register('email')}
          error={errors.email?.message}
          required
          autoComplete="email"
        />
        
        <FormInput
          label="Teléfono (con código de país)"
          name="phone"
          type="tel"
          placeholder="+123 456 7890"
          register={register('phone')}
          error={errors.phone?.message}
          required
        />
        
        <div className="mb-6">
  <label className="flex items-start">
    <input
      type="checkbox"
      {...register('consent')}
      className="mt-1 mr-2"
    />
    <span className="text-sm text-gray-600 text-left">
      Acepto recibir información sobre este taller y entiendo la{' '}
      <Link href="/privacidad" className="text-primary hover:underline" target="_blank">
        política de privacidad
      </Link>
      {' '}y los{' '}
      <Link href="/terminos" className="text-primary hover:underline" target="_blank">
        términos y condiciones
      </Link>
      . No recibirás correos molestos ni ajenos a tu interés.
    </span>
  </label>
  {errors.consent && (
    <p className="mt-1 text-sm text-red-600 text-left">{errors.consent.message}</p>
  )}
</div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
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
  );
};

export default RegistrationForm;
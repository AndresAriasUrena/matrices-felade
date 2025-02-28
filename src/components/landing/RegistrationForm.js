// src/components/landing/RegistrationForm.js
"use client"; // Marcador para componente cliente

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation'; // Cambio a la importación actualizada
import FormInput from '../common/FormInput';
import Button from '../common/Button';
import { registrationSchema } from '../../lib/validation/registrationSchema';

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
      <h3 className="text-2xl font-bold text-primary mb-2">
        Reserva Tu Lugar Ahora
      </h3>
      <p className="text-gray-600 mb-6">
        Regístrate para acceder a las 2 clases gratuitas
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <a href="/privacidad" className="text-primary hover:underline">
                política de privacidad
              </a>
              . No recibirás correos molestos ni ajenos a tu interés.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-red-600 text-left">{errors.consent.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          variant="success"
          size="lg"
          fullWidth
          isSubmitting={isSubmitting}
          className="bg-green-600 hover:bg-green-700 py-4"
        >
          ✓ Quiero Acceder a las Clases Gratis
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
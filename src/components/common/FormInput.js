// src/components/common/FormInput.js
"use client"; // Marcador para componente cliente

import React from 'react';

const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  error,
  required = false,
  className = '',
  autoComplete = 'on'
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label 
          htmlFor={name} 
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        autoComplete={autoComplete}
        className={`
          w-full p-3 border rounded-lg shadow-sm
          focus:ring-2 focus:outline-none transition-all duration-200
          ${error 
            ? 'border-red-500 focus:ring-red-200' 
            : 'border-gray-300 focus:ring-primary-light focus:border-primary'}
        `}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
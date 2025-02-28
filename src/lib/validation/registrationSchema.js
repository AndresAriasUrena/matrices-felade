// src/lib/validation/registrationSchema.js
import * as yup from 'yup';

const phoneRegExp = /^(\+\d{1,3})?\s?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Por favor, ingresa tu nombre')
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder los 100 caracteres'),
  
  email: yup
    .string()
    .required('Por favor, ingresa tu correo electrónico')
    .email('Por favor, ingresa un correo electrónico válido'),
  
  phone: yup
    .string()
    .required('Por favor, ingresa tu número telefónico')
    .matches(phoneRegExp, 'Por favor, ingresa un número telefónico válido'),
  
  consent: yup
    .boolean()
    .oneOf([true], 'Debes aceptar la política de privacidad')
});
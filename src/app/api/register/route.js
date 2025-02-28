// src/app/api/register/route.js
import { NextResponse } from 'next/server';
import * as yup from 'yup';

// Esquema de validación
const registerSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  consent: yup.boolean().oneOf([true]).required(),
});

export async function POST(request) {
  try {
    // Parsear el cuerpo de la solicitud
    const body = await request.json();
    
    // Validar datos del formulario
    await registerSchema.validate(body);
    
    // Aquí puedes conectar con tu base de datos o servicio externo
    console.log('Lead registrado:', body);
    
    // Por ahora simulamos un registro exitoso
    // En un entorno real, aquí podrías:
    // 1. Guardar el lead en una base de datos
    // 2. Enviar un correo de confirmación
    // 3. Conectar con un CRM o servicio de email marketing
    
    // Responder con éxito
    return NextResponse.json(
      { 
        success: true, 
        message: 'Registro exitoso'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error al registrar lead:', error);
    
    // Devolver error específico si es un error de validación
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Datos inválidos', 
          errors: error.errors 
        },
        { status: 400 }
      );
    }
    
    // Error general
    return NextResponse.json(
      { 
        success: false, 
        message: 'Error al procesar la solicitud' 
      },
      { status: 500 }
    );
  }
}
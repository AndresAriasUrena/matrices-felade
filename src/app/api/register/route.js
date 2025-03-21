// src/app/api/register/route.js
import { NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import fetch from 'node-fetch';

export async function POST(request) {
  try {
    // Obtener datos del cuerpo de la solicitud
    const body = await request.json();
    const { name, email, phone } = body;
    
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
    }
    
    // Registrar en tu sistema (opcional - puedes almacenar en una base de datos aquí)
    console.log('Nuevo lead recibido:', { name, email, phone });
    
    // Método 1: Enviar a Brevo usando fetch desde el servidor
    try {
      // Crear FormData para enviar a Brevo
      const brevoFormData = new FormData();
      brevoFormData.append('NOMBRE', name);
      brevoFormData.append('EMAIL', email);
      
      // Separar el código de país y el número
      let countryCode = '+507'; // Código de país predeterminado
      let phoneNumber = phone;
      
      // Si el teléfono comienza con '+', extraer el código de país
      if (phone.startsWith('+')) {
        const plusIndex = phone.indexOf('+');
        const spaceIndex = phone.indexOf(' ', plusIndex);
        
        if (spaceIndex > -1) {
          countryCode = phone.substring(plusIndex, spaceIndex);
          phoneNumber = phone.substring(spaceIndex + 1);
        } else {
          // Intentar extraer el código de país basado en patrones comunes
          const matches = phone.match(/^\+(\d{1,3})/);
          if (matches && matches[1]) {
            countryCode = `+${matches[1]}`;
            phoneNumber = phone.substring(countryCode.length);
          }
        }
      }
      
      brevoFormData.append('SMS__COUNTRY_CODE', countryCode);
      brevoFormData.append('SMS', phoneNumber.replace(/\s+/g, ''));
      brevoFormData.append('OPT_IN', '1');
      brevoFormData.append('email_address_check', '');
      brevoFormData.append('locale', 'es');
      
      // Enviar a Brevo (esto puede fallar silenciosamente y no impedirá que el usuario continue)
      const brevoResponse = await fetch(
        'https://sibforms.com/serve/MUIFAFBRspRbB_21RjyCHxWxwZfrJgeIlwxkDN96f3drQ2myNgpz8PWpSHAmuAVtQuYY_b5hgx1ledQotCTlxVijO_P0k0-ZdBnjfBxBxNIuzspQe7Q8KRJ43kChFfeX0kJOP_NvttN7AZq90m2jKYB2w0t9WsQKBWJgKtlkZuE_E62CH036CL59Vs5Mzq4D0eONbmR_btXjqar3',
        {
          method: 'POST',
          body: brevoFormData,
          headers: {
            // No incluir Content-Type para que el navegador establezca el boundary correcto para FormData
            'Accept': '*/*',
            'Origin': 'https://felade.aurigital.com',
            'Referer': 'https://felade.aurigital.com/',
          },
        }
      );
      
      if (!brevoResponse.ok) {
        console.warn('Error al enviar a Brevo, pero continuamos el proceso:', 
                    await brevoResponse.text());
      } else {
        console.log('Envío a Brevo exitoso');
      }
    } catch (brevoError) {
      console.error('Error al enviar a Brevo:', brevoError);
      // No bloqueamos el flujo principal por un error en el envío a Brevo
    }
    
    // Método 2 alternativo: Enviar notificación por email (opcional - requiere configuración adicional)
    try {
      // Ejemplo usando Mailgun (instala con npm i mailgun.js form-data)
      // const mailgun = new Mailgun(formData);
      // const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });
      
      // await mg.messages.create('tu-dominio.com', {
      //   from: "Formulario Web <formulario@tu-dominio.com>",
      //   to: ["tu-email@ejemplo.com"],
      //   subject: "Nuevo registro en el formulario",
      //   text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}`,
      // });
    } catch (emailError) {
      console.error('Error al enviar notificación por email:', emailError);
    }
    
    // Retornamos éxito aunque haya fallos en integraciones externas
    return NextResponse.json({ 
      success: true, 
      message: 'Registro completado con éxito'
    });
    
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json({ 
      error: 'Error al procesar la solicitud',
      details: error.message 
    }, { status: 500 });
  }
}
// app/api/create-payment/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Inicializar Stripe con la clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    // Obtener datos de la solicitud
    const { paymentMethodId, planId, customerInfo } = await request.json();
    
    // Verificar que se proporcionaron todos los datos necesarios
    if (!paymentMethodId || !planId || !customerInfo) {
      return NextResponse.json(
        { message: 'Faltan datos obligatorios para el pago' },
        { status: 400 }
      );
    }
    
    // Buscar o crear el cliente en Stripe
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: customerInfo.email,
      limit: 1,
    });
    
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: customerInfo.email,
        name: customerInfo.name,
        phone: customerInfo.phone,
        metadata: {
          country: customerInfo.country,
        },
      });
    }
    
    // Asociar el método de pago al cliente
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customer.id,
    });
    
    // Establecer este método de pago como el predeterminado
    await stripe.customers.update(customer.id, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });
    
    // Definir precios según el plan seleccionado
    const planPrices = {
      regular: {
        amount: 397 * 100, // En centavos (actualizado a $397)
        currency: 'usd',
        description: 'Taller en Gestión de Riesgos BC/FT/FPADM - Pago único',
        priceId: 'price_1RQwzbGeY0vAkyob0atMo7Um'
      },
      installments: {
        amount: 248.50 * 100, // En centavos (actualizado a $248.50)
        currency: 'usd',
        description: 'Taller en Gestión de Riesgos BC/FT/FPADM - Plan en Cuotas',
        priceId: 'price_1RQxBuGeY0vAkyobIu1kIQwF'
      },
    };
    
    // Verificar que existe el plan seleccionado
    if (!planPrices[planId]) {
      return NextResponse.json(
        { message: 'Plan no válido' },
        { status: 400 }
      );
    }
    
    let paymentIntent;
    
    // Procesar según el tipo de plan
    if (planId === 'regular') {
      // Para pago único, crear un PaymentIntent
      paymentIntent = await stripe.paymentIntents.create({
        amount: planPrices[planId].amount,
        currency: planPrices[planId].currency,
        customer: customer.id,
        payment_method: paymentMethodId,
        description: planPrices[planId].description,
        confirm: true,
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/gracias?status=success`,
        metadata: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
          country: customerInfo.country,
          planId: planId,
        },
      });
      
      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        customerId: customer.id,
      });
      
    } else if (planId === 'installments') {
      // Calcular la fecha exacta para terminar después de 2 pagos
      const currentDate = new Date();
      // Sumamos 2 meses (60 días + 5 días extra para asegurar que se procese el segundo pago)
      const cancelAtDate = new Date(currentDate);
      cancelAtDate.setDate(currentDate.getDate() + 65);
      
      // Crear una suscripción con límite de 2 pagos mediante fecha de cancelación
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ 
          price: planPrices[planId].priceId // Usamos el ID del precio recurrente
        }],
        payment_behavior: 'default_incomplete',
        payment_settings: {
          payment_method_types: ['card'],
          save_default_payment_method: 'on_subscription',
        },
        metadata: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
          country: customerInfo.country,
          planId: planId,
          max_payments: '2',
          is_limited_plan: 'true'
        },
        // Programar la cancelación automática después de aproximadamente 2 meses
        cancel_at: Math.floor(cancelAtDate.getTime() / 1000), // Convertir a timestamp UNIX (segundos)
        expand: ['latest_invoice.payment_intent'],
      });
      
      return NextResponse.json({
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
        customerId: customer.id,
        subscriptionId: subscription.id,
      });
    }
    
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    
    return NextResponse.json(
      { 
        message: 'Error al procesar el pago', 
        error: error.message 
      },
      { status: 500 }
    );
  }
}
// components/compra/PricingSection.js
"use client"; // Marcador para componente cliente

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCreditCard, FaLock } from 'react-icons/fa';
import { loadStripe } from '@stripe/stripe-js';

// Cargar Stripe con tu clave publicable
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PriceCard = ({ plan, isSelected, onSelect }) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden border-2 ${isSelected ? 'border-secondary' : 'border-transparent'} transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ translateY: -10 }}
      onClick={onSelect}
    >
      <div className="bg-primary-light text-white p-4 text-center relative">
        <h3 className="text-xl font-bold">{plan.name}</h3>
        {plan.tag && (
          <span className="absolute -right-2 top-4 bg-secondary text-white px-3 py-1 text-sm font-bold rounded-l-full">
            {plan.tag}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="text-center mb-6">
          {plan.originalPrice && plan.originalPrice > plan.price && (
            <p className="text-gray-500 line-through text-lg">
              ${plan.originalPrice}
            </p>
          )}
          <div className="flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">${plan.price}</span>
            {plan.installments && (
              <span className="text-gray-500 ml-2">x {plan.installments}</span>
            )}
          </div>
          <p className="text-gray-600 mt-2">{plan.description}</p>
        </div>
        
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-secondary mr-2 mt-1"><FaCheck /></span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-lg font-bold transition-colors duration-300 ${
            isSelected 
              ? 'bg-secondary text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {isSelected ? '✓ SELECCIONADO' : 'SELECCIONAR'}
        </button>
      </div>
    </motion.div>
  );
};

// Componente de formulario de pago con Stripe
const CheckoutForm = ({ selectedPlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js no se ha cargado todavía
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // 1. Obtener el elemento de tarjeta de Stripe
      const cardElement = elements.getElement(CardElement);
      
      // 2. Crear una fuente de pago con los datos de la tarjeta
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        }
      });
      
      if (stripeError) {
        throw new Error(stripeError.message);
      }
      
      // 3. Enviar los datos al servidor para crear la sesión de pago
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          planId: selectedPlan.id,
          customerInfo: formData
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al procesar el pago');
      }
      
      // 4. Si estamos haciendo un pago único, confirmamos el pago
      if (data.clientSecret) {
        const { error: confirmError } = await stripe.confirmCardPayment(data.clientSecret);
        
        if (confirmError) {
          throw new Error(confirmError.message);
        }
        
        // Guardar datos del cliente en localStorage para recuperarlos en la página de gracias
        localStorage.setItem('customer_name', formData.name);
        localStorage.setItem('customer_email', formData.email);
        
        // Redireccionar a la página de gracias
        window.location.href = '/gracias?status=success';
      } else {
        // Para otros tipos de pagos (como suscripciones), simplemente redirigimos
        localStorage.setItem('customer_name', formData.name);
        localStorage.setItem('customer_email', formData.email);
        window.location.href = '/gracias?status=success';
      }
      
    } catch (err) {
      console.error('Error de pago:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre completo*</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Tu nombre completo"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico*</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="tu@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono*</label>
          <input 
            type="tel" 
            id="phone" 
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="+507 1234 5678"
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-gray-700 font-medium mb-2">País*</label>
          <select 
            id="country" 
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
          >
            <option value="">Selecciona tu país</option>
            <option value="PA">Panamá</option>
            <option value="CO">Colombia</option>
            <option value="MX">México</option>
            <option value="PE">Perú</option>
            <option value="CR">Costa Rica</option>
            <option value="EC">Ecuador</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2">Información de pago*</label>
        <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              }
            }}
          />
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <p>{error}</p>
        </div>
      )}
      
      <div>
        <button 
          type="submit"
          disabled={!stripe || loading}
          className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando...
            </>
          ) : (
            <>
              <span className="mr-2">✓</span>
              RESERVAR MI LUGAR AHORA
            </>
          )}
        </button>
        <p className="flex items-center justify-center mt-4 text-sm text-gray-500">
          <FaLock className="mr-2" /> Pago 100% seguro con encriptación SSL
        </p>
      </div>
    </form>
  );
};

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('regular');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const plans = [
    {
      id: 'regular',
      name: 'Pago Único',
      price: 397,
      originalPrice: 575,
      description: 'Acceso completo con un solo pago',
      tag: 'POPULAR',
      features: [
        'Acceso inmediato a todos los materiales',
        'Taller virtual en vivo, grabación incluída',
        'Plantilla modelo de matriz de riesgo',
        'Sesiones de seguimiento durante un mes',
        'Taller oficial',
        'Todos los bonos incluidos'
      ],
      priceId: 'price_1RQwzbGeY0vAkyob0atMo7Um' // Reemplazar con tu ID de precio real de StripeSe creó un precio nuevo llamado price_1RQwzbGeY0vAkyob0atMo7Um.
    },
    {
      id: 'installments',
      name: 'Plan en Cuotas',
      price: 248.50,
      installments: '2 pagos',
      description: 'Mismo contenido, pagos flexibles',
      features: [
        'Acceso inmediato a todos los materiales',
        'Taller virtual en vivo, grabación incluída',
        'Plantilla modelo de matriz de riesgo',
        'Sesiones de seguimiento durante un mes',
        'Taller oficial',
        'Todos los bonos incluidos'
      ],
      priceId: 'price_1RQxBuGeY0vAkyobIu1kIQwF' // Reemplazar con tu ID de precio real de Stripe para suscripciónSe creó un precio nuevo llamado price_1RQxBuGeY0vAkyobIu1kIQwF.
    }
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Guardar información del cliente en localStorage para recuperarla después
      localStorage.setItem('customer_name', formData.name);
      localStorage.setItem('customer_email', formData.email);
      
      // Obtener Stripe
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Error al cargar Stripe');
      
      // Encontrar el plan seleccionado
      const selectedPlanData = plans.find(plan => plan.id === selectedPlan);
      
      // Redireccionar a Stripe Checkout
      const result = await stripe.redirectToCheckout({
        lineItems: [{
          price: selectedPlanData.priceId,
          quantity: 1
        }],
        mode: selectedPlan === 'regular' ? 'payment' : 'subscription',
        successUrl: `${window.location.origin}/gracias?status=success`,
        cancelUrl: `${window.location.origin}/compra`,
        customerEmail: formData.email,
        clientReferenceId: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country
        })
      });
      
      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (err) {
      console.error('Error al iniciar checkout:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            PRECIO Y FORMAS DE PAGO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige la opción que mejor se adapte a tus necesidades
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-12">
          {plans.map(plan => (
            <div key={plan.id} className="w-full md:w-1/2">
              <PriceCard 
                plan={plan}
                isSelected={selectedPlan === plan.id}
                onSelect={() => setSelectedPlan(plan.id)}
              />
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Completa tu Registro
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre completo*</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico*</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="tu@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono*</label>
              <input 
                type="tel" 
                id="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="+507 1234 5678"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-gray-700 font-medium mb-2">País*</label>
              <select 
                id="country" 
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Selecciona tu país</option>
                <option value="PA">Panamá</option>
                <option value="CO">Colombia</option>
                <option value="MX">México</option>
                <option value="PE">Perú</option>
                <option value="CR">Costa Rica</option>
                <option value="EC">Ecuador</option>
              </select>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg">
              <p>{error}</p>
            </div>
          )}
          
          <div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Procesando...
                </>
              ) : (
                <>
                  <span className="mr-2">✓</span>
                  RESERVAR MI LUGAR AHORA
                </>
              )}
            </button>
            <p className="flex items-center justify-center mt-4 text-sm text-gray-500">
              <FaLock className="mr-2" /> Pago 100% seguro con encriptación SSL
            </p>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
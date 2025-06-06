// components/compra/PricingSection.js
"use client"; // Marcador para componente cliente

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCreditCard, FaLock, FaCalendarAlt, FaWhatsapp, FaEnvelope, FaUniversity, FaGlobe, FaPhone, FaVideoSlash } from 'react-icons/fa';
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

// Componente para métodos de pago alternativos
const AlternativePaymentMethods = () => {
  return (
    <motion.div 
      className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-primary mb-4 text-center">
        ¿Prefieres pagar por transferencia bancaria?
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
          <FaUniversity className="text-blue-600 text-3xl mr-4" />
          <div>
            <h4 className="font-semibold text-gray-800">Transferencia Local</h4>
            <p className="text-sm text-gray-600">Cuentas bancarias en varios países</p>
            <p className="text-xs text-green-600 font-medium">Menor costo de transferencia</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
          <FaGlobe className="text-green-600 text-3xl mr-4" />
          <div>
            <h4 className="font-semibold text-gray-800">Transferencia Internacional</h4>
            <p className="text-sm text-gray-600">Wire transfer desde cualquier país</p>
            <p className="text-xs text-blue-600 font-medium">Disponible mundialmente</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-gray-800 mb-2 text-center">
          🏦 Tenemos cuentas bancarias en múltiples países
        </h4>
        <p className="text-sm text-gray-700 text-center">
          Nuestro asesor te indicará la cuenta más conveniente según tu ubicación para 
          minimizar costos de transferencia y agilizar el proceso.
        </p>
      </div>
      
      <div className="text-center">
        <p className="text-gray-700 mb-4">
          <strong>Contacta con un asesor</strong> para coordinar tu pago y reservar tu espacio:
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a 
            href="https://wa.me/50640001400?text=Hola, estoy interesado en el taller de matrices de riesgo y me gustaría coordinar el pago por transferencia bancaria" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 font-semibold"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp - Asesor de Pagos
          </a>
          
          <a 
            href="https://calendar.app.google/CU3N3vXoCXpjwHH38" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 font-semibold"
          >
            <FaVideoSlash className="mr-2" /> Agendar Video Llamada
          </a>
        </div>
        
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center justify-center text-yellow-800 mb-2">
            <FaPhone className="mr-2" />
            <span className="font-semibold">Atención personalizada garantizada</span>
          </div>
          <p className="text-xs text-yellow-700">
            💡 Te ayudaremos a encontrar la opción de pago más conveniente según tu país
            <br />
            ⚡ Respuesta en menos de 2 horas durante horario laboral
            <br />
            📅 Agenda una videollamada para asesoría personalizada
          </p>
        </div>
      </div>
    </motion.div>
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
      price: 575,
      originalPrice: 750, // Precio original más alto para mostrar descuento
      description: 'Acceso completo con un solo pago',
      tag: 'POPULAR',
      features: [
        'Acceso inmediato a todos los materiales',
        'Taller virtual en vivo, grabación incluída',
        'Plantilla modelo de matriz de riesgo',
        'Sesiones de seguimiento durante un mes',
        'Taller oficial',
        'Todos los bonos incluidos',
        '💰 Ahorro de $175 vs. plan en cuotas'
      ],
      priceId: 'price_1RQwzbGeY0vAkyob0atMo7Um' // Actualizar con el nuevo precio ID de Stripe
    },
    {
      id: 'installments',
      name: 'Plan en Cuotas',
      price: 375,
      installments: '2 pagos',
      totalPrice: 750, // Total de ambos pagos
      description: 'Mismo contenido, pagos flexibles',
      features: [
        'Acceso inmediato a todos los materiales',
        'Taller virtual en vivo, grabación incluída',
        'Plantilla modelo de matriz de riesgo',
        'Sesiones de seguimiento durante un mes',
        'Taller oficial',
        'Todos los bonos incluidos',
        '📅 Flexibilidad de pago en 2 cuotas'
      ],
      priceId: 'price_1RQxBuGeY0vAkyobIu1kIQwF' // Actualizar con el nuevo precio ID de Stripe
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Elige la opción que mejor se adapte a tus necesidades
          </p>
          
          {/* Recordatorio de fecha límite */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-red-700">
              <FaCalendarAlt className="mr-2" />
              <span className="font-bold">OFERTA VÁLIDA HASTA EL 20 DE JUNIO DE 2025</span>
            </div>
            <p className="text-sm text-red-600 mt-1">
              Después de esta fecha, el precio aumentará. ¡Aprovecha ahora!
            </p>
          </div>
        </motion.div>
        
        {/* Comparación de precios destacada */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
              💰 Compara y Ahorra
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md border-2 border-green-300">
                  <h4 className="font-bold text-green-700">Pago Único</h4>
                  <div className="text-3xl font-bold text-green-600">$575</div>
                  <p className="text-sm text-gray-600">Un solo pago</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    AHORRAS $175
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-md border-2 border-blue-300">
                  <h4 className="font-bold text-blue-700">Plan en Cuotas</h4>
                  <div className="text-3xl font-bold text-blue-600">$375</div>
                  <p className="text-sm text-gray-600">x 2 pagos = $750 total</p>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    MAYOR FLEXIBILIDAD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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
        
        {/* Sección de métodos de pago */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Opciones de Pago Disponibles
            </h3>
            <p className="text-gray-600">
              Ofrecemos múltiples formas de pago para tu comodidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-green-200">
              <FaCreditCard className="text-4xl text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Tarjeta de Crédito/Débito</h4>
              <p className="text-sm text-gray-600 mb-4">Visa, Mastercard, American Express</p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                PAGO INMEDIATO
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-blue-200">
              <FaUniversity className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Transferencia Local</h4>
              <p className="text-sm text-gray-600 mb-4">Cuentas en varios países</p>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                CONTACTA ASESOR
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md border-2 border-purple-200">
              <FaGlobe className="text-4xl text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-800 mb-2">Transferencia Internacional</h4>
              <p className="text-sm text-gray-600 mb-4">Wire transfer mundial</p>
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                CONTACTA ASESOR
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            <FaCreditCard className="inline-block mr-2" />
            Pago con Tarjeta - Completa tu Registro
          </h3>
          
          {/* Resumen del plan seleccionado */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-gray-800">
                  {plans.find(p => p.id === selectedPlan)?.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {selectedPlan === 'installments' ? 
                    `$${plans.find(p => p.id === selectedPlan)?.price} x 2 pagos = $${plans.find(p => p.id === selectedPlan)?.totalPrice} total` :
                    'Pago único'
                  }
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">
                  ${plans.find(p => p.id === selectedPlan)?.price}
                </div>
                {selectedPlan === 'regular' && (
                  <div className="text-sm text-green-600 font-semibold">
                    Ahorras $175
                  </div>
                )}
              </div>
            </div>
          </div>
          
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
                  <option value="AR">Argentina</option>
                  <option value="BO">Bolivia</option>
                  <option value="BR">Brasil</option>
                  <option value="CA">Canadá</option>
                  <option value="CL">Chile</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CU">Cuba</option>
                  <option value="EC">Ecuador</option>
                  <option value="SV">El Salvador</option>
                  <option value="GT">Guatemala</option>
                  <option value="HN">Honduras</option>
                  <option value="NI">Nicaragua</option>
                  <option value="PA">Panamá</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Perú</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="DO">República Dominicana</option>
                  <option value="SR">Suriname</option>
                  <option value="UY">Uruguay</option>
                  <option value="US">Estados Unidos</option>
                  <option value="VE">Venezuela</option>
                  <option value="GY">Guyana</option>
                  <option value="MX">México</option>
                  <option value="BZ">Belice</option>
                </select>
              </div>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                <p>{error}</p>
              </div>
            )}
            
            {/* Banner adicional de urgencia antes del botón */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center text-yellow-800 mb-2">
                <FaCalendarAlt className="mr-2" />
                <span className="font-bold">¡ÚLTIMOS DÍAS DE OFERTA!</span>
              </div>
              <p className="text-sm text-yellow-700">
                Esta promoción especial termina el <strong>20 de junio de 2025</strong>. 
                Después de esta fecha el precio aumentará significativamente.
              </p>
            </div>
            
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
                    PAGAR CON TARJETA - ${plans.find(p => p.id === selectedPlan)?.price}
                  </>
                )}
              </button>
              <p className="flex items-center justify-center mt-4 text-sm text-gray-500">
                <FaLock className="mr-2" /> Pago 100% seguro con encriptación SSL
              </p>
              
              {/* Recordatorio final de la fecha */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-600">
                  🕒 Oferta válida hasta el 20 de junio de 2025 • Precio regular después: $750
                </p>
              </div>
            </div>
          </form>
        </div>
        
        {/* Métodos de pago alternativos */}
        <AlternativePaymentMethods />
      </div>
    </section>
  );
};

export default PricingSection;
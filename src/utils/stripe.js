import { loadStripe } from '@stripe/stripe-js';

// Reemplaza la clave de prueba por la que te proporcionó el cliente
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default stripePromise;
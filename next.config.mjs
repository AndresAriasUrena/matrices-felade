// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    },
    output: 'export', // Mantener la exportación estática
    reactStrictMode: true,
    images: {
      unoptimized: true, // Necesario para exportación estática
      domains: [
        'assets.brevo.com',
        'localhost',
        'felade.aurigital.com',
        'matrices.felade.org',
      ],
    },
    // Las configuraciones de headers no funcionan en sitios estáticos,
    // ya que dependen del servidor para establecer los headers
  };
  
  // Usar sintaxis de ES Modules para exportar (en archivos .mjs)
  export default nextConfig;
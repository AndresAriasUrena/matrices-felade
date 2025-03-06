// src/components/landing/BrevoFormEmbed.js
"use client"; // Marcador para componente cliente

import React from 'react';

const BrevoFormEmbed = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-4">
      {/* Eliminamos los encabezados duplicados que ya existen en la página principal */}
      
      <div 
        className="brevo-form-container"
        dangerouslySetInnerHTML={{ 
          __html: `
            <iframe 
              width="100%" 
              height="450" 
              src="https://sibforms.com/serve/MUIFABJBgJYE63SSpl21IIRZp9-bnX4qWpi18BW3orA8P4lZZTWm0o9fSeI7zIA5vp15EbRFG84ScI8gmzhGklCfNksIlX5gWKpRxCJLk3te4FXPwo_Vcy_8wzTorjn0fIPDZzulMjFZXd7o13jA4XzhPYlWHvOKIJ6wCjcEr8eOAORj4pcdeTxmd5xXljB8LGtRNkOzE6sfl5cn" 
              frameborder="0" 
              scrolling="auto" 
              allowfullscreen 
              style="display: block; margin-left: auto; margin-right: auto; max-width: 100%; min-height: 450px;"
            ></iframe>
          `
        }} 
      />

      {/* Añadimos CSS para ayudar a solucionar problemas de visualización */}
      <style jsx global>{`
        .brevo-form-container iframe {
          min-height: 500px;
          overflow: visible !important;
        }
        
        /* Intentar ocultar encabezados duplicados dentro del iframe */
        .brevo-form-container iframe body h3 {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default BrevoFormEmbed;
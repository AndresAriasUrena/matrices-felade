// Meta Pixel Code para sitios estáticos
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

// IMPORTANTE: Reemplazar 'TU_PIXEL_ID' con tu ID de Meta Pixel real
fbq('init', 'TU_PIXEL_ID');
fbq('track', 'PageView');

// Función para registrar eventos de conversión
function trackFormSubmission() {
  if (typeof fbq === 'function') {
    fbq('track', 'Lead');
    console.log('Conversión de formulario registrada en Meta Pixel');
  }
}

// Agregar al objeto window para poder llamarlo desde otros scripts
window.trackFormSubmission = trackFormSubmission;
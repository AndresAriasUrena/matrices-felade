// src/app/privacidad/page.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Política de Privacidad | FELADE',
  description: 'Política de privacidad para las capacitaciones sobre matrices de riesgo BC/FT/FPADM de FELADE',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="bg-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/images/logoblanco.png"
                alt="FELADE"
                width={120}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <Link href="/" className="text-white hover:underline">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-primary mb-6">Política de Privacidad</h1>
          <p className="text-gray-600 mb-4">Última actualización: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Introducción</h2>
              <p>
                FELADE ("nosotros", "nos" o "nuestro") opera el sitio web felade.org (el "Servicio"). 
                Esta página le informa sobre nuestras políticas relacionadas con la recolección, uso y 
                divulgación de datos personales cuando utiliza nuestro Servicio y las opciones que tiene 
                asociadas con esos datos.
              </p>
              <p>
                Utilizamos sus datos para proporcionar y mejorar el Servicio. Al utilizar el Servicio, 
                acepta la recolección y uso de información de acuerdo con esta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Recolección y Uso de Información</h2>
              <p>
                Recolectamos diferentes tipos de información para diversos propósitos con el fin de proporcionar 
                y mejorar nuestro Servicio.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Tipos de Datos Recolectados</h3>
              
              <h4 className="text-lg font-semibold text-primary mt-4 mb-2">Datos Personales</h4>
              <p>
                Mientras utiliza nuestro Servicio, podemos solicitarle que nos proporcione cierta información 
                de identificación personal que puede usarse para contactarlo o identificarlo ("Datos Personales"). 
                La información de identificación personal puede incluir, pero no está limitada a:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Dirección de correo electrónico</li>
                <li>Nombre y apellido</li>
                <li>Número de teléfono</li>
                <li>Cookies y datos de uso</li>
              </ul>

              <h4 className="text-lg font-semibold text-primary mt-4 mb-2">Datos de Uso</h4>
              <p>
                También podemos recopilar información sobre cómo se accede y utiliza el Servicio ("Datos de Uso"). 
                Estos Datos de Uso pueden incluir información como la dirección de Protocolo de Internet de su 
                computadora (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas de 
                nuestro Servicio que visita, la hora y fecha de su visita, el tiempo dedicado a esas páginas, 
                identificadores únicos de dispositivos y otros datos de diagnóstico.
              </p>

              <h4 className="text-lg font-semibold text-primary mt-4 mb-2">Seguimiento y Datos de Cookies</h4>
              <p>
                Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro 
                Servicio y mantener cierta información.
              </p>
              <p>
                Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador 
                único anónimo. Las cookies se envían a su navegador desde un sitio web y se almacenan en su 
                dispositivo. Las tecnologías de seguimiento también utilizadas son balizas, etiquetas y scripts 
                para recopilar y rastrear información y para mejorar y analizar nuestro Servicio.
              </p>
              <p>
                Puede instruir a su navegador para que rechace todas las cookies o para que le indique cuándo se 
                envía una cookie. Sin embargo, si no acepta cookies, es posible que no pueda utilizar algunas 
                partes de nuestro Servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Uso de Datos</h2>
              <p>FELADE utiliza los datos recopilados para diversos fines:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Para proporcionar y mantener nuestro Servicio</li>
                <li>Para notificarle sobre cambios en nuestro Servicio</li>
                <li>Para permitirle participar en funciones interactivas de nuestro Servicio cuando decida hacerlo</li>
                <li>Para proporcionar atención y soporte al cliente</li>
                <li>Para proporcionar análisis o información valiosa para que podamos mejorar el Servicio</li>
                <li>Para monitorear el uso del Servicio</li>
                <li>Para detectar, prevenir y abordar problemas técnicos</li>
                <li>Para enviarle noticias, ofertas especiales y información general sobre otros bienes, servicios y eventos que ofrecemos que son similares a los que ya ha comprado o consultado, a menos que haya optado por no recibir dicha información</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Divulgación de Datos</h2>
              <p>FELADE puede divulgar sus Datos Personales en la creencia de buena fe de que dicha acción es necesaria para:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Cumplir con una obligación legal</li>
                <li>Proteger y defender los derechos o propiedad de FELADE</li>
                <li>Prevenir o investigar posibles irregularidades en relación con el Servicio</li>
                <li>Proteger la seguridad personal de los usuarios del Servicio o del público</li>
                <li>Protegerse contra la responsabilidad legal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Seguridad de Datos</h2>
              <p>
                La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de 
                transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos 
                esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos Personales, 
                no podemos garantizar su seguridad absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Proveedores de Servicios</h2>
              <p>
                Podemos emplear a terceras empresas y personas para facilitar nuestro Servicio ("Proveedores de 
                Servicios"), para proporcionar el Servicio en nuestro nombre, para realizar servicios relacionados 
                con el Servicio o para ayudarnos a analizar cómo se utiliza nuestro Servicio.
              </p>
              <p>
                Estos terceros tienen acceso a sus Datos Personales sólo para realizar estas tareas en nuestro 
                nombre y están obligados a no divulgarlos ni utilizarlos para ningún otro propósito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Enlaces a Otros Sitios</h2>
              <p>
                Nuestro Servicio puede contener enlaces a otros sitios que no son operados por nosotros. Si hace 
                clic en un enlace de terceros, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente 
                que revise la Política de Privacidad de cada sitio que visite.
              </p>
              <p>
                No tenemos control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad 
                o las prácticas de sitios o servicios de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Cambios a Esta Política de Privacidad</h2>
              <p>
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier 
                cambio publicando la nueva Política de Privacidad en esta página.
              </p>
              <p>
                Se le recomienda revisar esta Política de Privacidad periódicamente para cualquier cambio. Los 
                cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Contáctenos</h2>
              <p>Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Por correo electrónico: info@felade.org</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* <footer className="bg-primary text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} FELADE. Todos los derechos reservados.</p>
        </div>
      </footer> */}
    </main>
  );
}
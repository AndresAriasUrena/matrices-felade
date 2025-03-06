// src/app/terminos/page.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Términos y Condiciones | FELADE',
  description: 'Términos y condiciones para las capacitaciones sobre matrices de riesgo BC/FT/FPADM de FELADE',
};

export default function TermsAndConditionsPage() {
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
          <h1 className="text-3xl font-bold text-primary mb-6">Términos y Condiciones</h1>
          <p className="text-gray-600 mb-4">Última actualización: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Introducción</h2>
              <p>
                Estos Términos y Condiciones ("Términos", "Términos y Condiciones") rigen el uso del sitio web 
                operado por FELADE ("nosotros", "nos" o "nuestro") y cualquier servicio relacionado.
              </p>
              <p>
                Al acceder o utilizar el Servicio, usted acepta estar obligado por estos Términos. Si no está de 
                acuerdo con alguna parte de los términos, entonces no tendrá acceso al Servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Comunicaciones</h2>
              <p>
                Al registrarse para acceder a nuestros seminarios web, clases o talleres, acepta recibir boletines 
                informativos, materiales de marketing y otras comunicaciones de nuestra parte. Sin embargo, puede 
                optar por no recibir algunas o todas estas comunicaciones de nuestra parte siguiendo el enlace para 
                cancelar la suscripción o siguiendo las instrucciones proporcionadas en cualquier correo electrónico 
                que le enviemos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Registro</h2>
              <p>
                Al registrarse para acceder a nuestros recursos gratuitos, usted se compromete a proporcionar 
                información precisa, actualizada y completa sobre usted como se solicita en nuestro formulario 
                de registro.
              </p>
              <p>
                La información que proporcione será tratada de acuerdo con nuestra Política de Privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Propiedad Intelectual</h2>
              <p>
                El Servicio y su contenido original, características y funcionalidad son y seguirán siendo 
                propiedad exclusiva de FELADE y sus licenciantes. El Servicio está protegido por derechos de 
                autor, marcas registradas y otras leyes de propiedad intelectual. Nuestras marcas comerciales y 
                nuestra imagen comercial no pueden utilizarse sin nuestro previo consentimiento por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Contenido del Curso</h2>
              <p>
                Todo el material educativo proporcionado en nuestros cursos, incluyendo pero no limitado a 
                videos, presentaciones, documentos, y otros recursos, están protegidos por derechos de autor. 
                El acceso a este contenido es exclusivamente para su uso personal y no comercial.
              </p>
              <p>
                Usted no puede copiar, modificar, distribuir, vender, alquilar, transmitir públicamente o crear 
                obras derivadas basadas en nuestro contenido, a menos que haya obtenido nuestro permiso por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Clases Gratuitas</h2>
              <p>
                Las clases gratuitas proporcionadas por FELADE tienen por objeto educar e informar. Aunque 
                proporcionamos estas clases sin costo, se requiere registro para acceder a estos recursos. 
                La disponibilidad y el contenido de estas clases gratuitas pueden cambiar sin previo aviso.
              </p>
              <p>
                Los materiales complementarios ofrecidos como parte de las clases gratuitas están sujetos a las 
                mismas protecciones de propiedad intelectual que nuestro contenido pago.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Participación en Webinars en Vivo</h2>
              <p>
                Durante los webinars en vivo, esperamos que los participantes mantengan un comportamiento profesional y respetuoso. FELADE se reserva el derecho de:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Moderar la discusión y las preguntas</li>
                <li>Eliminar a cualquier participante que demuestre comportamiento disruptivo o inapropiado</li>
                <li>Grabar las sesiones para uso futuro y referencia</li>
              </ul>
              <p>
                Al participar en nuestros webinars en vivo, usted reconoce que sus comentarios, preguntas y, 
                potencialmente, su imagen (si habilita su cámara) pueden ser grabados y utilizados por FELADE 
                para fines educativos y promocionales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Enlaces a Otros Sitios Web</h2>
              <p>
                Nuestro Servicio puede contener enlaces a sitios web de terceros o servicios que no son propiedad 
                o están controlados por FELADE.
              </p>
              <p>
                FELADE no tiene control ni asume responsabilidad alguna por el contenido, las políticas de privacidad o 
                las prácticas de sitios web o servicios de terceros. Usted reconoce y acepta que FELADE no será 
                responsable, directa o indirectamente, por cualquier daño o pérdida causada o supuestamente causada 
                por o en conexión con el uso o la confianza en dicho contenido, bienes o servicios disponibles en o 
                a través de dichos sitios web o servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Cambios</h2>
              <p>
                Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos 
                en cualquier momento. Si una revisión es importante, intentaremos proporcionar al menos un aviso 
                de 30 días antes de que los nuevos términos entren en vigor. Lo que constituye un cambio importante 
                se determinará a nuestra sola discreción.
              </p>
              <p>
                Si continúa accediendo o utilizando nuestro Servicio después de que las revisiones entren en vigor, 
                acepta estar obligado por los términos revisados. Si no está de acuerdo con los nuevos términos, ya 
                no está autorizado a usar el Servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Exclusión de Garantías</h2>
              <p>
                Nuestro Servicio se proporciona "tal cual" y "según disponibilidad". FELADE no otorga 
                garantías de ningún tipo, ya sean expresas o implícitas, incluyendo, pero no limitado a, 
                garantías implícitas de comerciabilidad, idoneidad para un propósito particular, no infracción 
                o rendimiento.
              </p>
              <p>
                FELADE no garantiza que a) el Servicio funcionará ininterrumpidamente, seguro o disponible en 
                cualquier momento o ubicación; b) se corregirán los errores o defectos; c) el Servicio estará 
                libre de virus u otros componentes dañinos; o d) los resultados del uso del Servicio cumplirán 
                con sus requisitos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Limitación de Responsabilidad</h2>
              <p>
                En ningún caso FELADE, ni sus directores, empleados, socios, agentes, proveedores o afiliados, 
                serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, 
                incluyendo sin limitación, pérdida de ganancias, datos, uso, buena voluntad, u otras pérdidas 
                intangibles, resultantes de (i) su acceso o uso o incapacidad de acceder o usar el Servicio; 
                (ii) cualquier conducta o contenido de cualquier tercero en el Servicio; (iii) cualquier contenido 
                obtenido del Servicio; y (iv) acceso no autorizado, uso o alteración de sus transmisiones o contenido, 
                ya sea basado en garantía, contrato, agravio (incluyendo negligencia) o cualquier otra teoría legal, 
                ya sea que hayamos sido informados o no de la posibilidad de tal daño.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">12. Contáctenos</h2>
              <p>Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos:</p>
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
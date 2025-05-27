import { RUBIK_SANS } from "@/app/utils/constants";
import styles from "./politica.module.css";

export default function Home() {
  return (
    <div className={RUBIK_SANS}>
      <Politica />
    </div>
  );
}

function Politica() {
  return (
    <div className={styles.container}>
      <section>
        <h1>Política de Privacidad</h1>
        <p>
          <strong>Última actualización:</strong> 27 de mayo de 2025
        </p>
        <p>
          Este Aviso de Privacidad de <strong>AcopiaTech</strong> describe cómo
          y por qué podemos acceder, recopilar, almacenar, usar y/o compartir
          ("procesar") su información personal cuando utiliza nuestros
          servicios, incluyendo:
        </p>
        <ul>
          <li>Descargar y utilizar nuestra aplicación móvil (AcopiaTech)</li>
          <li>Usar AcopiaTech para solicitudes de recolección en línea</li>
          <li>Interactuar con nosotros mediante ventas, marketing o eventos</li>
        </ul>
        <p>
          Si no está de acuerdo con nuestras políticas y prácticas, no use
          nuestros Servicios. Puede contactarnos en{" "}
          <a href="mailto:acopiatechdev@gmail.com">acopiatechdev@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>Resumen de Puntos Clave</h2>
        <ul>
          <li>No procesamos información sensible ni recibida de terceros.</li>
          <li>
            Usamos su información para operar y mejorar nuestros servicios.
          </li>
          <li>
            Podemos compartir información en situaciones específicas (como con
            Google Maps o por razones legales).
          </li>
          <li>Implementamos medidas de seguridad razonables.</li>
          <li>Usted tiene derechos sobre sus datos según su ubicación.</li>
        </ul>
      </section>

      <section>
        <h2>1. ¿Qué información recopilamos?</h2>
        <p>Recopilamos información personal como:</p>
        <ul>
          <li>Nombre</li>
          <li>Correo electrónico</li>
          <li>Teléfono</li>
          <li>Dirección</li>
          <li>Contraseña</li>
        </ul>
        <p>
          También podemos recopilar datos del dispositivo móvil como ubicación o
          notificaciones push.
        </p>
      </section>

      <section>
        <h2>2. ¿Cómo procesamos su información?</h2>
        <p>Usamos su información para:</p>
        <ul>
          <li>Crear y gestionar su cuenta</li>
          <li>Prestar servicios solicitados</li>
          <li>Realizar cobros y reembolsos</li>
          <li>Comunicarnos con usted</li>
          <li>Garantizar seguridad</li>
        </ul>
      </section>

      <section>
        <h2>3. ¿Cuándo y con quién compartimos su información?</h2>
        <ul>
          <li>En fusiones, ventas o adquisiciones</li>
          <li>Con APIs de Google Maps para funcionalidades de ubicación</li>
        </ul>
      </section>

      <section>
        <h2>4. ¿Usamos cookies?</h2>
        <p>
          Sí. Usamos cookies y tecnologías similares para analizar el tráfico,
          guardar preferencias y mostrar publicidad.
        </p>
      </section>

      <section>
        <h2>5. ¿Cuánto tiempo conservamos su información?</h2>
        <p>
          Conservamos sus datos mientras tenga una cuenta o sea necesario para
          los fines descritos.
        </p>
      </section>

      <section>
        <h2>6. ¿Cómo protegemos su información?</h2>
        <p>
          Aplicamos medidas técnicas y organizativas razonables. Sin embargo,
          ningún sistema es completamente seguro.
        </p>
      </section>

      <section>
        <h2>7. ¿Cuáles son sus derechos?</h2>
        <p>Usted puede:</p>
        <ul>
          <li>Acceder a sus datos</li>
          <li>Corregir o eliminar información</li>
          <li>Retirar su consentimiento</li>
        </ul>
      </section>

      <section>
        <h2>8. Controles para Do-Not-Track</h2>
        <p>
          Actualmente no respondemos a señales "Do-Not-Track" porque no existe
          un estándar universal definido.
        </p>
      </section>

      <section>
        <h2>9. Cambios en esta política</h2>
        <p>
          Podemos actualizar este aviso. Publicaremos la nueva fecha de
          actualización en la parte superior.
        </p>
      </section>

      <section>
        <h2>10. ¿Cómo contactarnos?</h2>
        <p>
          Correo:{" "}
          <a href="mailto:acopiatechdev@gmail.com">acopiatechdev@gmail.com</a>
        </p>
        <p>
          Dirección: Av. Universidad Santa Isabel, Coatzacoalcos, Veracruz
          96538, México
        </p>
      </section>

      <section>
        <h2>11. ¿Cómo revisar, actualizar o eliminar sus datos?</h2>
        <p>
          Puede presentar una solicitud a través de este formulario:&nbsp;
          <a
            href="https://app.termly.io/notify/e75d7002-08e3-41ae-9f2f-f2ce8df27e70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitud de acceso de datos
          </a>
        </p>
      </section>
    </div>
  );
}

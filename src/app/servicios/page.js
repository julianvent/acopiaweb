import AppItem from "@/app/components/appItem";
import styles from "./recoleccion.module.css";
import { RUBIK_SANS } from "@/app/utils/constants";

export default function Home() {
  return (
    <div className={RUBIK_SANS}>
      <App />
      <Acopio />
      <Kits />
    </div>
  );
}

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.info}>
        <h1>AcopiaTech App</h1>
        <p>
          Para facilitar el proceso de recolección de dispositivos electrónicos,
          desarrollamos la aplicación oficial de AcopiaTech. A través de ella
          podrás solicitar recolecciones en línea desde tu dispositivo móvil.
          Nuestro equipo se encargará de mantenerte actualizado a lo largo de
          este proceso.
        </p>
        <h2>¡Descarga ahora la app!</h2>
      </div>
      <div className={styles.appCarrousel}>
        <AppItem img="img/crear-cuenta-t.png" footer="Crea una cuenta" />
        <AppItem
          img="img/crear-recoleccion-t.png"
          footer="Solicita una recolección"
        />
        <AppItem
          img="img/detalle-recoleccion-t.png"
          footer="Consulta el estado de la recolección"
        />
      </div>
    </div>
  );
}

function Acopio() {
  return (
    <div className={styles.acopioContainer}>
      <div className={styles.acopioInfo}>
        <h1>Centros de acopio</h1>
        <div>

        </div>
      </div>
    </div>
  );
}

function Kits() {
  return (
    <div className={styles.kitsContainer}>
      <div className={styles.info}>
        <h1>Kits de limpieza</h1>
        <p>
          En AcopiaTech creemos que alargar la vida útil de tus dispositivos
          electrónicos es una forma efectiva de cuidar el medio ambiente. Por
          eso, desarrollamos dos tipos de kits de limpieza diseñados para
          mantener tus celulares, laptops y tabletas en óptimas condiciones.
        </p>
      </div>
      <div className={styles.kit}>
        <div className={styles.imgContainer}>
          <img src="img/kit.png" alt="" />
        </div>
        <p>
          Nuestro <b>kit básico</b> incluye herramientas esenciales como paño de
          microfibra, líquido limpiador, hisopos, cepillos y toallas
          desinfectantes, ideales para una limpieza segura y accesible.
          <br/><br/>
          Para quienes buscan un cuidado más especializado, el{" "}
          <b>kit premium </b>
          incorpora aire comprimido, gamuza de alta calidad, cinta de baja
          adherencia y guantes de microfibra, entre otros aditamentos.
        </p>
      </div>
    </div>
  );
}

import AppItem from "@/app/components/appItem";
import styles from "./recoleccion.module.css";
import { RUBIK_SANS } from "@/app/utils/constants";

export default function Home() {
  return (
    <div className={RUBIK_SANS}>
      <App />
      <Acopio />
    </div>
  );
}

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.appInfo}>
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
      </div>
    </div>
  );
}

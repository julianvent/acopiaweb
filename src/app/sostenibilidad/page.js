import { RUBIK_SANS } from "@/app/utils/constants";
import styles from "./sostenibilidad.module.css"

export default function Home() {
  return (
    <div className={RUBIK_SANS}>
      <Diagram />
      <Podcast />
    </div>
  );
}

function Diagram() {
  return (
    <div className={styles.diagramContainer}>
      <h1>Conoce el ciclo de acopio</h1>
      <div className={styles.mediaContainer}>
        <img src="img/ciclo-acopio.png" alt="" />
      </div>
    </div>
  );
}

function Podcast() {
  return (
    <div className={styles.podcastContainer}>
      <h1>Escucha nuestro podcast</h1>
    </div>
  );
}

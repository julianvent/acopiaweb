import { RUBIK_SANS } from "@/app/utils/constants";
import styles from "./Home.module.css";
import AppItem from "@/app/components/appItem";

export default function Home() {
  return (
    <div className={RUBIK_SANS}>
      <Intro />
      <Identity />
      <App />
    </div>
  );
}

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={`${styles.imgContainer}`}>
        <img src="img/electronic_waste.jpg" alt="" className={styles.img} />
      </div>
      <div className={styles.info}>
        <h1>Contaminación electrónica</h1>
        <p>
          En un mundo cada vez más dependiente de la tecnología, el crecimiento
          exponencial en el uso de dispositivos electrónicos ha traído consigo
          un desafío importante: el manejo de los residuos electrónicos, también
          conocidos como e-waste.
        </p>
      </div>
    </div>
  );
}

function Identity() {
  return (
    <div className={styles.identityContainer}>
      <h1>Identidad y compromiso</h1>
      <section className={styles.identityItemsContainer}>
        <IdentityItem
          img="img/seedling-solid.svg"
          title="Compromiso con el medio ambiente"
          description="La promoción del reciclaje, reuso y desecho correcto de los dispositivos ayuda significativamente al entorno ecológico y reduce las consecuencias que la contaminación podría traer."
        />
        <IdentityItem
          img="img/recycle-solid.svg"
          title="Alternativas de reciclaje"
          description="Implica adoptar medidas que promuevan una gestión responsable y sostenible de los residuos tecnológicos tal y como ofrecemos la recolección en centros y a domicilio."
        />
        <IdentityItem
          img="img/people-arrows-solid.svg"
          title="Nuevas generaciones"
          description="Nos preocupamos por el estado en que se encuentre el planeta a nivel global y con tu grano de arena aseguramos la reducción considerable de residuos en la zona procurando el bienestar de las generaciones futuras."
        />
      </section>
    </div>
  );
}

function IdentityItem({ img, title, description }) {
  return (
    <div className={styles.identityItem}>
      <div className={styles.identityImgContainer}>
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.info}>
        <h1>Nuestra aplicación móvil, disponible para Android</h1>
        <p>
          En AcopiaTech nos preocupamos por la innovación. ¡Descarga ahora la
          app oficial para solicitar recolecciones desde tu dispositivo móvil!
        </p>
        <a href="servicios">Ver más</a>
      </div>
      <div>
        <AppItem img="img/detalle_recoleccion_mock.png" />
      </div>
    </div>
  );
}

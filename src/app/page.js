import { RUBIK_SANS } from "@/app/utils/constants";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={RUBIK_SANS}>
      <Intro />
      <Identity />
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
          description="En un mundo cada vez más dependiente de la tecnología, el crecimiento exponencial en el uso de dispositivos electrónicos ha traído consigo un desafío importante: el manejo de los residuos electrónicos, también conocidos como e-waste."
        />
        <IdentityItem
          img="img/recycle-solid.svg"
          title="Alternativas de reciclaje"
          description="En un mundo cada vez más dependiente de la tecnología, el crecimiento exponencial en el uso de dispositivos electrónicos ha traído consigo un desafío importante: el manejo de los residuos electrónicos, también conocidos como e-waste."
        />
        <IdentityItem
          img="img/people-arrows-solid.svg"
          title="Nuevas generaciones"
          description="En un mundo cada vez más dependiente de la tecnología, el crecimiento exponencial en el uso de dispositivos electrónicos ha traído consigo un desafío importante: el manejo de los residuos electrónicos, también conocidos como e-waste."
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

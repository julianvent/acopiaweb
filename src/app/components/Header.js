import styles from "./Header.module.css";
import { RUBIK_SANS } from "../utils/constants";

export default function Header() {
  return (
    <header className={`${styles.headerContainer} ${RUBIK_SANS}`}>
      <a href="/">
        <div className={styles.imgContainer}>
          <img src="img/logo_acopiatech.png" alt="" className={styles.img} />
        </div>
      </a>
      <ul className={styles.navList}>
        <li>
          <a href="/recoleccion" className={styles.item}>
            Recolección
          </a>
        </li>
        <li>
          <a href="/sostenibilidad" className={styles.item}>
            Sostenibilidad
          </a>
        </li>
        <li>
          <a href="/nosotros" className={styles.item}>
            Nosotros
          </a>
        </li>
      </ul>
    </header>
  );
}

"use client"

import styles from "./Header.module.css";
import { RUBIK_SANS } from "../utils/constants";
import { useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const changeVisibility = () => {
    setVisible(!visible);
  };

  return (
    <header className={`${styles.headerContainer} ${RUBIK_SANS}`}>
      <a href="home">
        <div className={styles.imgContainer}>
          <img src="img/logo_acopiatech.png" alt="" className={styles.img} />
        </div>
      </a>

      <button
        className={styles.mobileNavToggle}
        onClick={changeVisibility}
        data-visible={visible}
      ></button>

      <nav>
        <ul className={styles.navList} data-visible={visible}>
          <li>
            <a href="servicios" className={styles.item}>
              Servicios
            </a>
          </li>
          <li>
            <a href="sostenibilidad" className={styles.item}>
              Sostenibilidad
            </a>
          </li>
          <li>
            <a href="nosotros" className={styles.item}>
              Nosotros
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

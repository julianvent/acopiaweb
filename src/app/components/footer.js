import styles from "./footer.module.css";
import { RUBIK_SANS } from "@/app/utils/constants";

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${RUBIK_SANS}`}>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/people/AcopiaTech/61576920386057/"
            target="_blank"
          >
            <div className={styles.imgContainer}>
              <img src="img/facebook-brands.svg" alt="facebook" />
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/acopiatechdev/" target="_blank">
            <div className={styles.imgContainer}>
              <img src="img/square-instagram-brands.svg" alt="facebook" />
            </div>
          </a>
        </li>
        <li>
          <strong>acopiatechdev@gmail.com</strong>
        </li>
        <a href="/politica">Política de privacidad</a>
      </ul>
    </footer>
  );
}

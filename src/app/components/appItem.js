import styles from "./appItem.module.css";

export default function AppItem({ img, footer = "" }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt=""/>
      </div>
      <h2>{footer}</h2>
    </div>
  );
}

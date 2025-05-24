import { RUBIK_SANS } from "@/app/utils/constants";
import styles from "./nosotros.module.css";

export default function Home() {
  return (
    <div className={RUBIK_SANS}>
      <div className={styles.imgContainer}>
        <img src="img/logo_acopiatech.png" alt="" />
      </div>
      <SectionParagraph
        title="Misión"
        content="AcopiaTech es una empresa que surge como respuesta a la problemática de la contaminación ambiental generada por los dispositivos digitales y su creciente demanda debido a las necesidades personales, laborales y educativas de la sociedad actual. Por tal razón, es una entidad dedicada a la recolección de dispositivos digitales en desuso, para repararlos y reincorporarlos al mercado, prolongando así su vida útil. De esta manera, contribuye a la disminución de la contaminación derivada de los desechos tecnológicos en la ciudad de Coatzacoalcos. Su nombre es creado a partir de su esencia como entidad, fusionando las palabras “Acopio” y “tecnología”, lo que describe su actividad principal."
      />
      <SectionParagraph
        title="Visión"
        content="Ser reconocidos a nivel regional por la calidad de los productos reparados, la eficiencia y organización en la recolección de dispositivos tecnológicos, y el compromiso con un futuro sostenible, en un plazo de cinco años. Además, la empresa busca ser autosuficiente, rentable, contar con instalaciones propias y mantener una capacidad de mejoramiento constante."
      />
      <Objectives />
    </div>
  );
}

function SectionParagraph({ title, content }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

function Objectives() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h1>Objetivos</h1>
        <div className={styles.objectiveList}>
          <div>
            <h2>A corto plazo</h2>
            <ul>
              <li>
                Recolectar dispositivos electrónicos en desuso mediante
                donaciones o hallazgos para fomentar la conciencia ecológica y
                darles un nuevo uso.
              </li>
              <li>
                Establecer alianzas con empresas especializadas en la
                recuperación de minerales valiosos presentes en el hardware,
                generando beneficios económicos y ambientales.
              </li>
            </ul>
          </div>
          <div>
            <h2>A mediano plazo</h2>
            <ul>
              <li>
                Promover el reciclaje, reúso y desecho responsable de
                electrónicos a través de contenido informativo en nuestras redes
                y página web.
              </li>
              <li>
                Realizar campañas y cursos de concientización adaptados a
                diferentes públicos para incentivar el uso de centros de
                recolección.
              </li>
              <li>
                Desarrollar una guía de mantenimiento para alargar la vida útil
                de los dispositivos y reducir el desecho innecesario.
              </li>
            </ul>
          </div>
          <div>
            <h2>A largo plazo</h2>
            <ul>
              <li>
                Transformar los residuos electrónicos en una fuente de valor
                económico mediante la recuperación y comercialización de
                componentes con minerales valiosos.
              </li>
              <li>
                Impulsar la conciencia ambiental mediante campañas periódicas
                que informen sobre el impacto de los desechos electrónicos en la
                salud del planeta.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

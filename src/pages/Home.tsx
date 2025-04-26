import styles from "./Home.module.css";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaFilePdf } from "react-icons/fa";
import fotoAdri from '../assets/fotoAdri.png'
function Home() {
  return (
    <div className={styles["main-cont"]}>
      <div className={styles["left-cont"]}>
        <img
          className={styles["left-cont__image"]}
          src={fotoAdri} alt="Foto Adri"
        />
      </div>
      <div className={styles["right-cont"]}>
        <div className={styles["right-cont__titles"]}>
          <h1 className={styles["right-cont__h1"]}>Desarrollador <span className={styles["right-cont__span"]}>web</span></h1>
          <h3 className={styles["right-cont__h3"]}>Especialista en <span className={styles["right-cont__span"]}>frontend</span></h3>
        </div>
        <div className={styles["container"]}>
          {/* Botón de LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adriàberjaga"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["button"]} ${styles["btn-linkedin"]}`}
            title="LinkedIn"
          >
            <FaLinkedin className={styles.icon} />
          </a>

          {/* Botón de WhatsApp */}
          <a
            href="https://wa.me/34685533110?text=Hola,%20quiero%20hablar%20contigo!
"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles["button"]} ${styles["btn-was"]}`}
            title="WhatsApp"
          >
            <FaWhatsapp className={styles.icon} />
          </a>

          {/* Botón de Correo */}
          <a
            href="mailto:adriabdd@gmail.com"
            className={`${styles["button"]} ${styles["btn-mail"]}`}
            title="Correo"
          >
            <FaEnvelope className={styles.icon} />
          </a>

          {/* Botón de Currículum */}
          <a
             href="/CV-AdriaBerjaga.png"
             download="CV-AdriaBerjaga.png"
             rel="noopener noreferrer"
             className={`${styles["button"]} ${styles["btn-cv"]}`}
             title="Descargar CV"
          >
            <FaFilePdf className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

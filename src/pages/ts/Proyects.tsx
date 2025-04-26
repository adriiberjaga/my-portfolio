import  { useEffect, useState } from "react";
import styles from "../css/Proyects.module.css";
import { projects } from "../../projects/Projects";

import close from "../../assets/close-icon.png";
import "aos/dist/aos.css";
import AOS from "aos";

function Proyects() {
  const [openCard, setOpenCard] = useState<string | null>(null);
  const opCard = (project: string) => {
    setOpenCard(project);
  };
  const closeCard = () => {
    setOpenCard(null);
  };
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true); // Activa la animación de cierre
    setTimeout(() => {
      closeCard(); // Cierra el modal después de la animación
      setIsClosing(false); // Restablece el estado
    }, 500); // Asegúrate de que el tiempo coincide con la duración de la animación
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <>
      <div className={styles.content}>
        <h3 className={styles.title}>Proyectos</h3>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div
              data-aos="flip-left"
              key={index}
              className={styles["project-card"]}
            >
              <img
                className={styles["project-card__img"]}
                src={project.image}
                alt={project.title}
                title="Ver más"
                onClick={() => setOpenCard(project.title)}
              />
              <h3 className={styles["project-card__title"]}>{project.title}</h3>
              <div className={styles["languages"]}>
                {project.languages.map((language, idx) => (
                  <img
                    key={idx}
                    src={language.icon}
                    alt={language.name}
                    title={language.name}
                    className={styles["language-icon"]}
                    
                  />
                ))}
              </div>
              <p className={styles["project-card__desc"]}>  {project.desc.length > 20 ? `${project.desc.slice(0, 70)}...` : project.desc}
              </p>
              <button
                onClick={() => setOpenCard(project.title)}
                className={styles["project-card__ver"]}
                title="Ver más"
              >
                Ver más..
              </button>
              <a
                className={styles["project-card__btn"]}
                href={project.ref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar sitio web
              </a>
            </div>
          ))}
        </div>
      </div>
      {openCard && (
        <div
          data-aos={isClosing ? "zoom-in" : "zoom-in"}
          data-aos-duration="500"
          className={`${styles["modal"]} ${isClosing ? styles["closing"] : ""}`}
          onClick={closeCard}
        >
          <div
            className={styles["modal-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={styles["modal-title"]}>{openCard}</h2>
            <div className={styles["modal-img"]}>
              {projects.find((project) => project.title === openCard)
                ?.image && (
                <img
                  src={
                    projects.find((project) => project.title === openCard)
                      ?.image
                  }
                  alt={openCard}
                  className={styles["modal-img__content"]}
                />
              )}
            </div>
            <div className={styles["languages"]}>
              {projects
                .find((project) => project.title === openCard)
                ?.languages.map((language, idx) => (
                  <img
                    key={idx}
                    src={language.icon}
                    alt={language.name}
                    title={language.name}
                    className={styles["language-icon"]}
                  />
                ))}
            </div>
            <p className={styles["description"]}>
              {projects.find((project) => project.title === openCard)?.desc}
            </p>
            <button
              title="close"
              onClick={handleClose}
              className={styles["modal-close"]}
            >
              <img className={styles.closebtn} src={close} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Proyects;

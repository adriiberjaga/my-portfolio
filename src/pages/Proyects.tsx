import React, { useEffect, useState } from "react";

import styles from "./Proyects.module.css";

import "aos/dist/aos.css";
import AOS from "aos";

import fotoAngular from "../assets/angular-icon.png";
import fotoCss from "../assets/css-icon.png";
import fotoHtml from "../assets/html-icon.png";
import fotoReact from "../assets/react-icon.png";
import fotoTs from "../assets/ts-icon.png";
import todolist from "../assets/todolist.png";
import ecomerce from "../assets/ecomerce.png";
import close from "../assets/close-icon.png";
import ecomerce2 from "../assets/hym.png"
import acuario from '../assets/acuario.png'
// Mover la interfaz fuera del componente
interface Project {
  image: string;
  title: string;
  languages: { name: string; icon: string }[];
  desc: string;
  ref: string;
}

// Mover los datos fuera del componente
const projects: Project[] = [
  {
    image: todolist,
    title: "Todo list",
    languages: [
      { name: "React", icon: fotoReact },
      { name: "TypeScript", icon: fotoTs },
    ],
desc: "Aplicación interactiva para gestionar tareas, que permite agregar, completar y eliminar elementos con una interfaz intuitiva. Incluye almacenamiento local para preservar las tareas al recargar la página.",
    ref: "https://to-do-list-react-kappa-roan.vercel.app/",
  },
  {
    image: ecomerce,
    title: "Ecommerce",
    languages: [
      { name: "React", icon: fotoReact },
      { name: "TypeScript", icon: fotoTs },
    ],
    desc: "Plataforma de ecommerce ficticia donde los usuarios pueden explorar productos, agregar artículos al carrito y gestionar el contenido del mismo con una experiencia fluida y dinámica.",
    ref: "https://react-ecommerce-kappa-navy.vercel.app/",
  },
  {
    image: ecomerce2,
    title: "Ecommerce ",
    languages: [
      { name: "React", icon: fotoReact },
      { name: "TypeScript", icon: fotoTs },
    ],
    desc: "Versión mejorada de un ecommerce, con patrones de diseño optimizados y funcionalidades avanzadas, proporcionando una experiencia de usuario refinada y mejor manejo del estado global. (Pendiente de terminar la funcionabilidad del carrito y las secciones 'KIDS' y 'BEAUTY')",
    ref: "https://ecommerce-hym.vercel.app/",
  },
  {
    image: acuario,
    title: "Web acuario",
    languages: [
      { name: "React", icon: fotoReact },
      { name: "TypeScript", icon: fotoTs },
    ],
    desc: "Un sitio web dinámico y visualmente atractivo diseñado para amantes de los acuarios, donde los usuarios pueden explorar una amplia variedad de especies de peces, plantas acuáticas y equipos de mantenimiento.(Página en proceso)",
    ref: "https://web-acuario.vercel.app/",
  },
];

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

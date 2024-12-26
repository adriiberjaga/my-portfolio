import React, { useEffect } from "react";
import styles from "./Proyects.module.css";
import "aos/dist/aos.css";
import AOS from "aos";
import fotoAngular from '../assets/angular-icon.png'
import fotoCss from '../assets/css-icon.png'
import fotoHtml from '../assets/html-icon.png'
import fotoReact from '../assets/react-icon.png'
import fotoTs from '../assets/ts-icon.png'

function Proyects() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  interface Project {
    image: string;
    title: string;
    languages: { name: string; icon: string }[]; // Estructura de lenguajes
    desc: string;
  }

  const projects: Project[] = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "Proyecto 1",
      languages: [
        { name: "React", icon: fotoReact },
        { name: "TypeScript", icon: fotoTs },
        { name: "Node.js", icon: "https://via.placeholder.com/30" },
      ],
      desc: "Descripción del Proyecto 1",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "Proyecto 2",
      languages: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/npm/@iconscout/unicons/svg/python.svg" },
        { name: "Django", icon: "https://via.placeholder.com/30" },
        { name: "PostgreSQL", icon: "https://via.placeholder.com/30" },
      ],
      desc: "Descripción del Proyecto 2",
    },
  ];

  return (
    <div className={styles.content}>
      <h3 className={styles.title}>Proyectos</h3>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div data-aos="flip-left" key={index} className={styles["project-card"]}>
            <img className={styles["project-card__img"]} src={project.image} alt={project.title} />
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
            <p className={styles["project-card__desc"]}>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyects;

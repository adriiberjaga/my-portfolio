import stylesA from "./About.module.css";
import fotoAdri from "../assets/fotoAdri.png";

function About() {
  return (
    <>
      <div className={stylesA["about"]}>
      <h2 className={stylesA["title2"]}>Sobre mí</h2>
        <div className={stylesA["about-info"]}>
          <h2 className={stylesA["title"]}>Sobre mí</h2>
          <p className={stylesA["about-text"]}>
            Hola, mi nombre es Adrià Berjaga y llevo más de un año enfocado en
            el desarrollo frontend, especializándome en React. Desde que me
            gradué en Desarrollo de Aplicaciones Web, estoy centrado en poner en
            práctica todo lo que voy aprendiendo, creando proyectos personales y
            buscando oportunidades para crecer profesionalmente.
          </p>
          <div className={stylesA["aboutContentBoxes"]}>
            <div className={`${stylesA.box} ${stylesA.aboutInfoLangs}`}>
              <h4 className={stylesA["aboutContentBoxesTitle"]}>
                Mis habilidades
              </h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Angular</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className={`${stylesA.box} ${stylesA.aboutInfoExperience}`}>
              <h4 className={stylesA["aboutContentBoxesTitle"]}>
                Estudios
              </h4>
              <ul>
                <li>Curso fronend 380h</li>
              </ul>
            </div>
            <div className={`${stylesA.box} ${stylesA.aboutInfoExperience}`}>
              <h4 className={stylesA["aboutContentBoxesTitle"]}>
                Experiencia
              </h4>
              <ul>
                <li>Curso fronend 380h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={stylesA["aboutImage"]}>
          <img src={fotoAdri} alt="asdas" />
        </div>
      </div>
    </>
  );
}
export default About;
import stylesA from "./About.module.css";
import fotoAdri from "../assets/fotoAdri.png";
import AOS from 'aos';
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
            <div data-aos="flip-left" className={`${stylesA.box} ${stylesA.aboutInfoExperience}`}>
              <h4 className={stylesA["aboutContentBoxesTitle"]}>
                Estudios
              </h4>
              <ul>
                <li>- Bootcamp frontend 380h</li>
                <li>- Curso superior en programación de páginas web (Cursando actualmente en MASTER D)</li>
                <li>- Bootcamp Full Stack +700h (Cursando actualmente )</li>
              </ul>
            </div>
            <div data-aos="flip-left" className={`${stylesA.box} ${stylesA.aboutInfoExperience}`}>
              <h4 className={stylesA["aboutContentBoxesTitle"]}>
              Experiencia
              </h4>
              <ul>
                <li>- Desarrollador Web Freelance (2024-Actual)</li>
                <li>- Proyectos personales para clientes hechos con React (2024-Actual)</li>
              </ul>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className={stylesA["aboutImage"]}>
          <img src={fotoAdri} alt="asdas" />
        </div>
      </div>
    </>
  );
}
export default About;

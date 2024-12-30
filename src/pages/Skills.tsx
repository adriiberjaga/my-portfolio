import { useEffect } from "react";
import { useState } from "react";

import "aos/dist/aos.css";
import AOS from "aos";

import styles from "./Skills.module.css";
import fotoAngular from "../assets/angular-icon.png";
import fotoCss from "../assets/css-icon.png";
import fotoHtml from "../assets/html-icon.png";
import fotoReact from "../assets/react-icon.png";
import fotoTs from "../assets/ts-icon.png";
import fotoJs from "../assets/js-icon.png";
import close from "../assets/close-icon.png";

function Skills() {
  //pop up de skills
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedSkillImg, setSelectedSkillImg] = useState<string>("");
  const openSkill = (skill: string, img: string) => {
    setSelectedSkill(skill);
    setSelectedSkillImg(img);
  };
  
  const closeSkill = () => {
    setSelectedSkill(null);
  };
  const infoSkills = (skill: string) => {
    switch (skill) {
        case "HTML":
            return"Experiencia de 2 años";
        case "JavaScript":
            return"Experiencia de 1 año";
        case "HTML":
            return"Experiencia de 1 año";
        case "CSS":
            return"Experiencia de 1 año";
        case "TypeScript":
            return"Experiencia de 1 año";
        case "Angular":
            return"Experiencia de 1 año";
    }
  }
  //animaciones
  useEffect(() => {
    AOS.init({
      duration: 2300,
      once: false,
    });
  }, []);
  const getAnimation = (index: number) => {
    if (window.innerWidth <= 768) {
      return "fade-down";
    } else {
      switch (index) {
        case 0:
          return "fade-right";
        case 1:
          return "fade-down";
        case 2:
          return "fade-left";
        case 3:
          return "fade-up";
        default:
          return "fade-right";
      }
    }
  };


  return (
    <>

    <div className={styles.main}>
      <div className={styles.firstCont}>
        <div data-aos={getAnimation(0)} className={styles.iconContainer}>
          <img
            onClick={() => openSkill("HTML", fotoHtml)}
            className={styles.icons}
            src={fotoHtml}
            alt=""
          />
          <p className={styles.iconText}>HTML</p>
        </div>
        <div data-aos={getAnimation(1)} className={styles.iconContainer}>
          <img onClick={() => openSkill("JavaScript", fotoJs)} className={styles.icons} src={fotoJs} alt="" />
          <p className={styles.iconText}>JavaScript</p>
        </div>
        <div data-aos={getAnimation(2)} className={styles.iconContainer}>
          <img
            onClick={() => openSkill("CSS", fotoCss)}
            className={styles.icons}
            src={fotoCss}
            alt=""
          />
          <p className={styles.iconText}>CSS</p>
        </div>
      </div>
      <div className={styles.secondCont}>
        <div data-aos={getAnimation(0)} className={styles.iconContainer}>
          <img
            onClick={() => openSkill("React", fotoReact)}
            className={styles.icons}
            src={fotoReact}
            alt=""
          />
          <p className={styles.iconText}>React</p>
        </div>
        <div data-aos={getAnimation(3)} className={styles.iconContainer}>
          <img onClick={() => openSkill("TypeScript", fotoTs)} className={styles.icons} src={fotoTs} alt="" />
          <p className={styles.iconText}>TypeScript</p>
        </div>
        <div data-aos={getAnimation(2)} className={styles.iconContainer}>
          <img
            onClick={() => openSkill("Angular", fotoAngular)}
            className={styles.icons}
            src={fotoAngular}
            alt=""
          />
          <p className={styles.iconText}>Angular</p>
        </div>
      </div>
    </div>
    {selectedSkill && (
       <div className={styles.modalOverlay} onClick={closeSkill}>
       <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}
        data-aos="zoom-in" data-aos-duration="300">
       <img className={styles.modalContentImg} src={selectedSkillImg} alt="" />
         <h2>{selectedSkill}</h2>
         <p>
              {infoSkills(selectedSkill)}
         </p>
         <button title="close" onClick={closeSkill}><img className={styles.closebtn} src={close} alt="" /></button>
       </div>
     </div>  
    )}
    </>

  );
}
export default Skills;

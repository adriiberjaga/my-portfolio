import "aos/dist/aos.css";
import AOS from "aos";

import styles from './Skills.module.css';
import fotoAngular from '../assets/angular-icon.png';
import fotoCss from '../assets/css-icon.png';
import fotoHtml from '../assets/html-icon.png';
import fotoReact from '../assets/react-icon.png';
import fotoTs from '../assets/ts-icon.png';
import fotoJs from '../assets/js-icon.png';
import { useEffect } from "react";

function Skills() {

      useEffect(() => {
        AOS.init({
          duration: 2300,
          once: false,
        });
      }, []);
      const getAnimation = (index: number) => {
        if (window.innerWidth <= 768) { 
            return "fade-down";
        }  else {
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
         
    }
    return (
        <div className={styles.main}>
    <div className={styles.firstCont}>
        <div data-aos={getAnimation(0)} className={styles.iconContainer}>
            <img  className={styles.icons} src={fotoHtml} alt="" />
            <p className={styles.iconText}>HTML</p>
        </div>
        <div data-aos={getAnimation(1)} className={styles.iconContainer}>
            <img  className={styles.icons} src={fotoJs} alt="" />
            <p className={styles.iconText}>JavaScript</p>
        </div>
        <div data-aos={getAnimation(2)} className={styles.iconContainer}>
            <img  className={styles.icons} src={fotoCss} alt="" />
            <p className={styles.iconText}>CSS</p>
        </div>
    </div>        
    <div className={styles.secondCont}>
        <div data-aos={getAnimation(0)} className={styles.iconContainer}>
            <img  className={styles.icons} src={fotoReact} alt="" />
            <p className={styles.iconText}>React</p>
        </div>
        <div data-aos={getAnimation(3)} className={styles.iconContainer}>
            <img  className={styles.icons} src={fotoTs} alt="" />
            <p className={styles.iconText}>TypeScript</p>
        </div>
        <div data-aos={getAnimation(2)} className={styles.iconContainer}>
            <img  className={styles.icons} src={fotoAngular} alt="" />
            <p className={styles.iconText}>Angular</p>
        </div>
    </div>        
</div>
    );
}
export default Skills;

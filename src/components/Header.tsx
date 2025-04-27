import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Headroom from "react-headroom";
import { Link } from "react-scroll";

function Header() {

 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isHeadroomActive, setIsHeadroomActive] = useState(false);
 const [isDesktop, setIsDesktop] = useState(false);
 const [scrollOffset, setScrollOffset] = useState(-140);
 
 const toggleMenu = () => {
   setIsMenuOpen(!isMenuOpen);
 };

 // Efecto para manejar el responsive de Headroom y detectar desktop
 useEffect(() => {
   const checkScreenSize = () => {
     const width = window.innerWidth;
     setIsHeadroomActive(width <= 1000);
     setIsDesktop(width > 1000);
     if (width <= 480) {
       setScrollOffset(-340);
     } else if (width <= 768) {
       setScrollOffset(-380);
     } else if (width <= 1024) {
       setScrollOffset(-400);
     } else {
       setScrollOffset(-140);
     }
   };

   // Verificar tamaño inicial
   checkScreenSize();

   // Añadir event listener para cambios de tamaño
   window.addEventListener("resize", checkScreenSize);

   // Limpiar event listener
   return () => window.removeEventListener("resize", checkScreenSize);
 }, []);

 const menuItems = [
   { to: "home", label: "Inicio" },
   { to: "proyects", label: "Proyectos" },
   { to: "about", label: "Sobre mí" },
   { to: "skills", label: "Skills" },
   { to: "contact", label: "Contacto" },
 ];

 const renderLinks = (isMobile = false) => {
   return menuItems.map((item) => (
     <Link
       key={item.to}
       to={item.to}
       smooth={true}
       duration={500}
       offset={scrollOffset + (isMobile && isMenuOpen ? -600 : 0)}
       className={`
         ${styles["buttons"]} 
         ${isMobile ? "block px-3 py-2 rounded hover:bg-gray-700" : ""}
       `}
       activeClass={styles["active"]}
       spy={true}
       onClick={isMobile ? toggleMenu : undefined}
     >
       {item.label}
     </Link>
   ));
 };

 // Renderizado condicional de Headroom
 const NavContent = () => (
   <nav
     className={`
       ${styles.navbar} 
       text-white 
       ${isDesktop ? styles["desktop-navbar"] : ""}
     `}
   >
     <div
       className={`${styles["div-title"]} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
     >
       <div
         className={`${styles["div-heigh"]} flex items-center justify-between h-16`}
       >
         {/* Logo - Izquierda */}
         <div className="flex items-center">
           <span className={`${styles["title-name"]} ml-2 font-bold`}>
             Adrià Berjaga
           </span>
         </div>

         {/* Menú de Navegación - Versión Desktop */}
         <div className={`${styles["div-buttons"]} max-lg:hidden flex space-x-4`}>
           {renderLinks()}
         </div>

         {/* Botón Hamburguesa - Versión Mobile */}
         <div className="max-lg:block hidden">
           <button
             onClick={toggleMenu}
             className="text-white hover:text-gray-300 focus:outline-none"
           >
             {isMenuOpen ? (
               <X className="h-6 w-6" />
             ) : (
               <Menu className="h-6 w-6" />
             )}
           </button>
         </div>
       </div>

       {/* Menú Móvil Desplegable */}
       {isMenuOpen && (
         <div className="max-lg:block hidden">
           <div className={`${styles["div-header__height"]}px-2 pb-3 space-y-1 sm:px-3 text-center h-screen flex flex-col gap-5 pt-2`}>
             {renderLinks(true)}
           </div>
         </div>
       )}
     </div>
   </nav>
 );

 // Renderizado condicional
 return isHeadroomActive ? (
   <Headroom
     disableInlineStyles={false}
     pinStart={0}
     style={{
       zIndex: 1000,
       position: 'fixed',
       width: '100%',
     }}
     upTolerance={isMenuOpen ? 1000 : 1}
     downTolerance={isMenuOpen ? 1000 : 1}
   >
     <NavContent/>
   </Headroom>
 ) : (
   <NavContent />
 );
}

export default Header;
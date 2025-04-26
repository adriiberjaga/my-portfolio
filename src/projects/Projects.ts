import fotoReact from  '../assets/react.svg';
import fotoTs from "../assets/ts-icon.png";
import todolist from "../assets/todolist.png";
import ecomerce from "../assets/ecomerce.png";
import ecomerce2 from "../assets/hym.png"
import acuario from '../assets/acuario.png'
import ticTac from '../assets/tic-tac-toe.png'

 interface Project {
    image: string;
    title: string;
    languages: { name: string; icon: string }[];
    desc: string;
    ref: string;
  }
    export const projects: Project[] = [
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
      image:  acuario,
      title: "Web acuario",
      languages: [
        { name: "React", icon: fotoReact },
        { name: "TypeScript", icon: fotoTs },
      ],
      desc: "Un sitio web dinámico y visualmente atractivo diseñado para amantes de los acuarios, donde los usuarios pueden explorar una amplia variedad de especies de peces, plantas acuáticas y equipos de mantenimiento.(Página en proceso)",
      ref: "https://web-acuario.vercel.app/",
    },
    {
      image: ticTac,
      title: "Tic tac toe",
      languages: [
        { name: "React", icon: fotoReact },
        { name: "TypeScript", icon: fotoTs },
      ],
      desc: "Sitio web para jugar 3 en ralla para 2 personas, con un diseño minimalista y una interfaz intuitiva. Incluye un contador de victorias y empates para llevar un registro de los resultados.(Página en proceso)",
      ref: "https://tic-tac-toe-ten-navy.vercel.app/",
    },
  ];
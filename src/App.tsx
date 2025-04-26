import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Home from './pages/Home';
import Proyects from './pages/ts/Proyects';
import Skills from './pages/Skills';
function App() {

  const [isDark, setIsDark] = useState(true)

  
  useEffect(() => {
    AOS.init({  
      duration: 1200,
      once: false,  
    });
  }, []); 

  return (
    <div className='App' data-theme={isDark ? "dark" : "ligth"}>
      <Header />
            <main>
                <section data-aos="fade-down" id="home"><Home /></section>
                <section id="proyects"><Proyects /></section>
                <section id="about"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
            </main>
      <Footer /> 
    </div>
  )
}

export default App

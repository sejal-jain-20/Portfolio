import React from 'react';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Navbarfun from './Component/Navbar/Navbar';
import Project from './Component/Project/Project';
import Skills from './Component/Skills/Skills';
import Theme from './Component/Theme';
import TimelineConstructor from './Component/Timeline/Timeline';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import ScrollToTop from "react-scroll-to-top";



const App = () => {
  return (
    <>
    
              
      <Navbarfun />
      <Header />
      <About />
      <Skills />
      <TimelineConstructor />
       <Project/>
       <Theme/>
       <Contact/>
       <Footer/>
      
    </>
  );
}

export default App

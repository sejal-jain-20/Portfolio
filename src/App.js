import React from 'react';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Skills from './Component/Skills/Skills';
import TimelineConstructor from './Component/Timeline/Timeline';


const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <TimelineConstructor />
    </>
  )
}

export default App

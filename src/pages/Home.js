import React from 'react';
import Navbar from '../components/Navbar';
import Typewriter from '../components/Typewriter';
import Textanim from '../components/Textanim';
import About from '../components/About';
import Projects from '../components/Projects';
import Tech from '../components/Tech';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Textanim />
      <Typewriter />
      <About />
      <Projects />
      <Tech />
      <Footer />
    </>
  )
}

export default Home

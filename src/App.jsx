import { useState } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import 'smoothscroll-polyfill';

// Initialize the polyfill
window.__forceSmoothScrollPolyfill__ = true;

const App = () => {
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div>
        <Navigation scrollToSection={scrollToSection}/>
        <Hero />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
  )
}

export default App

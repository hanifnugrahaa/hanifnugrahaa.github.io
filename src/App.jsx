// src/App.jsx

import React, { useState, useEffect } from 'react';

// Impor semua komponen, termasuk AnimatedSection
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsList from './components/SkillsList';
import ProjectSlider from './components/ProjectSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection'; // <-- Impor di sini

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const body = document.body;
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="content-wrapper">
          <AnimatedSection id="about">
            <About />
          </AnimatedSection>
          <AnimatedSection id="skills">
            <SkillsList />
          </AnimatedSection>
          <AnimatedSection id="projects">
            <ProjectSlider />
          </AnimatedSection>
          <AnimatedSection id="contact">
            <Contact />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
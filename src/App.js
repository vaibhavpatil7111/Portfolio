import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';

import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode ? JSON.parse(savedMode) : true;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ScrollProgress />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />

          <Certifications />
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
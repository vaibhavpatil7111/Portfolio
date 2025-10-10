import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Web Developer', 'DevOps Engineer', 'Cloud Architect'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Vaibhav_Borse_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Vaibhav Borse</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl font-semibold mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 dark:text-gray-300"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building scalable applications and automating cloud infrastructure with modern DevOps practices
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              <FiDownload size={20} />
              Download Resume
            </motion.button>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-200"
            >
              <FiEye size={20} />
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://github.com/vaibhavpatil7111"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 transition-colors duration-200"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/vaibhavborse"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 transition-colors duration-200"
            >
              <FiLinkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
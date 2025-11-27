import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiGithub, FiLinkedin, FiCode, FiServer, FiCloud } from 'react-icons/fi';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    { text: 'Full-Stack Developer', icon: <FiCode size={32} />, color: 'text-blue-400' },
    { text: 'DevOps Engineer', icon: <FiServer size={32} />, color: 'text-green-400' },
    { text: 'Cloud Architect', icon: <FiCloud size={32} />, color: 'text-purple-400' }
  ];

  const techStack = [
    { name: 'PHP', color: '#777bb4', icon: '🐘' },
    { name: 'ASP.NET', color: '#512bd4', icon: '🔷' },
    { name: 'AWS', color: '#ff9900', icon: '☁️' },
    { name: 'Jenkins', color: '#d33833', icon: '⚙️' },
    { name: 'Docker', color: '#2496ed', icon: '🐳' },
    { name: 'SonarQube', color: '#4e9bcd', icon: '🔍' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Vaibhav_Borse_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Coding Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Ctext x='5' y='15' font-family='monospace' font-size='8'%3E%7B%7D%3C/text%3E%3Ctext x='25' y='35' font-family='monospace' font-size='6'%3E&lt;/&gt;%3C/text%3E%3Ctext x='40' y='50' font-family='monospace' font-size='7'%3E()%3C/text%3E%3Ctext x='10' y='45' font-family='monospace' font-size='5'%3E[]%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="gradient-mesh opacity-20 absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-green-900/20"></div>
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10 dark:opacity-20"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Name with Glassmorphism */}
          <motion.div
            className="glass rounded-3xl p-8 mb-8 backdrop-blur-xl border border-white/20 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
                Vaibhav Borse
              </span>
            </motion.h1>

            {/* Enhanced Role Display */}
            <motion.div
              className="flex items-center justify-center gap-4 text-2xl md:text-4xl font-bold mb-6 h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className={`flex items-center gap-3 ${roles[currentRole].color}`}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {roles[currentRole].icon}
                </motion.div>
                <span className="text-gray-800 dark:text-gray-200">
                  {roles[currentRole].text}
                </span>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting <span className="text-gradient font-semibold">scalable applications</span> and 
              automating <span className="text-gradient font-semibold">cloud infrastructure</span> with 
              cutting-edge DevOps practices
            </motion.p>
          </motion.div>

          {/* Tech Stack Showcase */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider font-semibold">
              Powered by
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="glass rounded-xl px-4 py-2 backdrop-blur-sm border border-white/20 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{tech.icon}</span>
                    <span 
                      className="font-semibold text-sm"
                      style={{ color: tech.color }}
                    >
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <FiDownload size={24} />
                Download Resume
              </div>
            </motion.button>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group glass rounded-2xl px-8 py-4 backdrop-blur-xl border-2 border-white/30 hover:border-green-400/50 font-bold text-lg transition-all duration-300 hover:shadow-glow-green"
            >
              <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400">
                <FiEye size={24} />
                View Projects
              </div>
            </motion.a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {[
              { icon: FiGithub, href: "https://github.com/vaibhavpatil7111", color: "hover:text-gray-800 dark:hover:text-white" },
              { icon: FiLinkedin, href: "https://linkedin.com/in/vaibhavborse", color: "hover:text-blue-600" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`glass rounded-full p-4 backdrop-blur-xl border border-white/20 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-glow`}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass rounded-full p-3 backdrop-blur-xl border border-white/20">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center relative overflow-hidden">
              <motion.div 
                className="w-1 h-3 bg-gradient-to-b from-blue-500 to-green-500 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
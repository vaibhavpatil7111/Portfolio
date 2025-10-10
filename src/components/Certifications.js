import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certification',
      provider: 'Udemy',
      date: 'Jan 2024',
      description: 'Comprehensive AWS cloud services training covering EC2, S3, RDS, Lambda, and more',
      skills: ['AWS Cloud', 'EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation'],
      color: 'from-orange-500 to-yellow-500',
      icon: '☁️'
    },
    {
      title: 'Jenkins CI/CD',
      provider: 'Simplilearn',
      date: 'Dec 2023',
      description: 'Advanced Jenkins automation, pipeline creation, and continuous integration practices',
      skills: ['Jenkins', 'CI/CD', 'Pipeline', 'Automation', 'DevOps'],
      color: 'from-blue-500 to-indigo-500',
      icon: '⚙️'
    },
    {
      title: 'Docker Mastery',
      provider: 'Udemy',
      date: 'Dec 2023',
      description: 'Complete Docker containerization, orchestration, and deployment strategies',
      skills: ['Docker', 'Containers', 'Orchestration', 'Microservices'],
      color: 'from-cyan-500 to-blue-500',
      icon: '🐳'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden card-hover h-full">
                {/* Certificate Header */}
                <div className={`h-32 bg-gradient-to-r ${cert.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-6 left-6 text-4xl">
                    {cert.icon}
                  </div>
                  <div className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <FiAward className="text-white" size={20} />
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <FiExternalLink size={16} />
                    </motion.button>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      {cert.provider}
                    </span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                    {cert.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Always staying updated with the latest technologies and best practices in web development and DevOps
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg">
                <FiAward className="text-primary-600 dark:text-primary-400" size={16} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  3+ Certifications
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  50+ Hours of Training
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Inventory Management System (SIMS)',
      description: 'Developed a scalable inventory management system with automated CI/CD pipelines, AWS serverless architecture, and Dockerized microservices.',
      technologies: ['ASP.NET Core', 'React.js', 'MySQL', 'AWS Lambda', 'Docker', 'Terraform', 'Jenkins'],
      icon: <FiDatabase size={24} />,
      gradient: 'from-blue-500 to-purple-600',
      features: [
        'Real-time inventory tracking',
        'Automated stock alerts',
        'Serverless architecture',
        'Microservices design'
      ]
    },
    {
      title: 'End-to-End CI/CD Pipeline',
      description: 'Built Jenkins-based CI/CD pipelines integrating GitHub, Docker, Kubernetes (EKS), and SonarQube to automate deployment workflows.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub Actions', 'SonarQube', 'AWS EKS'],
      icon: <FiServer size={24} />,
      gradient: 'from-green-500 to-teal-600',
      features: [
        'Automated testing & deployment',
        'Code quality gates',
        'Container orchestration',
        'Multi-environment support'
      ]
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure provisioning using Terraform and CloudFormation with monitoring and logging solutions.',
      technologies: ['Terraform', 'CloudFormation', 'AWS', 'Prometheus', 'Grafana', 'ELK Stack'],
      icon: <FiCloud size={24} />,
      gradient: 'from-orange-500 to-red-600',
      features: [
        'Infrastructure as Code',
        'Auto-scaling capabilities',
        'Comprehensive monitoring',
        'Cost optimization'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my expertise in full-stack development, DevOps automation, and cloud architecture
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden card-hover h-full">
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <FiGithub size={16} />
                      Code
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg text-sm font-medium hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-200"
                    >
                      <FiExternalLink size={16} />
                      Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/vaibhavpatil7111"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            <FiGithub size={20} />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
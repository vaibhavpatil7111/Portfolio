import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiServer, FiDatabase, FiCloud, FiCode } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Inventory Management System (SIMS)',
      description: 'Enterprise-grade inventory management system built with ASP.NET Core and PHP backend, featuring automated CI/CD pipelines, AWS serverless architecture, and Dockerized microservices for scalable operations.',
      technologies: ['ASP.NET Core', 'PHP', 'React.js', 'MySQL', 'AWS Lambda', 'Docker', 'Terraform', 'Jenkins'],
      icon: <FiDatabase size={32} />,
      gradient: 'from-blue-600 via-purple-600 to-indigo-600',
      category: 'Full-Stack Development',
      demoUrl: '#',
      githubUrl: '#',
      features: [
        'Real-time inventory tracking with WebSocket integration',
        'Automated stock alerts and notifications',
        'Serverless architecture with AWS Lambda',
        'Microservices design with Docker containers',
        'Advanced reporting and analytics dashboard',
        'Multi-tenant architecture support'
      ],
      metrics: {
        performance: '99.9% uptime',
        scale: '10K+ transactions/day',
        efficiency: '60% faster processing'
      }
    },
    {
      title: 'Enterprise CI/CD Pipeline Platform',
      description: 'Comprehensive DevOps platform integrating Jenkins, GitHub Actions, Docker, Kubernetes (EKS), and SonarQube for automated testing, security scanning, and multi-environment deployments.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub Actions', 'SonarQube', 'AWS EKS', 'Terraform'],
      icon: <FiServer size={32} />,
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      category: 'DevOps & Automation',
      demoUrl: '#',
      githubUrl: '#',
      features: [
        'Automated testing with parallel execution',
        'Code quality gates with SonarQube integration',
        'Container orchestration with Kubernetes',
        'Multi-environment deployment (Dev/Stage/Prod)',
        'Security scanning and vulnerability assessment',
        'Rollback mechanisms and blue-green deployments'
      ],
      metrics: {
        deployment: '50+ deployments/week',
        quality: '95% code coverage',
        speed: '80% faster releases'
      }
    },
    {
      title: 'AWS Cloud Infrastructure Automation',
      description: 'Fully automated cloud infrastructure provisioning using Terraform and CloudFormation, featuring comprehensive monitoring with Prometheus, Grafana, and ELK Stack for enterprise-scale applications.',
      technologies: ['Terraform', 'CloudFormation', 'AWS', 'Prometheus', 'Grafana', 'ELK Stack', 'Docker'],
      icon: <FiCloud size={32} />,
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      category: 'Cloud Architecture',
      demoUrl: '#',
      githubUrl: '#',
      features: [
        'Infrastructure as Code with Terraform',
        'Auto-scaling and load balancing',
        'Comprehensive monitoring and alerting',
        'Cost optimization and resource management',
        'Disaster recovery and backup automation',
        'Security compliance and governance'
      ],
      metrics: {
        cost: '40% cost reduction',
        availability: '99.99% SLA',
        automation: '100% infrastructure automated'
      }
    },
    {
      title: 'PHP Microservices Architecture',
      description: 'Modern PHP-based microservices platform with Docker containerization, API Gateway integration, and comprehensive monitoring for high-performance web applications.',
      technologies: ['PHP', 'Laravel', 'Docker', 'Nginx', 'Redis', 'MySQL', 'Jenkins', 'SonarQube'],
      icon: <FiCode size={32} />,
      gradient: 'from-purple-600 via-blue-600 to-cyan-600',
      category: 'Backend Development',
      demoUrl: '#',
      githubUrl: '#',
      features: [
        'RESTful API design with Laravel framework',
        'Docker containerization for all services',
        'Redis caching for improved performance',
        'Automated testing and code quality checks',
        'API Gateway for service orchestration',
        'Comprehensive logging and monitoring'
      ],
      metrics: {
        response: '<100ms API response',
        throughput: '5K+ requests/second',
        reliability: '99.9% service availability'
      }
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

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden card-hover h-full">
                {/* Enhanced Project Header */}
                <div className={`h-40 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 backdrop-blur-sm border border-white/30">
                    <span className="text-white text-xs font-semibold">{project.category}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6 p-4 glass backdrop-blur-sm rounded-2xl border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0.2, 0.8, 0.2],
                          scale: [1, 1.5, 1]
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
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

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Performance Metrics */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Performance Metrics</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center p-3 glass rounded-xl backdrop-blur-sm border border-white/20">
                          <div className="text-lg font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 glass backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold hover:shadow-glow transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                    >
                      <FiGithub size={18} />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 glass backdrop-blur-sm border-2 border-white/30 hover:border-green-400/50 text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 rounded-xl font-semibold transition-all duration-300 hover:shadow-glow-green"
                    >
                      <FiExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
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
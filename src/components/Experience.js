import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
  const achievements = [
    'Developed scalable web applications using ASP.NET Core and React.js',
    'Implemented CI/CD pipelines using Jenkins and GitHub Actions',
    'Deployed containerized applications on AWS EKS and ECS Fargate',
    'Automated infrastructure provisioning using Terraform and CloudFormation',
    'Set up monitoring and logging solutions with Prometheus, Grafana, and ELK Stack',
    'Optimized application performance and reduced deployment time by 60%'
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-accent-500"></div>
            
            <div className="relative pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Web Developer & DevOps Engineer
                    </h3>
                    <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      Maskoid Technologies
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2 mb-1">
                      <FiCalendar size={16} />
                      <span>Aug 2024 – Apr 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={16} />
                      <span>Vadodara, Gujarat</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <FiCheckCircle className="text-accent-500" size={20} />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl"
                >
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'ASP.NET Core', 'React.js', 'MySQL', 'AWS Lambda', 'Docker', 
                      'Terraform', 'Jenkins', 'Kubernetes', 'GitHub Actions', 'SonarQube'
                    ].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
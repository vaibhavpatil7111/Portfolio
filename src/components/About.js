import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiCode size={24} />,
      title: 'Full-Stack Development',
      description: 'Building modern web applications with React.js and ASP.NET Core'
    },
    {
      icon: <FiServer size={24} />,
      title: 'DevOps Automation',
      description: 'CI/CD pipelines, containerization, and infrastructure automation'
    },
    {
      icon: <FiCloud size={24} />,
      title: 'Cloud Architecture',
      description: 'AWS cloud solutions with serverless and microservices architecture'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Results-driven Web Developer and DevOps Engineer with 1 year of experience in building, 
                  deploying, and maintaining scalable applications. Skilled in ASP.NET Core, React.js, AWS, 
                  Jenkins, Terraform, and Docker with expertise in CI/CD automation, Infrastructure as Code (IaC), 
                  and cloud monitoring.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Passionate about creating efficient, scalable solutions that bridge the gap between 
                  development and operations, ensuring seamless deployment and optimal performance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg card-hover"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1+', label: 'Years Experience' },
              { number: '10+', label: 'Projects Completed' },
              { number: '5+', label: 'Technologies' },
              { number: '3+', label: 'Certifications' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
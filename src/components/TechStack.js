import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCloud, FiSettings, FiShield, FiMonitor } from 'react-icons/fi';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend Development',
      icon: <FiCode size={32} />,
      gradient: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React.js', level: 90, color: '#61dafb', description: 'Modern JavaScript library for UI' },
        { name: 'JavaScript', level: 88, color: '#f7df1e', description: 'Dynamic programming language' },
        { name: 'HTML5/CSS3', level: 95, color: '#e34f26', description: 'Web markup and styling' },
        { name: 'Tailwind CSS', level: 85, color: '#06b6d4', description: 'Utility-first CSS framework' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FiServer size={32} />,
      gradient: 'from-purple-600 to-blue-600',
      technologies: [
        { name: 'PHP', level: 90, color: '#777bb4', description: 'Server-side scripting and web development' },
        { name: 'ASP.NET Core', level: 85, color: '#512bd4', description: 'Cross-platform web framework' },
        { name: 'C#', level: 88, color: '#239120', description: 'Object-oriented programming' },
        { name: 'MySQL', level: 82, color: '#4479a1', description: 'Relational database management' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: <FiCloud size={32} />,
      gradient: 'from-orange-500 to-yellow-500',
      technologies: [
        { name: 'AWS', level: 88, color: '#ff9900', description: 'EC2, S3, RDS, Lambda, CloudFormation' },
        { name: 'Docker', level: 85, color: '#2496ed', description: 'Containerization and orchestration' },
        { name: 'Terraform', level: 80, color: '#623ce4', description: 'Infrastructure as Code' },
        { name: 'Linux', level: 85, color: '#fcc624', description: 'Operating system administration' }
      ]
    },
    {
      title: 'DevOps & CI/CD',
      icon: <FiSettings size={32} />,
      gradient: 'from-red-500 to-pink-500',
      technologies: [
        { name: 'Jenkins', level: 87, color: '#d33833', description: 'Continuous integration and deployment' },
        { name: 'GitHub Actions', level: 82, color: '#2088ff', description: 'Automated workflows' },
        { name: 'SonarQube', level: 75, color: '#4e9bcd', description: 'Code quality and security analysis' },
        { name: 'GitLab CI', level: 70, color: '#fc6d26', description: 'Integrated CI/CD platform' }
      ]
    },
    {
      title: 'Monitoring & Security',
      icon: <FiMonitor size={32} />,
      gradient: 'from-green-500 to-teal-500',
      technologies: [
        { name: 'Prometheus', level: 80, color: '#e6522c', description: 'Metrics collection and alerting' },
        { name: 'Grafana', level: 85, color: '#f46800', description: 'Data visualization and dashboards' },
        { name: 'ELK Stack', level: 75, color: '#005571', description: 'Elasticsearch, Logstash, Kibana' },
        { name: 'CloudWatch', level: 78, color: '#ff9900', description: 'AWS monitoring and logging' }
      ]
    },
    {
      title: 'Database & Tools',
      icon: <FiShield size={32} />,
      gradient: 'from-indigo-500 to-purple-500',
      technologies: [
        { name: 'MongoDB', level: 75, color: '#47a248', description: 'NoSQL document database' },
        { name: 'Git', level: 90, color: '#f05032', description: 'Version control system' },
        { name: 'Postman', level: 85, color: '#ff6c37', description: 'API development and testing' },
        { name: 'VS Code', level: 90, color: '#007acc', description: 'Code editor and IDE' }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-green-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
              Tech Arsenal
            </span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Mastering cutting-edge technologies to build robust, scalable, and secure applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl card-hover h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 bg-gradient-to-r ${category.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group/tech"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full shadow-lg"
                            style={{ backgroundColor: tech.color }}
                          />
                          <span className="font-bold text-lg text-gray-900 dark:text-white">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                          {tech.level}%
                        </span>
                      </div>
                      
                      <div className="relative mb-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1.5, delay: techIndex * 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="h-full rounded-full relative overflow-hidden"
                            style={{ 
                              background: `linear-gradient(90deg, ${tech.color}, ${tech.color}dd)` 
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"></div>
                          </motion.div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'GitHub', 'GitLab', 'Jira', 'Confluence', 'Slack', 'VS Code',
              'Visual Studio', 'Postman', 'Swagger', 'Nginx', 'Apache', 'Linux',
              'Windows Server', 'PowerShell', 'Bash', 'Python', 'Node.js', 'React.js'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass rounded-2xl px-6 py-3 backdrop-blur-sm border border-white/20 text-gray-700 dark:text-gray-300 font-medium shadow-lg hover:shadow-glow transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
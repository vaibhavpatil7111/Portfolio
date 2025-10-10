import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiServer, FiCloud, FiSettings, FiDatabase, FiMonitor,
  FiGitBranch, FiShield, FiTool, FiActivity
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiCode size={24} />,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FiServer size={24} />,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'ASP.NET Core', level: 90 },
        { name: 'C#', level: 85 },
        { name: 'Entity Framework', level: 80 },
        { name: 'LINQ', level: 75 }
      ]
    },
    {
      title: 'Database',
      icon: <FiDatabase size={24} />,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'MongoDB', level: 70 },
        { name: 'Redis', level: 65 }
      ]
    },
    {
      title: 'DevOps Tools',
      icon: <FiSettings size={24} />,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Jenkins', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'SonarQube', level: 75 },
        { name: 'GitLab CI', level: 70 }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: <FiTool size={24} />,
      color: 'from-indigo-500 to-blue-600',
      skills: [
        { name: 'Terraform', level: 85 },
        { name: 'CloudFormation', level: 80 },
        { name: 'Ansible', level: 70 },
        { name: 'Pulumi', level: 65 }
      ]
    },
    {
      title: 'Containerization',
      icon: <FiGitBranch size={24} />,
      color: 'from-cyan-500 to-blue-600',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 },
        { name: 'ECS Fargate', level: 75 },
        { name: 'Helm', level: 70 }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: <FiCloud size={24} />,
      color: 'from-yellow-500 to-orange-600',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'EC2/S3/RDS', level: 90 },
        { name: 'Lambda', level: 80 },
        { name: 'CloudFront', level: 75 }
      ]
    },
    {
      title: 'Monitoring & Logging',
      icon: <FiMonitor size={24} />,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Prometheus', level: 80 },
        { name: 'Grafana', level: 85 },
        { name: 'ELK Stack', level: 75 },
        { name: 'CloudWatch', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across the full development and deployment lifecycle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg card-hover h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Git', 'GitHub', 'GitLab', 'Jira', 'Confluence', 'Slack', 'VS Code',
              'Visual Studio', 'Postman', 'Swagger', 'Nginx', 'Apache', 'Linux',
              'Windows Server', 'PowerShell', 'Bash', 'Python', 'Node.js'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm cursor-default"
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

export default Skills;
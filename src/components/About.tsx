import React from 'react';
import { Code, Lightbulb, Target, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900/50"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A passionate software engineer dedicated to creating efficient solutions and learning new technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Software Engineer & Problem Solver
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm a dedicated software engineer currently pursuing B.Tech in Computer Science & Engineering 
                at GL Bajaj Group of Institutions, Mathura. My journey in programming began with a fascination 
                for solving complex problems and has evolved into a passion for building scalable, efficient applications.
              </p>
              <p>
                I specialize in full-stack web development with modern technologies like React, Node.js, and 
                various databases. My experience spans from frontend development to backend architecture, 
                with a strong foundation in data structures and algorithms.
              </p>
              <p>
                I'm constantly learning and exploring new technologies, currently diving deep into blockchain 
                development with Solidity and systems programming with Rust. My goal is to contribute to 
                innovative projects that make a real impact.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            {[
              {
                icon: Code,
                title: "Clean Code Advocate",
                description: "I believe in writing maintainable, readable code that follows best practices and industry standards.",
                color: "text-cyan-400"
              },
              {
                icon: Lightbulb,
                title: "Continuous Learner",
                description: "Always exploring new technologies and methodologies to stay current with industry trends.",
                color: "text-yellow-400"
              },
              {
                icon: Target,
                title: "Problem Solver",
                description: "Enjoy tackling challenging problems and finding innovative solutions through algorithms and design patterns.",
                color: "text-green-400"
              },
              {
                icon: Rocket,
                title: "Innovation Focused",
                description: "Passionate about building cutting-edge applications that push the boundaries of technology.",
                color: "text-purple-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-start space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
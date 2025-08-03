import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Java", "JavaScript", "Rust", "Solidity", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Node.js", "Express"],
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/30"
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB"],
      color: "from-purple-500 to-violet-500",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Concepts",
      skills: ["Data Structures", "Algorithms"],
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30"
    },
    {
      title: "Tools",
      skills: ["VS Code", "Postman", "Hopscotch", "Git", "GitHub"],
      color: "from-gray-500 to-slate-500",
      borderColor: "border-gray-500/30"
    }
  ];

  const proficiencyData = [
    { skill: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { skill: "React", level: 85, color: "from-blue-400 to-cyan-500" },
    { skill: "Java", level: 80, color: "from-red-400 to-pink-500" },
    { skill: "Node.js", level: 75, color: "from-green-400 to-emerald-500" },
    { skill: "TypeScript", level: 70, color: "from-blue-500 to-indigo-500" },
    { skill: "Rust", level: 60, color: "from-orange-500 to-red-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border ${category.borderColor}`}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${category.color} transition-transform duration-200`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proficiency Levels
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proficiencyData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white">{item.skill}</span>
                  <span className="text-sm text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-3 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
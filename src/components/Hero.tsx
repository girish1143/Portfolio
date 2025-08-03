import React from 'react';
import { Github, Linkedin, Code, Trophy, Download, Eye, MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleResumeView = () => {
    window.open('/resume.pdf','_blank', "noopener,noreferrer");
  };
  
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'girishSharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-40 h-40 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 animate-pulse"></div>
              GS
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Girish Sharma
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
            >
              Software Engineer
            </motion.h2>
          </motion.div>

          {/* Education & Location */}
          <motion.div variants={itemVariants} className="mb-8 space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>B.Tech Computer Science & Engineering</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>GL Bajaj Group of Institutions</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Mathura, India</span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate software engineer specializing in modern web technologies, algorithms, 
            and full-stack development. Currently pursuing B.Tech in Computer Science & Engineering, 
            always eager to learn and build innovative solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/girish-sharma-a31822266/", color: "hover:text-blue-400" },
              { icon: Github, href: "https://github.com/girish1143", color: "hover:text-gray-300" },
              { icon: Code, href: "https://leetcode.com/u/girish_sharma00/", color: "hover:text-orange-400" },
              { icon: Trophy, href: "https://codeforces.com/profile/Girish_sharma00", color: "hover:text-red-400" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gray-800/50 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 ${social.color} border border-gray-700 hover:border-cyan-400`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(100, 255, 218, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeView}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(156, 163, 175, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
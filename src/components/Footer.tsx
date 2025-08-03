import React from 'react';
import { Github, Linkedin, Code, Trophy, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Girish Sharma
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Software Engineer passionate about creating innovative solutions and learning new technologies. 
              Currently pursuing B.Tech in Computer Science & Engineering.
            </p>
            <p className="text-gray-500 text-sm">
              GL Bajaj Group of Institutions, Mathura
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ x: 5 }}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/girish-sharma-a31822266/", color: "hover:text-blue-400" },
                { icon: Github, href: "https://github.com/girish1143", color: "hover:text-gray-300" },
                { icon: Code, href: "https://leetcode.com/u/girish_sharma00/", color: "hover:text-orange-400" },
                { icon: Trophy, href: "https://codeforces.com/profile/Girish_sharma00", color: "hover:text-red-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-full transition-all duration-300 ${social.color} border border-gray-700 hover:border-gray-600`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Open to new opportunities and collaborations
            </p>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center mb-4 md:mb-0">
            © {currentYear} Girish Sharma. Built with
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            using React, TypeScript & Three.js
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 bg-cyan-600 hover:bg-cyan-500 rounded-full transition-colors duration-200 shadow-lg hover:shadow-cyan-500/25"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
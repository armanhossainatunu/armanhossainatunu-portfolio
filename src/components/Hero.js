import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const socialLinks = [
    { href: 'https://github.com/armanhossainatunu', icon: 'fab fa-github', hoverColor: 'hover:bg-primary' },
    { href: 'https://www.linkedin.com/in/armanhossainatunu', icon: 'fab fa-linkedin-in', hoverColor: 'hover:bg-blue-600' },
    { href: 'https://www.instagram.com/armanhossainatunu', icon: 'fab fa-instagram', hoverColor: 'hover:bg-pink-500' },
    { href: 'mailto:armanhossainatunu@gmail.com?subject=Hello%20from%20Portfolio', icon: 'fas fa-envelope', hoverColor: 'hover:bg-red-500' },
  ];

  const floatingIcons = [
    { icon: 'fab fa-react', color: 'text-cyan-400', position: 'absolute -bottom-4 right-10 z-20 animate-float-delayed', size: 'w-14 h-14 sm:w-16 sm:h-16', borderColor: 'border-cyan-500/30', shadowColor: 'shadow-[0_0_15px_rgba(6,182,212,0.5)]', extraClass: 'animate-spin-slow', style: { animationDuration: '10s' } },
    { icon: 'fab fa-js', color: 'text-yellow-400', position: 'absolute top-10 -left-4 z-20 animate-float', size: 'w-12 h-12 sm:w-14 sm:h-14', borderColor: 'border-yellow-500/30', shadowColor: 'shadow-[0_0_15px_rgba(234,179,8,0.5)]' },
    { icon: 'fab fa-html5', color: 'text-orange-500', position: 'absolute top-0 right-10 z-20 animate-float-slow', size: 'w-12 h-12 sm:w-14 sm:h-14', borderColor: 'border-orange-500/30', shadowColor: 'shadow-[0_0_15px_rgba(249,115,22,0.5)]' },
    { icon: 'fab fa-node', color: 'text-green-500', position: 'absolute bottom-10 -left-2 z-20 animate-float-delayed', size: 'w-10 h-10 sm:w-12 sm:h-12', borderColor: 'border-green-500/30', shadowColor: 'shadow-[0_0_15px_rgba(34,197,94,0.5)]' },
  ];

  return (
    <main className="relative z-10 pt-20 min-h-screen flex items-center justify-center" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left space-y-6 order-2 lg:order-1 relative"
          >
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Hi, I'm Arman Hossain Atunu
            </motion.h1>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-pink to-orange-400 pb-2"
            >
             Frontend Developer
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 max-w-lg text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Crafting modern, responsive, and user-friendly websites with passion and precision. 
              Transforming ideas into seamless digital experiences.
            </motion.p>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <motion.a 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary to-accent-pink rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 overflow-hidden" 
                href="https://drive.google.com/file/d/1cO3Xl_FdVBtyLzJPjbAbqBEYTbzuPmS9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-2">
                  Download Resume 
                  <span className="material-icons-outlined text-sm animate-bounce">download</span>
                </span>
              </motion.a>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-white ${link.hoverColor} hover:text-white transition-all duration-300 border border-gray-300 dark:border-white/10`}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <i className={`${link.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2 flex justify-center items-center py-10 lg:py-0"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent-pink opacity-20 dark:opacity-40 blur-3xl rounded-full"></div>
              <div className="relative w-full h-full rounded-full border-4 border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl profile-glow z-10">
                <img 
                  alt="Arman working on code" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                  src="https://i.ibb.co/pjmWR3dT/Arman-Hossain-Atunu.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60"></div>
              </div>
              
              {floatingIcons.map((iconData, index) => (
                <motion.div 
                  key={index} 
                  className={iconData.position}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <div className={`${iconData.size} rounded-full bg-gray-900 border ${iconData.borderColor} flex items-center justify-center ${iconData.shadowColor} backdrop-blur-sm`}>
                    <i 
                      className={`${iconData.icon} text-2xl sm:text-3xl ${iconData.color} ${iconData.extraClass || ''}`}
                      style={iconData.style}
                    ></i>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
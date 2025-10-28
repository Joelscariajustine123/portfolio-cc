import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../img/profile.png';

const Hero: React.FC = () => {
    const scrollToContact = () => {
        const section = document.getElementById('contact');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
  return (
    <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left -mt-20">
      <div className="md:w-1/2 flex justify-center md:justify-end md:pr-16 mb-8 md:mb-0">
         <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-cyan-500/30 border-4 border-cyan-400">
            <img 
              src={profileImage} 
              alt="Joel Scaria Justine" 
              className="w-full h-full object-cover"
            />
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
          Joel Scaria Justine
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
          Python Full Stack Developer & Cyber Security Enthusiast
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mb-6">
          A security-conscious developer passionate about building robust and secure web applications with Python and Django.
        </p>
        <div className="flex justify-center md:justify-start space-x-6 mb-8">
          <a href="https://github.com/Joelscariajustine123" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/joel-scaria-justine-202191203" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:joelscaria2020@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            <FaEnvelope size={32} />
          </a>
        </div>
        <button 
            onClick={scrollToContact}
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
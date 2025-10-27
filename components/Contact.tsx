import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
      </p>
      
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <a href="mailto:joelscaria2020@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors">
          <FaEnvelope size={24} />
          <span>joelscaria2020@gmail.com</span>
        </a>
        <div className="flex items-center space-x-3 text-slate-300">
          <FaPhone size={24} />
          <span>+91 8156982391</span>
        </div>
      </div>

      <div className="flex justify-center space-x-6 mb-12">
        <a href="https://github.com/Joelscariajustine123" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-3 bg-slate-800 rounded-full">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/joel-scaria-justine-202191203" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 p-3 bg-slate-800 rounded-full">
          <FaLinkedin size={28} />
        </a>
      </div>

      <footer className="border-t border-slate-800 pt-8 mt-12">
        <p className="text-slate-500">Designed & Built by Joel Scaria Justine</p>
      </footer>
    </section>
  );
};

export default Contact;
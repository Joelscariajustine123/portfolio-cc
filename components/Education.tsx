import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Education & <span className="text-cyan-400">Certifications</span>
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Education Card */}
        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700 flex items-start space-x-4">
          <div className="text-4xl text-cyan-400 mt-1">
            <FaGraduationCap />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">BTech in Computer Science Engineering</h3>
            <p className="font-medium text-slate-300">Vimal Jyothi Engineering College, Chemperi, Kannur</p>
            <p className="text-sm text-slate-400">APJ Abdul Kalam Technological University, 2024</p>
          </div>
        </div>

        {/* Certification Card */}
        <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700 flex items-start space-x-4">
          <div className="text-4xl text-cyan-400 mt-1">
            <FaCertificate />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Cybersecurity and Ethical Hacking</h3>
            <p className="font-medium text-slate-300">GTEC Kannur</p>
            <p className="text-sm text-slate-400">July–September 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
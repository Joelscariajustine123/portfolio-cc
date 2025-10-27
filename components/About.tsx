import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Professional <span className="text-cyan-400">Summary</span>
      </h2>
      <div className="max-w-3xl mx-auto text-center bg-slate-800/50 p-8 rounded-xl shadow-lg border border-slate-700">
        <p className="text-lg text-slate-300 leading-relaxed">
          I am a security-conscious Python Full Stack Developer with a strong passion for building robust and secure web applications. My experience in Python and Django is complemented by project-based learning in network analysis using tools like Nmap and Wireshark. This dual focus allows me to create scalable solutions while integrating fundamental security principles directly into the development lifecycle. 
          <br/><br/>
          Currently, I am mentoring aspiring developers as a Python Full Stack Instructor, where I emphasize best practices in web development and the importance of writing secure, reliable code from the ground up.
        </p>
      </div>
    </section>
  );
};

export default About;
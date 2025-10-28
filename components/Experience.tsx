import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        Professional <span className="text-cyan-400">Experience</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-cyan-500 pl-10">
          {/* Timeline dot */}
          <div className="absolute -left-[11px] top-1 w-6 h-6 bg-slate-900 border-2 border-cyan-500 rounded-full"></div>
          
          <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700 mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Python Full Stack Instructor / Trainer</h3>
                <p className="text-lg font-medium text-slate-300">GTEC Computer Education Center, Kannur</p>
              </div>
              <span className="text-sm font-semibold text-slate-400 bg-slate-700 px-3 py-1 rounded-full">July 2024 – Present</span>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4">
              <li>Conducts comprehensive training sessions on Python, Django, and modern web development fundamentals.</li>
              <li>Guides students in building full-stack applications, emphasizing secure coding practices, data validation, and robust authentication mechanisms.</li>
              <li>Supervises the development of real-time mini projects, ensuring adherence to secure development principles and industry best practices.</li>
              <li>Mentors students on version control with Git and collaborative development workflows using GitHub.</li>
            </ul>
          </div>
        </div>
      </div>

       <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-cyan-500 pl-10">
          {/* Timeline dot */}
          <div className="absolute -left-[11px] top-1 w-6 h-6 bg-slate-900 border-2 border-cyan-500 rounded-full"></div>

          <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-700 mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Python Full Stack Internship</h3>
                <p className="text-lg font-medium text-slate-300">Inmakes Learning Hub, Kochi, Kerala</p>
              </div>
              <span className="text-sm font-semibold text-slate-400 bg-slate-700 px-3 py-1 rounded-full">July 2024 – Present</span>
            </div>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mt-4">
              <li>Hands-on training in Python, Django, HTML, CSS, JavaScript, and MySQL.</li>
              <li>Developed full-stack web applications integrating front-end and back-end systems.</li>
              <li>Implemented CRUD operations, authentication, and responsive UI designs.</li>
              <li>Used Git and GitHub for version control and collaborative development.</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;
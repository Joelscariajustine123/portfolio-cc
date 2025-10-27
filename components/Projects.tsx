import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: 'Network Vulnerability Assessment Lab',
    description: 'Performed network scanning and vulnerability testing in a lab environment.',
    details: [
      "Utilized Nmap for comprehensive port scanning and service enumeration to identify open ports and running services on target systems.",
      "Conducted vulnerability scans using Nessus to detect known security flaws, misconfigurations, and potential attack vectors.",
      "Analyzed scan results to prioritize vulnerabilities based on severity and provided recommendations for remediation."
    ],
    technologies: ['Nmap', 'Nessus', 'VirtualBox', 'Kali Linux']
  },
  {
    title: 'Packet Analysis and Intrusion Detection',
    description: 'Analyzed live packet captures to detect network anomalies.',
    details: [
      "Used Wireshark to capture and inspect network traffic in real-time, filtering for specific protocols and conversations.",
      "Identified suspicious patterns, such as unusual traffic spikes, unauthorized protocols, and potential signs of reconnaissance or data exfiltration.",
      "Documented findings to understand network behavior and establish a baseline for normal activity."
    ],
    technologies: ['Wireshark', 'TCP/IP', 'Network Protocols']
  },
  {
    title: 'Secure Web Application Development',
    description: 'Built Django applications with a focus on security.',
    details: [
      "Developed a multi-user web application using the Django framework, implementing a robust user authentication and authorization system.",
      "Integrated secure coding practices, including strict input validation and output encoding to prevent common web vulnerabilities.",
      "Designed and managed the application's database schema using Django's ORM, ensuring data integrity and efficient queries."
    ],
    technologies: ['Python', 'Django', 'SQL', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'File Organizer Automation',
    description: 'Created a Python script for automated file management.',
    details: [
        "Developed a script to automatically sort files in a directory into subfolders based on their file extension (e.g., .jpg, .pdf, .docx).",
        "Implemented input validation to ensure the script operates on valid directory paths and handles potential errors gracefully.",
        "Added logging functionality to record all file operations, providing a clear audit trail for data integrity and troubleshooting."
    ],
    technologies: ['Python', 'OS Module', 'Logging']
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 transition-all duration-500 ease-in-out cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                 <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                        <span key={tech} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
            <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0">
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                       {project.details.map((detail, index) => (
                           <li key={index}>{detail}</li>
                       ))}
                    </ul>
                </div>
            </div>
            <div className="bg-slate-700/50 px-6 py-2 text-center text-sm font-medium text-cyan-400">
                {isExpanded ? 'Click to Collapse' : 'Click to Read More'}
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-cyan-400">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
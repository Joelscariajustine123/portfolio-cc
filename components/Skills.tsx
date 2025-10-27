import React from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaLinux, FaWindows, FaDatabase } from 'react-icons/fa';
// Fix: Removed SiNmap as it is not an exported member of 'react-icons/si'.
import { SiDjango, SiWireshark, SiKalilinux, SiBurpsuite } from 'react-icons/si';

interface Skill {
    name: string;
    icon: React.ReactNode;
}

const skillsData: { category: string; skills: Skill[] }[] = [
    {
        category: 'Programming & Web Development',
        skills: [
            { name: 'Python', icon: <FaPython className="text-blue-400" /> },
            { name: 'Django', icon: <SiDjango className="text-green-700" /> },
            { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
            { name: 'SQL', icon: <FaDatabase className="text-indigo-400" /> },
        ],
    },
    {
        category: 'Cybersecurity Tools',
        skills: [
            // Fix: Replaced missing SiNmap icon with an external image and adjusted icon sizes for visual consistency.
            { name: 'Nmap', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Nmap-logo.png" alt="Nmap" className="w-6 h-6"/> },
            { name: 'Wireshark', icon: <SiWireshark className="text-blue-500" /> },
            { name: 'Nessus', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Tenable_Nessus_logo.svg" alt="Nessus" className="w-6 h-6"/> },
            { name: 'Burp Suite', icon: <SiBurpsuite className="text-orange-500" /> },
            { name: 'Kali Linux', icon: <SiKalilinux className="text-blue-600" /> },
        ],
    },
    {
        category: 'Platforms & Version Control',
        skills: [
            { name: 'Linux', icon: <FaLinux /> },
            { name: 'Windows', icon: <FaWindows className="text-blue-400" /> },
            { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
            { name: 'GitHub', icon: <FaGithub /> },
        ],
    },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="flex items-center space-x-3 bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors duration-300">
        <div className="text-2xl">{skill.icon}</div>
        <span className="font-medium text-slate-200">{skill.name}</span>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24">
            <h2 className="text-4xl font-bold text-center mb-12">
                Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="space-y-12">
                {skillsData.map((categoryItem) => (
                    <div key={categoryItem.category}>
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center md:text-left">{categoryItem.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {categoryItem.skills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
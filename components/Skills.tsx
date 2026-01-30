import React from 'react';
import {
    Code2, FileCode, Cpu, Globe, Database,
    Layers, Zap, Github, Triangle, Flame,
    Wind, Box
} from 'lucide-react';

const tools = [
    { name: 'HTML', desc: 'Standard Markup Language', icon: <Globe className="text-orange-500" /> },
    { name: 'CSS', desc: 'Style Sheet Language', icon: <FileCode className="text-blue-500" /> },
    { name: 'JavaScript', desc: 'Web Scripting Language', icon: <Code2 className="text-yellow-400" /> },
    { name: 'TypeScript', desc: 'Typed JavaScript', icon: <Code2 className="text-blue-400" /> },
    { name: 'Java', desc: 'Object-Oriented Language', icon: <Box className="text-red-500" /> },
    { name: 'MySQL', desc: 'Relational Database', icon: <Database className="text-blue-600" /> },
    { name: 'PHP', desc: 'Server-Side Scripting', icon: <FileCode className="text-indigo-400" /> },
    { name: 'C++', desc: 'High-Performance Language', icon: <Cpu className="text-blue-500" /> },
    { name: 'C', desc: 'Low-Level Programming', icon: <Cpu className="text-gray-400" /> },
    { name: 'Node.js', desc: 'JS Runtime Environment', icon: <Zap className="text-green-500" /> },
    { name: 'React', desc: 'Frontend UI Library', icon: <Layers className="text-cyan-400" /> },
    { name: 'Tailwind CSS', desc: 'Utility-First CSS', icon: <Wind className="text-sky-400" /> },
    { name: 'Framer Motion', desc: 'Animation Library', icon: <Box className="text-pink-500" /> },
    { name: 'Vite', desc: 'Next Generation Bundler', icon: <Zap className="text-purple-500" /> },
    { name: 'GitHub', desc: 'Version Control Platform', icon: <Github className="text-white" /> },
    { name: 'Next.js', desc: 'React Framework', icon: <Triangle className="text-white rotate-180" /> },
    { name: 'Vercel', desc: 'Deployment Platform', icon: <Triangle className="text-white" /> },
    { name: 'Firebase', desc: 'Backend-as-a-Service', icon: <Flame className="text-yellow-500" /> },
];

export default function ToolsStack() {
    return (
        <section
            id="skills"
            className="min-h-screen bg-[#050505] text-white py-20 px-4 flex flex-col items-center scroll-mt-10"
        >
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-4xl font-bold tracking-tighter uppercase mb-2">
                    Tools & Stack
                </h2>
                <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="bg-[#111111] border border-white/5 p-4 rounded-xl flex items-center space-x-4 hover:bg-[#1a1a1a] transition-all duration-300 group"
                    >
                        <div className="bg-[#1a1a1a] p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            {tool.icon}
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold text-lg">{tool.name}</span>
                            <span className="text-gray-500 text-sm">{tool.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

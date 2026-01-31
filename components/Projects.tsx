import React from 'react';
import {
    ExternalLink,
    Github,
    Code2,
    Smartphone,
    Coffee,
    QrCode,
    MapPin
} from 'lucide-react';

const projects = [
    {
        title: "OCPO APP",
        subtitle: "EMERGENCY RESPONSE SYSTEM",
        description:
            "A specialized mobile application developed for the Olongapo City Police Office. It streamlines emergency response by providing instant access to vital contact information for barangays and local rescue units during disasters.",
        tech: ["React Native", "Expo", "JavaScript", "Tailwind CSS"],
        icon: <Smartphone className="w-5 h-5" />,
        image: "/ocpo.png",
        github: "https://github.com/justinvillaflores/ocpo_app_rn.git",
        live: "https://ocpo-app.vercel.app",
    },
    {
        title: "KAPE NI JUSTIN",
        subtitle: "COFFEE SHOP LANDING PAGE",
        description:
            "A visually appealing web application designed to showcase a premium coffee brand. It focuses on clean UI/UX design to provide a warm and inviting digital experience for coffee enthusiasts.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        icon: <Coffee className="w-5 h-5" />,
        image: "/kape.png",
        github: "https://github.com/justinvillaflores/kape-ni-justin.git",
        live: "https://kape-ni-justin.vercel.app/#",
    },
    {
        title: "CCS ATTENDANCE SYSTEM",
        subtitle: "QR-BASED STUDENT TRACKING",
        description:
            "An automated attendance system tailored for the College of Computer Studies. It utilizes QR code scanning for a paperless and efficient way to monitor student attendance in real-time.",
        tech: ["React", "Firebase", "QR Scanner", "JavaScript"],
        icon: <QrCode className="w-5 h-5" />,
        image: "/ccs.png",
        github: "https://github.com/justinvillaflores/ccs-attendance-system.git",
        live: "https://ccs-attendance-finals.vercel.app/student-login",
    },
    {
        title: "TAGPUAN",
        subtitle: "TOURIST GUIDE PLATFORM",
        description:
            "A comprehensive travel companion website that highlights beautiful vacation spots across the Philippines. It serves as a digital guide for tourists looking to discover hidden gems and popular destinations.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        icon: <MapPin className="w-5 h-5" />,
        image: "/tagpuan.png",
        github: "https://github.com/justinvillaflores/tagpuan.git",
        live: "https://tagpuanngmgaoat.vercel.app/#hero",
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[#050505] text-white py-20 px-4 md:px-12 lg:px-24 scroll-mt-10 font-sans"
        >
            <div className="mb-24">
                <div className="flex items-center space-x-2 text-blue-500 mb-6 bg-blue-500/10 w-fit px-4 py-1.5 rounded-full border border-blue-500/20">
                    <Code2 size={16} />
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">
                        Featured Works
                    </span>
                </div>

                <div className="border-l-2 border-blue-600 pl-8 py-1">
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4">
                        Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
                        "A showcase of selected projects that define my technical standards and creative approach to problem solving."
                    </p>
                </div>
            </div>

            <div className="space-y-40">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-16 items-center`}
                    >
                        <div className="w-full md:w-3/5 group cursor-pointer">
                            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] transition-all duration-700 group-hover:border-blue-500/30 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/80 via-transparent to-transparent" />
                                <div className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {project.icon}
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-2/5 space-y-8">
                            <div>
                                <div className="flex items-center gap-3 text-blue-500">
                                    <span className="h-[1px] w-10 bg-blue-500" />
                                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase">
                                        {project.subtitle}
                                    </span>
                                </div>
                                <h3 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase hover:text-blue-500 transition">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-1.5 text-[10px] font-black bg-white/[0.03] border border-white/10 rounded-full tracking-widest text-gray-400 uppercase"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-black text-xs uppercase hover:bg-blue-600 hover:text-white transition transform active:scale-95"
                                >
                                    Live Site
                                    <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition group"
                                >
                                    <Github size={22} className="text-gray-500 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

"use client";

import React from "react";
import {
    User,
    Globe,
    Code2,
    Layout,
    Database,
    PenTool,
    Target,
} from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-black text-white px-6 py-20 md:px-16 font-sans"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold mb-2">
                        Overview
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        About Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-6 bg-[#0b0f1f] border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-500/10 p-3 rounded-xl">
                                <User className="text-blue-400" size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Who Am I?</h3>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            Hi! I’m{" "}
                            <span className="text-white font-medium">Justin</span>, a
                            passionate{" "}
                            <span className="text-white font-medium">
                Full-Stack Developer
              </span>{" "}
                            and student, who enjoys building scalable systems and modern, clean user
                            interfaces. I love turning ideas into polished digital
                            experiences while learning new technologies.
                        </p>
                    </div>

                    <div className="md:col-span-3 bg-[#0b0f1f] border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-8">
                        <div>
                            <h4 className="text-5xl font-bold">2+</h4>
                            <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">
                                Years Learning
                            </p>
                        </div>

                        <div className="w-full h-px bg-white/5" />

                        <div>
                            <h4 className="text-5xl font-bold">5+</h4>
                            <p className="text-gray-500 uppercase text-xs tracking-widest mt-2">
                                Projects Built
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-3 bg-[#0b0f1f] border border-white/10 rounded-2xl p-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold mb-4">Current Focus</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                As a student, I am focused on learning and building{" "}
                                <span className="text-blue-400">
                                    AI-powered, full-stack, and blockchain web applications
                                </span>
                                .
                            </p>

                            <div className="flex gap-2 flex-wrap">
                                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
                                    Next.js
                                </span>
                                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
                                    OpenAI
                                </span>
                                <span className="text-[10px] bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
                                    Blockchain
                                </span>
                            </div>
                        </div>

                        <Target
                            className="absolute -right-6 -top-6 text-white/5"
                            size={120}
                        />
                    </div>

                    <div className="md:col-span-6 bg-[#0b0f1f] border border-white/10 rounded-2xl p-8 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold mb-1">Base Station</h3>
                            <p className="text-gray-400 text-sm">Philippines (UTC+8)</p>
                            <p className="text-gray-500 text-xs mt-1">
                                GMT+8 means my local time is 8 hours ahead of Coordinated Universal Time.
                            </p>

                            <div className="flex items-center gap-2 mt-4 text-green-400 text-sm">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Open for Collaboration
                            </div>
                        </div>

                        <div className="bg-green-500/10 p-4 rounded-full">
                            <Globe className="text-green-500" size={32} />
                        </div>
                    </div>

                    <div className="md:col-span-6 bg-[#0b0f1f] border border-white/10 rounded-2xl p-8">
                        <h3 className="text-lg font-bold mb-6">Core Stack</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <StackItem icon={<Code2 size={18} />} label="React" color="blue" />
                            <StackItem
                                icon={<Layout size={18} />}
                                label="Tailwind"
                                color="cyan"
                            />
                            <StackItem
                                icon={<Database size={18} />}
                                label="Node.js"
                                color="green"
                            />
                            <StackItem
                                icon={<PenTool size={18} />}
                                label="Figma"
                                color="blue"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StackItem({
                       icon,
                       label,
                       color,
                   }: {
    icon: React.ReactNode;
    label: string;
    color: "blue" | "cyan" | "green";
}) {
    const colors = {
        blue: "text-blue-400",
        cyan: "text-cyan-400",
        green: "text-green-400",
    };

    return (
        <div className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10 hover:border-blue-500/40 transition">
            <span className={colors[color]}>{icon}</span>
            <span className="text-sm font-medium">{label}</span>
        </div>
    );
}

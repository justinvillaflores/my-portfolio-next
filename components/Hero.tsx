"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const texts = [
    "Aspiring Web Developer",
    "Aspiring UI/UX Developer",
    "Aspiring FullStack Developer",
];

const typingSpeed = 120;
const deletingSpeed = 80;
const pauseTime = 1200;

export default function Hero() {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText.length < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length + 1));
            }, typingSpeed);
        } else if (!isDeleting && displayText.length === currentText.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length - 1));
            }, deletingSpeed);
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen bg-[#050b1a] text-white flex items-center pt-24 md:pt-20 overflow-hidden"
        >
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/20 blur-[100px] md:blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                <div className="z-10 text-center md:text-left order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full mb-6">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-xs text-blue-300 font-medium">
                            Open to Work 2026
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                        Creative <br />
                        <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-white bg-clip-text text-transparent">
                            Learning-Driven Developer
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-2 h-8">
                        <span className="border-r-2 border-blue-400 pr-1">
                            {displayText}
                        </span>
                    </p>

                    <p className="text-gray-400 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed text-sm md:text-base">
                        Passionate about learning new technologies, building projects, and
                        collaborating with peers to solve real-world problems in my college
                        journey.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
                        <a
                            href="#projects"
                            className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500 px-8 py-3 rounded-xl font-bold hover:opacity-90 transition shadow-lg shadow-blue-600/30"
                        >
                            View My Work →
                        </a>

                        <a
                            href="#contact"
                            className="bg-white/5 border border-white/10 px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center items-center order-1 md:order-2">
                    <div className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] lg:w-[400px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10">
                        <Image
                            src="/profile.png"
                            alt="Justin Profile"
                            fill
                            priority
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    <div className="absolute bottom-10 left-[-20px] md:left-[-40px] bg-[#0b1228]/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl w-[180px] md:w-[220px] animate-bounce-slow">
                        <div className="flex gap-1.5 mb-3">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>

                        <pre className="text-[10px] font-mono leading-relaxed text-left">
                            <code className="text-blue-400 italic">const</code>{" "}
                            <code className="text-sky-400">identity</code> = {"{"}{"\n"}
                            &nbsp;&nbsp;name: <code className="text-green-400">"Justin"</code>,{"\n"}
                            &nbsp;&nbsp;role: <code className="text-green-400">"mangupal"</code>
                            {"\n"}
                            {"}"}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}
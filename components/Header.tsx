"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 w-full bg-[#0a0510]/80 backdrop-blur-md z-[100] px-6 py-4">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo Area */}
                <div className="flex flex-col leading-tight text-left">
                    <h2 className="text-xl font-bold text-white flex items-center gap-1">
                        &lt;<span className="text-blue-400">JustinDev</span>/&gt;
                    </h2>
                    <span className="ml-5 text-[10px] text-gray-400 tracking-widest uppercase">
                        College Student
                    </span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-10 text-gray-300 font-medium text-sm uppercase tracking-widest">
                    {navLinks.map((link, index) => (
                        <li key={index} className="relative group">
                            <Link
                                href={link.href}
                                className="transition-colors duration-300 group-hover:text-blue-500"
                            >
                                {link.name}
                            </Link>
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                {/* CUSTOM HAMBURGER */}
                <div
                    className="flex flex-col justify-between w-8 h-5 cursor-pointer md:hidden z-[110]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`w-full h-[3px] bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8.5px]" : ""}`}></span>
                    <span className={`w-full h-[3px] bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`w-full h-[3px] bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8.5px]" : ""}`}></span>
                </div>

                {/* MOBILE MENU OVERLAY */}
                <div className={`
                    fixed inset-0 w-full h-screen bg-[#0a0510] flex items-center justify-center transition-all duration-500 ease-in-out md:hidden
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}>
                    <nav className="flex flex-col items-center gap-8">
                        {navLinks.map((link, index) => {
                            // CALCULATE DELAY HERE TO AVOID PARSING ERROR
                            const delayValue = (index * 100) + "ms";

                            return (
                                <Link
                                    key={index}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-4xl font-black italic tracking-tighter transition-all duration-500 hover:text-blue-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                                    style={{ transitionDelay: delayValue }}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </nav>
        </header>
    );
}
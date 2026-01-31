"use client";

import React from 'react';
import {
    Mail, MapPin, Linkedin, Github, Facebook,
    Instagram, Send, Copy, ArrowUpRight, Heart
} from 'lucide-react';

export default function ContactAndFooter() {
    const currentYear = new Date().getFullYear();

    const copyToClipboard = (text: string) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                alert(`Copied to clipboard: ${text}`);
            }, () => {
                alert('Failed to copy!');
            });
        }
    };

    const email = "mjustinvillaflores@email.com";

    return (
        <section
            id="contact"
            className="min-h-screen bg-[#050505] text-white py-20 px-4 flex flex-col items-center scroll-mt-10"
        >
            <div className="max-w-6xl mx-auto mb-32 w-full">
                <div className="text-center mb-16 space-y-2">
                    <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">Get In Touch</span>
                    <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase">Let's Connect</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 space-y-4">
                        <div className="group bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                            <div className="flex justify-between items-start relative z-10">
                                <div className="space-y-4">
                                    <div className="p-3 bg-blue-500/10 rounded-lg w-fit">
                                        <Mail className="text-blue-500" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Official Email</p>
                                        <p className="text-lg font-medium">{email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => copyToClipboard(email)}
                                    className="p-2 hover:bg-white/5 rounded-lg text-gray-500 transition-colors"
                                    title="Copy Email"
                                >
                                    <Copy size={18} />
                                </button>
                            </div>
                            <div className="absolute -right-8 -bottom-8 text-white/[0.02] rotate-12 group-hover:text-blue-500/[0.03] transition-colors">
                                <Mail size={160} />
                            </div>
                        </div>

                        <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-500">
                            <div className="space-y-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg w-fit">
                                    <MapPin className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Base Location</p>
                                    <p className="text-lg font-medium">Olongapo City, Philippines</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="http://www.linkedin.com/in/justin-villaflores-7b7467337"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl hover:bg-white/5 transition-all group"
                            >
                                <Linkedin size={20} className="group-hover:text-blue-400" />
                                <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
                            </a>

                            <a
                                href="https://www.facebook.com/jstn.m.vllflrs.2020"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl hover:bg-white/5 transition-all group"
                            >
                                <Facebook size={20} className="group-hover:text-blue-500" />
                                <span className="text-sm font-bold uppercase tracking-widest">Facebook</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl relative overflow-hidden">
                        <div className="flex gap-1.5 absolute top-6 right-8">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>

                        <h3 className="text-xl font-bold italic mb-8">Send Message_</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors w-full"
                                />
                            </div>
                            <select className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors w-full text-gray-400 appearance-none">
                                <option>Select Project Type</option>
                                <option>Web Development</option>
                                <option>Mobile App</option>
                                <option>UI/UX Design</option>
                            </select>
                            <textarea
                                rows={4}
                                placeholder="Tell me about your project..."
                                className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors w-full resize-none"
                            ></textarea>
                            <button className="flex items-center justify-center gap-2 bg-white text-black font-black uppercase text-xs px-8 py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all w-full md:w-fit group">
                                Send Message <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-20">
                <div className="text-center space-y-8 mb-20">
                    <p className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px]">What's Next?</p>
                    <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none">
                        Let's build something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-800 to-white">
              legendary together.
            </span>
                    </h2>
                    <div className="flex justify-center">
                        <a href={`mailto:${email}`} className="group flex items-center gap-2 text-lg md:text-2xl font-light border-b border-white/20 pb-2 hover:border-blue-500 transition-all duration-300">
                            {email} <ArrowUpRight className="group-hover:text-blue-500 transition-colors" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-8">


                    <div className="flex items-center gap-4 order-first md:order-none">
                        <a
                            href="https://github.com/justinvillaflores"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/[0.03] rounded-full border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href="http://www.linkedin.com/in/justin-villaflores-7b7467337"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/[0.03] rounded-full border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com/jstnvllflrs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/[0.03] rounded-full border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Instagram size={18} />
                        </a>

                        <a
                            href="https://www.facebook.com/jstn.m.vllflrs.2020"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/[0.03] rounded-full border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <Facebook size={18} />
                        </a>
                    </div>

                    <p className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        © {currentYear} Built with love & Code.
                    </p>
                </div>
            </div>
        </section>
    );
}

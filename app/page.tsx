"use client";

import Link from "next/link";
import { useState } from "react";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rani2003333@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-8 py-3 rounded-full font-bold transition duration-300 flex items-center justify-center gap-2 border border-gray-700 ${
        copied ? "bg-green-600 text-white border-green-600" : "bg-white text-black hover:bg-blue-600 hover:text-white hover:border-blue-600"
      }`}
    >
      {copied ? "✓ Copied!" : "Copy Email"}
    </button>
  );
}

export default function Home() {
  // DELETE THE 'handleCopy' FUNCTION THAT WAS HERE

  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 scroll-smooth">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center py-6 border-b border-gray-800">
        <h1 className="font-semibold text-lg tracking-tight">Rani Sharma</h1>

        <div className="flex items-center gap-6 text-gray-400 text-sm font-medium">
          <a href="#projects" className="hover:text-blue-400 transition hidden md:block">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition hidden md:block">
            Contact
          </a>
          <a
            href="https://github.com/rani-86"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition hidden md:block"
          >
            GitHub
          </a>

          {/* Resume Button - MAKE SURE YOUR FILE IS NAMED resume.pdf IN PUBLIC FOLDER */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition duration-300"
          >
            <span>Resume</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75l-3 3m0 0l3 3m-3-3H21" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
            Rani Sharma
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
          Building production-grade full stack applications with secure
          authentication, scalable APIs, and optimized database architecture.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition duration-300"
          >
            View Projects
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN" 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-500 hover:text-blue-400 transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-8 text-gray-200">Technical Stack</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind CSS", "TypeScript", "HTML5/CSS3"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300 border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST API"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300 border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Tools & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {["Git/GitHub", "Docker", "AWS", "Vercel", "Postman", "Linux"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-800 rounded-md text-sm text-gray-300 border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          Featured Projects 
          <span className="text-blue-500 text-sm font-normal bg-blue-500/10 px-3 py-1 rounded-full">3 Selected</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <Link
            href="/projects/spie"
            className="group bg-zinc-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 block"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">SPIE & PRODYOG</h3>
              <span className="text-gray-500 group-hover:text-blue-400 transition transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Production-grade event management platform with role-based access, real-time leaderboards, and secure Google OAuth integration.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-blue-400/90 font-mono">
              <span className="bg-blue-900/20 px-2 py-1 rounded">Next.js</span>
              <span className="bg-blue-900/20 px-2 py-1 rounded">PostgreSQL</span>
              <span className="bg-blue-900/20 px-2 py-1 rounded">Prisma</span>
            </div>
          </Link>

          <Link
            href="/projects/inknest"
            className="group bg-zinc-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 block"
          >
             <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">INKNEST</h3>
              <span className="text-gray-500 group-hover:text-blue-400 transition transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-stack printing service platform featuring modular REST APIs, rate-limiting for security, and optimized MongoDB indexing.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-blue-400/90 font-mono">
              <span className="bg-blue-900/20 px-2 py-1 rounded">Node.js</span>
              <span className="bg-blue-900/20 px-2 py-1 rounded">MongoDB</span>
              <span className="bg-blue-900/20 px-2 py-1 rounded">Express</span>
            </div>
          </Link>

          <Link
            href="/projects/accessibility"
            className="group bg-zinc-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 md:col-span-2 block"
          >
             <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">Accessibility Analyzer</h3>
              <span className="text-gray-500 group-hover:text-blue-400 transition transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">
              High-performance backend system for automated web audits. Leverages asynchronous processing pipelines to handle concurrent Lighthouse API requests without blocking.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-blue-400/90 font-mono">
              <span className="bg-blue-900/20 px-2 py-1 rounded">Node.js</span>
              <span className="bg-blue-900/20 px-2 py-1 rounded">Lighthouse API</span>
              <span className="bg-blue-900/20 px-2 py-1 rounded">Async Queues</span>
            </div>
          </Link>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>

        <p className="text-gray-400 mb-8 max-w-lg">
          I'm currently looking for new opportunities in backend or full-stack development. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Copy Email Button */}
          <CopyEmailButton />

          {/* Direct Mail Link */}
          <a 
            href="mailto:rani2003333@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold border border-gray-700 hover:bg-gray-800 transition duration-300"
          >
            Open Mail App
          </a>
        </div>

        <div className="flex gap-6 mt-12 text-gray-500">
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rani-86"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
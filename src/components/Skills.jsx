// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

// Falling 0/1 effect
const fallingBinary = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 12 + 8,
}));

// Skills Data
const frontendSkills = ["JavaScript", "React", "Node.js", "MongoDB", "Express.js"];
const offensiveSkills = ["Burp Suite", "Nmap", "Metasploit", "Linux", "Python"];
const learningSkills = [
  { platform: "TryHackMe", topics: "OWASP, LFI/XSS/IDOR, Privilege Escalation" },
  { platform: "Bugcrowd", topics: "Live Web Bug Bounties" },
  { platform: "PortSwigger", topics: "API Security, LLM Attacks, Real Exploits" },
  { platform: "Hack The Box", topics: "Red Team Practice, Web + OS Exploitation" },
];

export default function Skills() {
  return (
    <section className="relative w-full min-h-screen text-green-400 flex flex-col items-center justify-center overflow-hidden px-6 py-12">

      {/* Hero-style BG Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a192f] to-black"></div>

      {/* Falling 0/1 */}
      {fallingBinary.map((bit) => (
        <motion.span
          key={bit.id}
          initial={{ y: "-100vh" }}
          animate={{ y: "100vh" }}
          transition={{ duration: bit.duration, repeat: Infinity, ease: "linear" }}
          className="absolute text-green-500 opacity-40 font-mono text-xl select-none"
          style={{ left: bit.left }}
        >
          {Math.random() > 0.5 ? "0" : "1"}
        </motion.span>
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-8">Skills & Arsenal</h1>

        {/* Frontend / Backend */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-4">💻 Frontend / Backend</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {frontendSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-32 h-28 bg-gray-900 rounded-lg shadow-lg p-4 text-green-200 font-semibold cursor-pointer transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Offensive Security */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-4">🧪 Offensive Security</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {offensiveSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-32 h-28 bg-gray-900 rounded-lg shadow-lg p-4 text-green-200 font-semibold cursor-pointer transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-4">🧠 Currently Learning</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {learningSkills.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col w-64 h-32 bg-gray-900 rounded-lg shadow-lg p-4 text-green-200 font-semibold cursor-pointer transition-all"
              >
                <span className="text-green-300 font-bold text-lg mb-2">{item.platform}</span>
                <span className="text-green-200 text-sm">{item.topics}</span>
              </div>
            ))}
            {/* Areas of Focus */}
            <div className="flex flex-col w-64 h-32 bg-gray-900 rounded-lg shadow-lg p-4 text-green-200 font-semibold cursor-pointer transition-all">
              <span className="text-green-300 font-bold text-lg mb-2">🧬 Areas of Focus</span>
              <span className="text-green-200 text-sm">
                XSS, SQLi, SSRF, IDOR, LFI, JWT, Broken Auth, Prompt Injection, LLM Jailbreak
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

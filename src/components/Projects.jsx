// src/components/Projects.jsx
import { FaBuilding, FaShieldAlt, FaUser, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const fallingBinary = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 12 + 8,
}));

const projects = [
  {
    name: "RealEstate",
    tech: "MERN",
    description: "Property listings with clean UI",
    live: "https://realestate-seven-tau.vercel.app/",
    code: "https://github.com/dileshwar-lahre/realestate",
    icon: <FaBuilding className="text-4xl text-blue-400" />,
  },
  {
    name: "EoneAI",
    tech: "React + Gemini API",
    description: "AI-powered code review tool",
    live: "https://eone-ai.vercel.app/",
    code: "https://github.com/dileshwar-lahre/EoneAI",
    icon: <FaCode className="text-4xl text-cyan-400" />,
  },
  {
    name: "Cyber-Security-Assessment",
    tech: "Python",
    description: "Recon tools & checklists",
    live: "https://github.com/dileshwar-lahre/cyber-security-assessment",
    code: "https://github.com/dileshwar-lahre/cyber-security-assessment",
    icon: <FaShieldAlt className="text-4xl text-green-400" />,
  },
  {
    name: "BirthdayWish2",
    tech: "React",
    description: "Birthday greetings web app",
    live: "https://brithdaywish2.vercel.app/",
    code: "https://github.com/dileshwar-lahre/brithdaywish2",
    icon: <FaUser className="text-4xl text-purple-400" />,
  },
  {
    name: "BirthdayWish",
    tech: "React",
    description: "Birthday greetings simple",
    live: "https://brithdaywish-nu.vercel.app/",
    code: "https://github.com/dileshwar-lahre/brithdaywishok",
    icon: <FaUser className="text-4xl text-pink-400" />,
  },
  {
    name: "Portfolio 2",
    tech: "React + Tailwind",
    description: "Modern personal portfolio v2",
    live: "https://portfolio-five-psi-26.vercel.app/",
    code: "https://github.com/dileshwar-lahre/portfolio",
    icon: <FaUser className="text-4xl text-yellow-400" />,
  },
];

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen text-green-400 flex flex-col items-center justify-center overflow-hidden px-6 py-16">

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

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 relative z-10 tracking-wide"
      >
        🚀 My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 w-full max-w-6xl">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-center justify-between hover:scale-105 transition-transform"
          >
            <div className="mb-4">{proj.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <span className="text-sm text-gray-400 mb-2">{proj.tech}</span>
            <p className="text-center text-gray-300 mb-4">{proj.description}</p>

            <div className="flex gap-3 mt-auto">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-md hover:shadow-cyan-500/40 hover:scale-105 transition"
              >
                View Project
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm shadow-md hover:shadow-pink-500/40 hover:scale-105 transition"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

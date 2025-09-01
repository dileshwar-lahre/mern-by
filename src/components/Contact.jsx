// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaBug } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

const fallingBinary = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 12 + 8,
}));

export default function Contact() {
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
        📬 Contact & Platforms
      </motion.h2>

      {/* Contact / Platform Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 w-full max-w-5xl">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <FaEnvelope className="text-4xl mb-4 text-green-400" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-green-200 text-center break-words">dileshwar.lahre@example.com</p>
        </motion.div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <FaGithub className="text-4xl mb-4 text-green-400" />
          <h3 className="text-xl font-semibold mb-2">GitHub</h3>
          <a
            href="https://github.com/dileshwar-lahre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-100 transition"
          >
            github.com/dileshwar-lahre
          </a>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <FaLinkedin className="text-4xl mb-4 text-green-400" />
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/dileshwar-lahre-530039273"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-100 transition"
          >
            linkedin.com/in/dileshwar-lahre
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <FaPhone className="text-4xl mb-4 text-green-400" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-green-200">+91 9131460470</p>
        </motion.div>

        {/* Bugcrowd */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <FaBug className="text-4xl mb-4 text-green-400" />
          <h3 className="text-xl font-semibold mb-2">Bugcrowd</h3>
          <a
            href="https://bugcrowd.com/h/Error502"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-100 transition text-center break-words"
          >
            bugcrowd.com/h/Error502
          </a>
        </motion.div>

        {/* TryHackMe */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
        >
          <SiTryhackme className="text-4xl mb-4 text-green-400" />
          <h3 className="text-xl font-semibold mb-2">TryHackMe</h3>
          <a
            href="https://tryhackme.com/p/Error502"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 hover:text-green-100 transition text-center break-words"
          >
            tryhackme.com/p/Error502
          </a>
        </motion.div>
      </div>
    </section>
  );
}

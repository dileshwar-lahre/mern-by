// src/components/About.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBug, FaNetworkWired } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

const fallingBinary = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 12 + 8,
}));

export default function About() {
  return (
    <section className="relative w-full min-h-screen text-green-400 flex flex-col items-center justify-center overflow-hidden px-6 py-12">

      {/* Hacker BG Gradient (same as Hero) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a192f] to-black"></div>

      {/* Matrix-style falling 0/1 */}
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
        className="relative z-10 max-w-3xl text-center md:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-400 mb-6 drop-shadow-lg"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Who Am I?
        </motion.h1>

        <motion.p
          className="text-green-200 text-lg md:text-xl mb-4 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hey! I’m <span className="text-green-300 font-semibold">Dileshwar Lahre</span> — 
          a full-stack developer turned ethical hacker. I believe in 
          <span className="text-green-300"> secure by design</span>.  
          From crafting dynamic UIs to hunting down bugs in production systems — I do both.
        </motion.p>

        <motion.p
          className="text-green-200 text-lg md:text-xl mb-3 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          🔍 Focused on modern web penetration testing, OWASP Top 10, and real-world vulnerabilities.
        </motion.p>

        <motion.p
          className="text-green-200 text-lg md:text-xl mb-6 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          ⚙️ Learning from <span className="text-green-300 font-semibold">TryHackMe</span>, 
          <span className="text-green-300 font-semibold"> Hack The Box</span>, 
          <span className="text-green-300 font-semibold"> Bugcrowd</span>, and 
          <span className="text-green-300 font-semibold"> PortSwigger Labs</span>.
        </motion.p>

        {/* Social / Platform Icons */}
        <motion.div
          className="flex space-x-6 justify-center md:justify-start mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="https://github.com/dileshwar-lahre/dileshwar-lahre" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/dileshwar-lahre-530039273" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
          </a>
          <a href="https://bugcrowd.com/h/Error502" target="_blank" rel="noopener noreferrer">
            <FaBug className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
          </a>
          <a href="https://tryhackme.com/p/Error502" target="_blank" rel="noopener noreferrer">
            <SiTryhackme className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaNetworkWired className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

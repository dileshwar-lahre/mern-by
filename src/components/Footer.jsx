// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaBug } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { motion } from "framer-motion";

const fallingBinary = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 12 + 8,
}));

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-green-400 flex flex-col items-center justify-center overflow-hidden px-6 py-12">
      
      {/* Hero-style BG Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a192f] to-black"></div>

      {/* Falling 0/1 */}
      {fallingBinary.map((bit) => (
        <motion.span
          key={bit.id}
          initial={{ y: "-100vh" }}
          animate={{ y: "100vh" }}
          transition={{ duration: bit.duration, repeat: Infinity, ease: "linear" }}
          className="absolute text-green-500 opacity-30 font-mono text-lg select-none"
          style={{ left: bit.left }}
        >
          {Math.random() > 0.5 ? "0" : "1"}
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-4 text-sm text-green-300">
          © 2025 Dileshwar Lahre. All Rights Reserved.
        </p>
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/dileshwar-lahre"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/dileshwar-lahre-530039273"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://bugcrowd.com/h/Error502"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors"
          >
            <FaBug className="text-2xl" />
          </a>
          <a
            href="https://tryhackme.com/p/Error502"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition-colors"
          >
            <SiTryhackme className="text-2xl" />
          </a>
        </div>
        <p className="text-green-400 text-sm">
          Made with 💻 and ☕ by Dileshwar Lahre
        </p>
      </div>
    </footer>
  );
}

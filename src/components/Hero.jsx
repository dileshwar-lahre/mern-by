import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaBug, FaNetworkWired } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { Link } from "react-router-dom";

const fallingBinary = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 10, // slow fall
}));

export default function Hero() {
  return (
    <section className="relative w-full h-screen text-green-400 flex flex-col items-center justify-center overflow-hidden">

      {/* Hacker BG Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a192f] to-black"></div>

      {/* Falling 0/1 background */}
      {fallingBinary.map((bit) => (
        <motion.span
          key={bit.id}
          initial={{ y: "-100vh" }}
          animate={{ y: "100vh" }}
          transition={{
            duration: bit.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-green-500 opacity-40 font-mono text-xl select-none"
          style={{ left: bit.left }}
        >
          {Math.random() > 0.5 ? "0" : "1"}
        </motion.span>
      ))}

      {/* Profile image */}
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gray-900/70 border-4 border-green-500 shadow-[0_0_20px_#22c55e] mb-6 overflow-hidden relative z-10">
        {/* <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
      </div>

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-green-400 drop-shadow-lg text-center relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I&apos;m <span className="text-green-300">Dileshwar Lahre</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-green-200 max-w-2xl text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        MERN Stack Developer ⚡ Cybersecurity Enthusiast 🛡️ Hacker Mindset
      </motion.p>

      {/* Social icons */}
      <div className="flex space-x-6 mt-6 z-10">
        <a
          href="https://github.com/dileshwar-lahre/dileshwar-lahre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/dileshwar-lahre-530039273"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
        </a>
        <a
          href="https://bugcrowd.com/h/Error502"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBug className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
        </a>
        <a
          href="https://tryhackme.com/p/Error502"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTryhackme className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaNetworkWired className="text-2xl md:text-3xl hover:text-green-300 transition-colors" />
        </a>
      </div>

      {/* Action Buttons */}
      <motion.div
        className="flex space-x-6 mt-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link
          to="/projects"
          className="px-6 py-2 rounded-lg border border-green-500 text-green-300 font-semibold hover:bg-green-500 hover:text-black shadow-[0_0_15px_#22c55e] transition"
        >
          View Projects
        </Link>
        <a
          href="https://drive.google.com/file/d/1_ppwxUuNXnIH_PWAP0PUop0xfCDkmbwD/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-lg border border-green-500 text-green-300 font-semibold hover:bg-green-500 hover:text-black shadow-[0_0_15px_#22c55e] transition"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
}

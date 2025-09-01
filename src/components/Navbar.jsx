// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // <-- React Router Link

export default function Navbar({ brand = "MyPortfolio" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-green-400 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 grid place-items-center rounded-full bg-green-500 text-black font-bold">
              M
            </div>
            <span className="text-xl font-bold tracking-tight">{brand}</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link to="/skills" className="hover:text-white transition-colors">Skills</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-green-500 hover:text-black transition"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (Overlay + Animation) */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-0 w-full bg-black border-t border-green-500 flex flex-col space-y-2 p-4 z-40 md:hidden"
            >
              <Link to="/" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-green-500 hover:text-black transition">Home</Link>
              <Link to="/projects" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-green-500 hover:text-black transition">Projects</Link>
              <Link to="/skills" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-green-500 hover:text-black transition">Skills</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-green-500 hover:text-black transition">About</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 px-3 rounded hover:bg-green-500 hover:text-black transition">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

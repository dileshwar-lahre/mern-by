import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <Projects/> */}
      
      <Contact/>
      <Footer/>
      {/* <Routes>
  {/* <Route path="/" element={<Hero />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
</Routes> */} */}

    </div>
  )
}

export default App
import React from 'react'

import Nav from "./components/Nav"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"


export default function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/*" element={<Notfound/>} />
    </Routes>
    </>
  )
}

import React from 'react'

import Nav from "./components/Nav"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import "./styles/Nav.css"
import "./Styles/Home.css"
import "./Styles/Skills.css"
import "./Styles/Portfolio.css"
import "./Styles/Project.css"
import "./Styles/Services.css"

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
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

// import React from 'react'
import '../Styles/Nav.css'


import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { FiLayers } from "react-icons/fi";
import { DiYii } from "react-icons/di";
import { FiPhoneCall } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";


export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div className="navbar-main" style={{display:"flex"}}>
      <img className="logo" src="LogoBlack.png" alt="logo" style={{width:"80px", height:"80px" }}/>
      <div className='name-title'>
      <h2 className='name-one'>Naveed </h2> &nbsp; &nbsp;
      <h2 className='name-two'> Altaf</h2>
      </div>
      <ul className={`nav-ultag ${isOpen ? 'open' : ''}`} style={{display:"flex", gap:"40px",height:"50px", paddingTop:"10px", listStyle:"none", justifyContent:"center", marginTop:"20px", fontSize:"20px"}}>
        <li>
          <Link className='navbar-link' to="/" style={{gap:"5px"}}><FaHome />home</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/portfolio" style={{gap:"9px"}}><BsPersonWorkspace />portfolio</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/skills" style={{gap:"5px"}}><GrWorkshop />skills</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/projects" style={{gap:"5px"}}><FiLayers />Projects</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/services" style={{gap:"5px"}}><DiYii />services</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/contact" style={{gap:"5px"}}><FiPhoneCall />contact</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/about" style={{gap:"5px"}}><FiMessageCircle />about</Link>
        </li>

      </ul>
      <div className="collapsed-menu" onClick={toggleMenu}>
        <span className={`menu ${isOpen ? 'open' : ''}`}></span>
        <span className={`menu ${isOpen ? 'open' : ''}`}></span>
        <span className={`menu ${isOpen ? 'open' : ''}`}></span>
      </div>

    </div>
  )
}

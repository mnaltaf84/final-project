import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { FiLayers } from "react-icons/fi";
import { DiYii } from "react-icons/di";
import { FiPhoneCall } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";


export default function Nav() {
  return (
    <div style={{display:"flex"}}>
      <img src="logo.jpeg" alt="" style={{backgroundColor:"green", width:"80px", height:"80px" }}/>
      <ul className='nav-ultag' style={{display:"flex", gap:"40px",height:"50px", paddingTop:"10px", listStyle:"none", justifyContent:"center", marginTop:"20px", fontSize:"20px"}}>
        <li>
          <Link className='nav-bar' to="/"><FaHome /> home</Link>
        </li>
        <li>
          <Link className='nav-bar' to="/portfolio"><BsPersonWorkspace />portfolio</Link>
        </li>
        <li>
          <Link className='nav-bar' to="/skills"><GrWorkshop />skills</Link>
        </li>
        <li>
          <Link className='nav-bar' to="/projects"><FiLayers />Projects</Link>
        </li>
        <li>
          <Link className='nav-bar' to="/services"><DiYii />services</Link>
        </li>
        <li>
          <Link className='nav-bar' to="/contact"><FiPhoneCall />contact</Link>
        </li>
        <li>
          <Link className='nav-bar' to="/about"><FiMessageCircle />about</Link>
        </li>

      </ul>
    </div>
  )
}

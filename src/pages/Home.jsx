import React from 'react'
import "../Styles/Home.css"
import { SlSocialYoutube } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className='main-header'>
        
      <div className='sub-header'>
    <ul className='social-bar'>
      <li className='youtube-icon'><h2><a href="https://www.youtube.com/@naveedaltaf2652"><SlSocialYoutube/></a></h2></li>
      <li className='linkedin-icon'><h2><a href="https://www.linkedin.com/in/muhammad-naveed-altaf-a3968385/"><FaLinkedin/></a></h2></li>
      <li className='whatsapp-icon'><h2><a href="https://wa.me/923144994654"><FaWhatsappSquare/></a></h2></li>
      <li className='facebook-icon'><h2><a href="https://www.facebook.com/profile.php?id=100084735532378"><FaFacebook/></a></h2></li>
      <li className='instagram-icon'><h2><a href="https://www.instagram.com/naveedaltaf6/"><FaInstagram/></a></h2></li>
      <li><h2><a href="https://github.com/mnaltaf84"><FaGithub/></a></h2></li>
      <li><h2></h2></li>
      <li><h2></h2></li>
    </ul>
      <div className='image-div'>
        <img src="Naveed-bg.jpg" alt="profile picture" />
      </div>
      
      <div className='name'>
      <h1 style={{color:"yellow", marginLeft:"50px" }}>Naveed</h1>
      <h1 style={{color:"yellowgreen" }}>Altaf</h1>
      </div>

      <div className='intro-div'>
        <h2>Hello Am</h2>
        <h2>Naveed Altaf</h2>
        <h1>Web Developer</h1>
      </div>
      </div>
      
      <div className='play-icon-div'>
      {/* <img src="play-icon.png" alt="" /> */}
      </div>

      </div>
    </>
  )
}

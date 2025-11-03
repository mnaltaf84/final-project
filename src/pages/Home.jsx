import React from 'react'
import "../Styles/Home.css"

export default function Home() {
  return (
    <>
      <div className='main-header'>
        
      <div className='sub-header'>

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
      <img src="play-icon.png" alt="" />
      </div>

      <div className='image-div'>
        <img src="Naveed-bg.png" alt="" />
      </div>
      </div>


    </>
  )
}

import React from 'react'



export default function Projects() {
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"yellow", backgroundColor:"silver"}}>My Projects</h1>
    <div style={{height:"350px", display:"flex", flexWrap:"wrap", marginTop:"0%"}}>
      <h3>Check out my projects below:</h3>
      <ul>
        <li><a href="https://naveedaltaf-todoapp.netlify.app/">Todo App</a></li>
        <li><a href="https://naveedaltaf-weatherapp.netlify.app">Weather App</a></li>
        <li><a href="https://naveedaltaf-calculatorapp.netlify.app//">Calculator</a></li>
      </ul>
      {/* <Todo /> */}
      {/* <Weather /> */}
      {/* <Calculator /> */}
    </div>
    </div>
  )
}

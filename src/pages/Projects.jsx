import React from 'react'
import Todo from "../components/Todo"
import Weather from "../components/Weather"
import Calculator from "../components/Calculator"
import "../Styles/Calculator.css"


export default function Projects() {
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{color:"yellow", backgroundColor:"silver"}}>My Projects</h1>
    <div style={{height:"350px", display:"flex", flexWrap:"wrap", marginTop:"0%"}}>
      <Todo />
      <Weather />
      <Calculator />
    </div>
    </div>
  )
}

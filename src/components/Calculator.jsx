import React from 'react'

import "../Styles/Calculator.css"

export default function Calculator() {
  return (
    <div style={{width:"350px", height:"350px",borderRadius:"500px", backgroundColor:"#a7c957", margin:"10px"}}>
      <div className="container" style={{backgroundColor:"red", width:"100%", height:"100%", borderRadius:"500px", margin:"0%"}}>
          <br /><h1>Calculator</h1><br />
        <input type="text" style={{backgroundColor:"grey",padding:"5px",width:"53%",height:"40px", fontSize:"40px", borderRadius:"8px"}}/>
       <div style={{float:"left", marginLeft:"63px"}}>
       <div class="Button-Row1">
            <input style={{height:"35px", width:"90px"}} type="button" value="    AC     " onclick="display.value= '' "/>
            <input style={{height:"35px", width:"90px"}} type="button" value="   Del     " onclick="display.value= display.value.toString().slice(0, -1) "/>
        </div>
        <div className="Button-Row2">
            <input style={{height:"35px", width:"45px"}} type="button" value="7 " onclick="display.value += '7' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="8 " onclick="display.value += '8' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="9 " onclick="display.value += '9' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="/ " onclick="display.value += '/' "/>
        </div>
        <div className="Button-Row3">
            <input style={{height:"35px", width:"45px"}} type="button" value="4 " onclick="display.value += '4' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="5 " onclick="display.value += '5' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="6 " onclick="display.value += '6' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="* " onclick="display.value += '*' "/>
        </div>
        <div className="Button-Row4">
            <input style={{height:"35px", width:"45px"}} type="button" value="1 " onclick="display.value += '1' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="2 " onclick="display.value += '2' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="3 " onclick="display.value += '3' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="    -     " onclick="display.value+= '-' "/>
        </div>
        <div className="Button-Row5">
            <input style={{height:"35px", width:"45px"}} type="button" value="  . " onclick="display.value += '.' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="  0 " onclick="display.value += '0' "/>
            <input style={{height:"35px", width:"45px"}} type="button" value="    +    " onclick="display.value+= '+' "/>
            <input style={{height:"35px", width:"45px"}} className="Is-Equal" type="button" value="    =       " onclick="display.value= eval(display.value)"/>
        </div>
        </div>
    </div>
    </div>
  )
}

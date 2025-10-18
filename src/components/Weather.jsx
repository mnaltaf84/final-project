import React, { useState } from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";

export default function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const apiKey = import.meta.env.VITE_APP_APIKEY;
    const currentTemp = weather?.main?.temp - 273.15 ;
    const exactTemp = currentTemp.toFixed(2);

    // Function for input field to get city weather
    const handleCityName = (e)=>{
        setCity(e.target.value);
    };

    const handleFetchWeather = async()=>{
    if (!city) return;
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        if(!response.ok){
            throw new Error("City Not Found");
        }
    const data = await response.json();
    setWeather(data);
    setError("");
    } catch (error) {
        setError(error.message);
        setWeather(null);
    }
    };

  return (
    <div style={{width:"350px",height:"350px", justifyItems:"center", margin:"10px"}}>
    <div style={{backgroundColor:"skyblue", width:"100%",height:"100%", alignContent:"center",justifyItems:"center",justifyContent:"center", borderRadius:"500px"}}>
      <h1>Weather App</h1><br />
  
      <div style={{textAlign:"top",margintop:"0%", alignContent:"top", alignItems:"top", justifyContent:"top", justifyItems:"top"}}>
      <h1 style={{fontSize:"100px"}}><TiWeatherPartlySunny style={{borderRadius:"50px"}} /></h1>
      </div>
  
        <div style={{width:"100%",display:"flex", justifyContent:"center"}}>
        <input style={{borderRadius:"5px", height:"30px",width:"200px", fontSize:"20px"}} type="text" value={city} onChange={handleCityName} />&nbsp;
        <button style={{height:"30px", width:"50px", borderRadius:"5px"}} onClick={handleFetchWeather}>Get</button>
        </div>
        <div>{error}</div>
        <br />
        <h4 style={{color:"green", fontWeight:"bolder", fontSize:"25px"}}>{weather &&(<div><h4>{exactTemp} Celcius</h4>
        {/* <h4>{coord &&(<div><h4>{coord.lon} Latitude</h4> */}
        </div>
        )}
        </h4>
    </div>
    </div>
  );
}

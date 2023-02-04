import React from "react";
import weatherapp from "../work/React-weather-app.jpeg"
export default function Portfolio(){
    return (
        <div>
        <div>
          <img src={weatherapp} alt="Weather App"  width={350} height={200}/> 
          <h3>React Weather App</h3>
          <small>Landing Page for React Weather Application</small>
        </div>
        </div>
    )
}
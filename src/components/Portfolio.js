import React from "react";
import weatherapp from "../work/React-weather-app.jpeg";
import landingpage from "../work/landingpage.png";
import Weather from "../work/WeatherApp.png";

export default function Portfolio(){
    return (
        <div>
        <div>
          <img src={weatherapp} alt="Weather App"  width={350} height={200}/> 
          <h3>React Weather App</h3>
          <small>Landing Page for React Weather Application</small>
          <a href="https://github.com/Program-doctor/weather-react-app" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="http://splendid-pavlova-2335ff.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        <div>
          <img src={landingpage} alt="Landing page for cleaning business"  width={320} height={200}/> 
          <h3>Landing Page</h3>
          <small>Landing Page for a Cleaning Business</small>
          <a href="https://github.com/Program-doctor/PPBusiness" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://program-doctor.github.io/PPBusiness/split" rel="noopener noreferrer">Live Demo</a>
        </div>
        <div>
          <img src={Weather} alt="Weather App"  width={320} height={250} /> 
          <h3>Weather App</h3>
          <small>Landing Page for Weather Application</small>
          <a href="https://github.com/Program-doctor/WeatherApp" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://ppweatherwebsite.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        </div>
    )
}
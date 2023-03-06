import React from "react";
import weatherapp from "../../work/React-weather-app.jpeg";
import landingpage from "../../work/landingpage.png";
import Weather from "../../work/WeatherApp.png";
import './Portfolio.css'

export default function Portfolio(){
  const data=[
    {
      id:1,
      image:weatherapp,
      title:'React Weather App',
      details:'Landing Page for React Weather Application',
      github:'https://github.com/Program-doctor/weather-react-app',
      demo:'http://splendid-pavlova-2335ff.netlify.app/',
      alt:'React Weather App'
    },{
      id:2,
      image:landingpage,
      title:'Landing Page',
      details:'Landing Page for a Cleaning Business',
      github:'https://github.com/Program-doctor/PPBusiness',
      demo:'https://program-doctor.github.io/PPBusiness/split',
      alt:"Business Landing Page"
    },{
      id:3,
      image:Weather,
      title:'Weather App',
      details:'Landing Page for Weather Application',
      github:'https://github.com/Program-doctor/WeatherApp',
      demo:'https://ppweatherwebsite.netlify.app/',alt:'HTML/CSS Weather App'
    }
  ]
    return (
        <div id="portfolio">
          <h5 className="text-light">My Recent Work</h5>
          <h2>Portfolio</h2> 
          <div className="portfolio-container"> 
          { 
          data.map(({id,image,title,details,github,demo,alt})=>{
            return(
          <div key={id} className="content">
          <img src={image} alt={alt}  width={320} height={250} /> 
          <h3>{title}</h3>
          <small className="text-light">{details}</small>
          <div className="links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn" title="Link to Github">Github</a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" title="Link to Live page">Live Demo</a>
          </div>
        </div>
            )
          })
      }
      </div>
     </div>
    )
}
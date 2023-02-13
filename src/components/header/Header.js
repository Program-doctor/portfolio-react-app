import React from "react";
import resume from "../../profiles/resume.pdf";
import profile1 from "../../profiles/main.JPG"
import "../header/Header.css"
import Socials from "../socials/Socials";


export default function Header(){
    return (
        <div id="top">
            <p>Hello, I'm</p>
            <h1>Promise Sylvester</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <a href={resume} className="btn" title="My Resume" download>Download CV</a>
            <a href="#contact" className="btn btn-primary" title="Contact Me">Let's Talk</a>
            <Socials/>
            <div className="img-content">
                <div className="img-card">
                <img src={profile1} width="200"
                alt="Me" />
                </div>
            </div>
            <a href="#contact" title="Contact page" className="scroll">Scroll down</a>
        </div>
    )
}
import React from "react";
import resume from "../../profiles/resume.pdf";
import profile1 from "../../profiles/main.JPG"
import "../header/Header.css"


export default function Header(){
    return (
        <div id="top">
            <p>Hello, I'm</p>
            <h1>Promise Sylvester</h1>
            <h5 className="text-light">Frontend Developer</h5>
            <a href={resume} className="btn" download>Download CV</a>
            <a href="#top" className="btn btn-primary">Let's Talk</a>
            <div className="img-content">
                <div className="img-card">
                <img src={profile1} width="200"
                alt="" />
                </div>
            </div>
        </div>
    )
}
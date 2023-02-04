import React from "react";
import resume from "../profiles/resume.pdf";
import profile1 from "../profiles/profile1.jpg"


export default function Header(){
    return (
        <div id="top">
            <p>Hello, I'm</p>
            <h1>Promise Sylvester</h1>
            <h5>Frontend Developer</h5>
            <a href={resume} download>Download CV</a>
            <a href="#top">Let's Talk</a>
            <div>
                <img src={profile1} width="200"
                alt="" />
            </div>
        </div>
    )
}
import React from "react";
import profile3 from "../profiles/profile1.jpg"

export default function About(){
    return (
        <div id="about">
            <p>Get to know</p>
            <h2>About me</h2>
            <div>
                <img src={profile3} width="250"
                alt="me" />
            </div>
            <div className="card"><h6>Industry</h6>
            <p>Knowledge</p></div>
            <div className="card"><h6>Experience</h6>
            <p>1+ Year working</p></div>
            <div className="card"><h6>Projects</h6>
            <p>5+ Completed</p></div>
            <p>Promise is a Frontend Developer, with skills in Responsive UI designs and Web development, who enjoys building products and applications that solve human problems.With a background in Customer Service, Tech Training & Support, Graphic Design, Content Writing, and Product Support. Promise is able to add value and build a dynamic career by developing scalable tech solutions that address specific user needs.</p>
            <p>She is experienced in building and maintaining websites, implementing responsive designs, optimizing website performance and collaborating with any development team to implement new features and fix bugs.</p>
            <p>Promise is always looking for opportunities to learn and improve her skills in order to become a world-class Developer in the tech space. Her interests include Product Design, Product Development, Product Management, Data Science and Data Analysis.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}
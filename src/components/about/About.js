import React from "react";
import profile3 from "../../profiles/profile1.jpg";
import "./About.css"
import { BiCodeBlock } from 'react-icons/bi';
import { SlBadge } from 'react-icons/sl';
import { AiFillFolderOpen } from 'react-icons/ai';

export default function About(){
    return (
        <div id="about">
            <h5 className="text-light">Get to know</h5>
            <h2>About me</h2>
            <div className="about-container">
            <div className="about__me">
                <img src={profile3} width="250"
                alt="me" />
            </div>
            <div className="about-content">
            <div className="about__cards-container">  
            <div className="card card1">
            <BiCodeBlock className="about-icon"/>
            <h6>Industry</h6>
            <small>Knowledge</small></div>
            <div className="card">
                <SlBadge className="about-icon"/>
                <h6>Experience</h6>
            <small>1+ Year working</small></div>
            <div className="card">
                <AiFillFolderOpen className="about-icon"/>
                <h6>Projects</h6>
            <small>8+ Completed</small></div>
            </div>
            <p className="text-light" >Promise is a Frontend Developer, with skills in Responsive UI designs and Web development, who enjoys building products and applications that solve human problems.With a background in Customer Service, Tech Training & Support, Graphic Design, Content Writing, and Product Support. Promise is able to add value and build a dynamic career by developing scalable tech solutions that address specific user needs.</p>
            <p>She is experienced in building and maintaining websites, implementing responsive designs, optimizing website performance and collaborating with any development team to implement new features and fix bugs.</p>
            <p>Promise is always looking for opportunities to learn and improve her skills in order to become a world-class Developer in the tech space. Her interests include Product Design, Product Development, Product Management, Data Science and Data Analysis.</p>
            <a href="#contact" className='btn btn-primary' title="Contact Me">Let's Talk</a>
            </div>
        </div>
        </div>
    )
}
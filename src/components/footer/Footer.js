import React from "react";
import './Footer.css';
import { BsLinkedin, BsGithub ,BsInstagram} from 'react-icons/bs';

export default function Footer(){
    return(
        <div id="footer">
            <a href="#top" className="footer-logo">Promise Sylvester</a>
            <ul>
                <li><a href="#top" title="Homepage">Home</a></li>
                <li><a href="#about" title="About page">About</a></li>
                <li><a href="#experience" title="Experience page">Experience</a></li>
                <li><a href="#portfolio" title="Portfolio page">Portfolio</a></li>
                <li><a href="#contact" title="Contact page">Contact</a></li>
            </ul>
            <div className="handles">
            <a href="https://www.linkedin.com/in/sylvester-promise-7492a5247/" target="_blank" rel="noopener noreferrer"><BsLinkedin className="footer-icon"/></a> 
           <a href="https://github.com/Program-doctor" target="_blank" rel="noopener noreferrer"><BsGithub className="footer-icon"/></a> 
           <a href="https://www.instagram.com/promise.syl/" target="_blank" rel="noopener noreferrer"><BsInstagram className="footer-icon"/></a>
            </div>
            <p>Built with ReactJs and Netlify forms</p>
            <small>
                &copy; Sylvester Promise 2023. All rights reserved</small>
        </div>
    )
}
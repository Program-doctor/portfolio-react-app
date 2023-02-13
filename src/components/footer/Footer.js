import React from "react";
import './Footer.css'

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
            <div className="handles"></div>
            <p>Built with ReactJs and Netlify forms</p>
            <small>
                &copy; Sylvester Promise 2023. All rights reserved</small>
        </div>
    )
}
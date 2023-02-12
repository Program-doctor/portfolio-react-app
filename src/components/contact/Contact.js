import React from "react";
import './Contact.css';
import { FiMail } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export default function Contact(){
    return(
        <div id="contact">
            <small className="text-light">Get in Touch</small>
            <h2>Contact Me</h2>
            <div className="contact-wrapper">
            <div className="wrapper">
            <div className="container">
                <div className="card">
                    <FiMail className="icon"/>
                <h4>Email</h4>
                <h5>sylvesterpro2017@gmail.com</h5>
                <a href="mailto:sylvesterpro2017@gmail.com">Send a message</a>
                </div>
                <div className="card">
                    <BsWhatsapp className="icon"/>
                <h4>WhatsApp</h4>
                <h5>+234 9074 395 261</h5>
                <a href="https://api.whatsapp.com/send?phone=09074395261" target="_blank" rel="noopener noreferrer">Send a message</a>
                </div>
                <div className="card">
                    <BsLinkedin className="icon"/>
                <h4>Linkedin</h4>
                <h5>Sylvester Promise</h5>
                <a href="https://www.linkedin.com/in/sylvester-promise-7492a5247/" target="_blank" rel="noopener noreferrer">Send a message</a>
                </div>
            </div>
            <form action="">
            <input type="text" name="" id="" placeholder="Your Full Name" required/>
            <input type="email" name="" id=""color="red" placeholder="Your Email" required/>
            <textarea name="" id="" rows="7" placeholder="Your Message"></textarea>
            <button className="btn btn-primary">Send Message</button>
            </form>
        </div>
        </div>
        </div>
    )
}
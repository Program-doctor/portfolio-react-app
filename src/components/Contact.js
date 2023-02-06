import React from "react";

export default function Contact(){
    return(
        <div>
            <small>Get in Touch</small>
            <h3>Contact Me</h3>
            <div className="container">
                <div className="card">
                <p>Email</p>
                <small>sylvesterpro2017@gmail.com</small>
                <a href="mailto:sylvesterpro2017@gmail.com">Send a message</a>
                </div>
                <div className="card">
                <p>WhatsApp</p>
                <small>+234 9074 395 261</small>
                <a href="https://api.whatsapp.com/send?phone=09074395261" target="_blank" rel="noopener noreferrer">Send a message</a>
                </div>
                <div className="card">
                <p>Linkedin</p>
                <small>Sylvester Promise</small>
                <a href="https://www.linkedin.com/in/sylvester-promise-7492a5247/" target="_blank" rel="noopener noreferrer">Send a message</a>
                </div>
            </div>
            <input type="text" name="" id="" />
            <input type="text" name="" id=""color="red"/>
            <textarea name="" id="" cols="30" rows="10" ></textarea>
            <button>Send Message</button>
        </div>
    )
}
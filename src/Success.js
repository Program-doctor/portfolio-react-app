import React from "react";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import './components/contact/Success.css'


export default function Success(){
    return(
        <div id="card">
            <div className="success">
            <h3>Thank you for leaving a comment. I hope to see you more often and do have a wonderful time <span role="img" aria-label="smiling">😄</span></h3>
            <a href="https://imaginative-pastelito-552212.netlify.app/?"><BsFillArrowLeftCircleFill/>Back to the site</a>
            </div>
        </div>
    )
}
import React, {Component} from "react";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import './Success.css'


 class Success extends Component{
    render(){
    return(
        <div id="card">
            <div className="success">
            <h3>Thank you for leaving a comment. I hope to see you more often and do have a wonderful time <span role="img" aria-label="smiling">😄</span></h3>
            <a href="https://imaginative-pastelito-552212.netlify.app/#contact"><BsFillArrowLeftCircleFill/>Back to the site</a>
            </div>
        </div>
    );
}
}

export default Success;
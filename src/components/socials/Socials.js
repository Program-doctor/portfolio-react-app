import React from 'react';
import { BsLinkedin, BsGithub ,BsInstagram} from 'react-icons/bs';
import './Socials.css';

export default function Socials(){
    return(
        <div id='socials'>
           <a href="https://www.linkedin.com/in/sylvester-promise-7492a5247/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a> 
           <a href="https://github.com/Program-doctor" target="_blank" rel="noopener noreferrer"><BsGithub/></a> 
           <a href="https://www.instagram.com/promise.syl/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a> 
        </div>
    )
}
import React,{useState} from "react";
import "../nav/Nav.css";
import { ImHome } from 'react-icons/im';
import { FaNetworkWired } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BiMessageDots } from 'react-icons/bi';

export default function Nav(){
    const [activeNav,setActiveNav]=useState("#top");
    return(
        <nav>
            <a href="#top" onClick={()=>setActiveNav("#top")}title="Homepage" className={activeNav==="#top"?"active":''}><ImHome/></a>
            <a href="#about" onClick={()=>setActiveNav("#about")}title="About page" className={activeNav==="#about"?"active":""}><i className="fa-solid fa-user"></i></a>
            <a href="#experience" onClick={()=>setActiveNav("#experience")}title="Work experience" className={activeNav==="#experience"?"active":""}><FaNetworkWired/></a>
            <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")}title="Portfolio page" className={activeNav==="#portfolio"?"active":""}><MdWork/></a>
            <a href="#contact" onClick={()=>setActiveNav("#contact")}title="Contact me" className={activeNav==="#contact"?"active":""}><BiMessageDots/></a>
        </nav>
    )
}
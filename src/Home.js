import React, { Component, lazy, Suspense } from 'react';
import rehman from './img/r11.png';
import instagram from './img/instagram.png';
import linkdin from './img/linkedin1.png';
import github from './img/github-logo.png';
import './Homestyle.css';
import {Link} from 'react-router-dom';

import Particles from 'react-particles-js';
import {Animated} from "react-animated-css";
const particleOpt = {
 
  particles: {
  number : {
    value : 50,
    density: {
      enable :true,
      value_area:200
    }
  }
  }
  
}
const Home = () => {
    return(
        <div className="homestyle">
        <Animated animationIn="fadeOutRightBig" animationOut="fadeOut" isVisible={true}>
        <div className="maincontent">

        <div id="slideInleft">
        <img  className="img-style"  src={rehman}   alt=""/>
        </div>
        
      <div id="slideInRight" className="main-text">
    
        <h1> Hey
          I'm Abdul Rehman</h1>
          <span className="spantext" >a young</span>
        <h2>Front-end Web Developer</h2>
        <div className="icons">
          <div className="item"><a target="_blank"  href=""><img src={github} alt=""/></a></div>
          <div className="item"><a target="_blank"  href=""><img src={linkdin} alt=""/></a></div>
          <div className="item"><a  target="_blank"  href="https://www.instagram.com/rehman_coding/"><img src={instagram} alt=""/></a></div>
        </div>
        <div className="btn btn-clr">
        
        <Link to="About" > <span>View My Work</span></Link>
    
        

     
        </div>

      </div>

        </div>
        
        </Animated>
        
              
              <Particles  params={particleOpt} type="tadpole" bg={true} /> 
              
              
        </div>
    )
}

export default Home;
import React, { Component, lazy, Suspense } from 'react';
import rehman from './img/r11.png';
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

        <div id="slide">
        <img  className="img-style"  src={rehman}   alt=""/>
        </div>
        
      <div className="main-text">
    
        <h1> Hey
          I'm Abdul Rehman</h1>
          <span>a young</span>
        <h2>Front-end Web Developer</h2>
        <div className="btn btn-clr">
        <Link to="About" >    View My Work </Link>
        {/* <Link to="About" >    View My Work </Link> */}
        

     
        </div>

      </div>

        </div>
        
        </Animated>
        
              
              <Particles  params={particleOpt} type="tadpole" bg={true} /> 
              
              
        </div>
    )
}

export default Home;
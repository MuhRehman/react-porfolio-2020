import React from 'react';
import './Aboutstyle.css';
import construction from './img/construction.png';

const About = () => {
    return (
        <div className="aboutstyle">
          <section>
             {/* <h1>About US Page</h1> */}
                <div className="main-row">
                    <div className="itme-img" id="pnav" > <div className="info  porfolio-animate1"><a target="_blank" href="https://affectionate-wozniak-871f53.netlify.com/">Visit Website</a></div> </div>
                    <div className="itme-img" id="pnav" > <div className="info1 porfolio-animate2"><a target="_blank" href="https://abdulrehman500.github.io/top-main-dentist/">Visit Website</a></div> </div>
                    <div className="itme-img" id="pnav" > <div className="info3 porfolio-animate3"><a target="_blank" href="https://optimistic-darwin-f7997d.netlify.com/">Visit Website</a></div> </div>
                   
                </div>
                <div className="main-row">
                    <div className="itme-img" id="pnav" > <div className="info2 porfolio-animate4"><a target="_blank" href="http://royaltco.com/royal/top-dentist-white-master/">Visit Website</a></div> </div>
                    <div className="itme-img" id="pnav" > <div className="info4 porfolio-animate5"><a target="_blank" href="https://tender-archimedes-843b89.netlify.com/">Visit Website</a></div> </div>
                    <div className="itme-img" id="pnav" > <div className="info5 porfolio-animate6"><a target="_blank" href="https://quizzical-colden-ce56ec.netlify.com/">Visit Website</a></div> </div>
                   
                </div>
             </section>
        </div>
    )
}
export default About;
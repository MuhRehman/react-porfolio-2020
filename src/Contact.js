import React from 'react';
import './Contactstyle.css';
import skype from './img/skype.png';
import  call from './img/call.png';
import  mail from './img/mail.png';

const Contact = () => {
    return (
        <div className="contactstyle">
          <div className="container">
          <div className="margin1">
          <div className="row ">
         
                <div className="col-md-4">
                <div className="call text-center box box">
                  <img src={call} alt=""/>
                </div>
                      <div className="card-text mt-5 text-center">
                      <p>Phone no</p>

                      <h2>+923035353488</h2>
                      </div>
                </div>
                <div className="col-md-4">
                <div className="mail text-center">
                <img src={mail} alt=""/>

                    </div>
                    <div className="card-text mt-5 text-center">
                    <p>Email</p>
                      <h2>abdulrehman1@aol.com</h2>
                      </div>
                </div>
             
                <div className="col-md-4">
                <div className="skype text-center">
                <img src={skype} alt=""/>
                    </div>
                    <div className="card-text mt-5 text-center">
                    <p>Skype</p>

                      <h2>abdulrehman1_6</h2>
                      </div>
                </div>
                </div>
                    
                </div>
                </div>
        </div>
    )
}
export default Contact;
import React from 'react';
import './menustyle.css';
import logo from './img/logo.png';
import {Link} from 'react-router-dom';
const Menu = () => {
    return (
        <div className="menustyle">
        <div className="container">
            <ul>
                <li> <Link to="/"><div className="logo"><img src={logo} alt=""/></div></Link></li>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="About"> Porfolio </Link></li>
                <li><Link to="Contact"> Contact</Link></li>
            </ul>
            </div>
        </div>
    )
}
 

export default Menu;
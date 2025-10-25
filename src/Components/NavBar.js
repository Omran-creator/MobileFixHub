import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import logo from '../imgs/logo.png';
export const NavBar = () => {
    return ( 
        <div className="NavBar">
            <Link to={"/"} className="NavBar-logo" ><img src={logo} alt="img not found" className="NavBar-logo" /></Link>
            <nav className="NavBar-Links">
                <Link to="/" className="NavBar-Links">Home</Link>
                <Link to="/About" className="NavBar-Links">About</Link>
                <Link to="/Services" className="NavBar-Links">Services</Link>
                <Link to="/Contact" className="NavBar-Links">Contact</Link>
            </nav>
        </div>
     );
}
 

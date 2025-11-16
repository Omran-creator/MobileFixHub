import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import logo from '../imgs/logo.jpg';

export const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle service selection and close dropdown
    const handleServiceSelect = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="NavBar">
            <Link to={"/"} className="NavBar-logo">
                <img src={logo} alt="img not found" className="NavBar-logo" />
            </Link>
            <nav className="NavBar-Links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/About" className="nav-link">About</Link>

                {/* Services Dropdown */}
                <div
                    className="services-dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <Link to="/Services" className="nav-link">
                        Services
                    </Link>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <Link
                                to="/buying-phones"
                                onClick={handleServiceSelect} // Add onClick to close dropdown
                            >
                                Buying Phones
                            </Link>
                            <Link
                                to="/repairing-phones"
                                onClick={handleServiceSelect} // Add onClick to close dropdown
                            >
                                Repairing Phones
                            </Link>
                            <Link
                                to="/buying-accessories"
                                onClick={handleServiceSelect} // Add onClick to close dropdown
                            >
                                Buying Accessories
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/Contact" className="nav-link">Contact</Link>
            </nav>
        </div>
    );
}
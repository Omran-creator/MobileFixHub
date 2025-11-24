import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import logo from '../imgs/logo.jpg';
import { CartButton } from "./CartButton";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook
import '../Styles/theme.css'

export const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme(); // Use the hook to get theme values

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
                <Link to="/" >Home</Link>

                <div
                    className="services-dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <Link className="nav-link">
                        Services
                    </Link>

                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <Link
                                to="/Repair"
                                onClick={handleServiceSelect}
                            >
                                Repair
                            </Link>
                            <Link
                                to="/phones"
                                onClick={handleServiceSelect}
                            >
                                 Phones
                            </Link>                            
                            <Link
                                to="/Parts"
                                onClick={handleServiceSelect}
                            >
                                Parts
                            </Link>
                            <Link
                                to="/accessories"
                                onClick={handleServiceSelect}
                            >
                                Accessories
                            </Link>
                        </div>
                    )}
                </div>

                <Link to="/Contact" className="nav-link">Contact</Link>

                <div className="nav-right">
                    <button className="btn" onClick={toggleDarkMode}>
                        {darkMode ? "☀️ Light" : "🌙 Dark"}
                    </button>
                    <CartButton />
                </div>
            </nav>
        </div>
    );
}
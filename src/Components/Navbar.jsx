import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            
                <li className="navlist">
                    <Link to="/">Home</Link>
                </li>
                <li className="navlist">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="navlist">
                    <Link to="/skills">Skills</Link>
                </li>
                <li className="navlist">
                    <Link to="/contact">Contact</Link>
                </li>
            
        </div>
    );
}

export default Navbar;
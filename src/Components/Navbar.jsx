import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import rune from '../assets/rune.png';

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

    const style = {
      navlist:{
      display: burgerOpen ? 'inline-block' : 'none'
      }}
    

  return (
    <div className="navbar">
      <div>
        <img className="icon" src={rune} alt="rune" />
      </div>
      <div className={burgerOpen ? "navigation" : "navigation expanded"}>
      <li className="navlist" id="navilist">
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
      <div className="menu" onClick={toggleBurger} style= {style}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        
      </div>

    </div>
  );
};

export default Navbar;

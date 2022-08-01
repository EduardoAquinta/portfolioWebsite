import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Runebutton from './RuneButton';

//create hook for opening/closing mobile menu
const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

    const style = {
      navlist:{
      display: burgerOpen ? 'inline-block' : 'none'
      }}

    
    
//create navbar for desktop and mobile versions
  return (
    <div className="navbar">
      
        <Runebutton href="https://archive.org/details/bucket-airlines" />
      
      <div className={burgerOpen ? "navigation expanded" : "navigation"}>
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

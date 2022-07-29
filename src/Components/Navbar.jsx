import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import rune from '../assets/rune.png';

const Navbar = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    }
  return (
    <div className="navbar">
      <div>        
        <img className="icon" src={rune} alt="rune" />
      </div>
      <li className="navlist" id="navi-list">
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
      <div className='menu' onClick={toggleBurger}>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <style> {
}               .navlist {`
   
    display: ${burgerOpen ? 'block' : 'none'};
  `}</style>
     
      </div>
    </div>
  );
};

export default Navbar;

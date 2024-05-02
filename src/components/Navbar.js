import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <NavLink to="/" exact className="navbar__link navbar__logo-link">TechByte Scholar</NavLink>
      </div>
      <nav className="navbar__menu">
        <NavLink to="/" exact className="navbar__link" activeClassName="navbar__link--active">
          HOME
        </NavLink>
        
        <NavLink to="/about" className="navbar__link" activeClassName="navbar__link--active">
          ABOUT US
        </NavLink>
        <NavLink to="/contact" className="navbar__link" activeClassName="navbar__link--active">
          CONTACT US
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

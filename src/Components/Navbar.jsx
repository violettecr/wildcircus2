import React from 'react';
import { Link } from "react-router-dom";
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar shadow navbar-expand-md navbar-custom bg-light sticky-top scrolling-navbar">
      <div id="navMenu">
          <div>
            <Link to="/">
              Accueil 
            </Link>
            <Link to="/gallery">
              Galerie 
            </Link>
            <Link to="/showDate">
              Nos dates 
            </Link>
            <Link to="/visitor">
              Livre d'or
            </Link>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;

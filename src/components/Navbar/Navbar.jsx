import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <ul className="navbarItem">
        <li className="navbarLink navbarLinkActive"><a href="/"><i className="bi bi-house"></i> Accueil</a></li>
        <li className="navbarLink"><a href="#"><i className="bi bi-calendar-event"></i> En cours</a></li>
        <li className="navbarLink"><a href="tosee"><i className="bi bi-eye"></i> A voir</a></li>
        <li className="navbarLink"><a href="#"><i className="bi bi-tv"></i> Terminé</a></li>
        
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <ul className="navbarItem">
        <li className="navbarLink navbarLinkActive"><Link to="home"><i className="bi bi-house"></i> Accueil</Link></li>
        <li className="navbarLink"><Link to="#"><i className="bi bi-calendar-event"></i> En cours</Link></li>
        <li className="navbarLink"><Link to="#"><i className="bi bi-eye"></i> A voir</Link></li>
        <li className="navbarLink"><Link to="#"><i className="bi bi-tv"></i> Terminé</Link></li>
        
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
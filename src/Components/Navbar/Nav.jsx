import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../assets/midhun mahesh.jpg';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="nav-img">
        <img src={logo} alt="Midhun Mahesh" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-items ${menuOpen ? 'visible' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/midhun__mahesh/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
        </ul>
      </div>

      <div className="nav-btn">
        <Link to="/contact">
          <button>Hire me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

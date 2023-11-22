
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../style/navbarStyle.css';

export {};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Eko Project</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Strona główna</Link>
            </li>
            <li className="nav-item">
              <Link to="/activeEvents" className="nav-link">Aktywne Wydarzenia</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

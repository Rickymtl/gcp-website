// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dropzone1">Drop Zone 1</Link></li>
        <li><Link to="/dropzone2">Drop Zone 2</Link></li>
        <li><Link to="/dropzone3">Drop Zone 3</Link></li>
        <li><Link to="/dropzone4">Drop Zone 4</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

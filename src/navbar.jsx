import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="navbar-element Logo">
          <Link to="/">CyberKing</Link>
        </li>
        <li className="navbar-element">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="navbar-element">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="navbar-element">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

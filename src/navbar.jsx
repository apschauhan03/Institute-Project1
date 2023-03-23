import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-heading">
        <Link to="/">CyberKing</Link>
      </div>
      <div className="navright">
        <ul className="list">
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
      </div>
    </nav>
  );
}

export default Navbar;

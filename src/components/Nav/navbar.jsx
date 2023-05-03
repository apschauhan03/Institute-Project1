import React, { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const styleham = {color:"white",fontSize:"1.5rem"};
  const [showdropdown,setshowdropdown] = useState(false);
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
            <a href="#contactpage">Contact</a>
          </li>
        </ul>
      </div>
      {/* 2nd menu part */}
      <div className="hamburger-menu">
        <Link to="#" onClick={()=>{setshowdropdown(!showdropdown)}}>
            < BiAlignRight style={styleham} />
        </Link>
      </div>
      <div className={showdropdown? "menu-link mobile-menu-link": "menu-link"}>
        <ul className="dropdown">
          <li className="dropdown-elements">
            <a href="...">Blogs</a>
          </li>
          <li className="dropdown-elements">
            <a href="...">Courses</a>
          </li>
          <li className="dropdown-elements">
            <a href="...">Contact</a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;

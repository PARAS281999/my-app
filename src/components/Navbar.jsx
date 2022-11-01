import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Contact from '../Contact';
import { BsPerson } from "react-icons/bs";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className='main-nav'>
      <div className='logo'>
        <h2>
          <span>P</span>aras
          <span>V</span>erma
        </h2>
      </div>

      <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
       <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">contact</NavLink>
            </li>
          </ul>
      </div>

      <div className='social-media'>
        <ul>
          <li>
            <a href='#' className='facebook'><FaFacebook /></a>
          </li>
          <li>
            <a href='#' className='instagram'><FaInstagram /></a>
          </li>
          <li>
            <a href='#' className='youtube '><FaYoutube /></a>
          </li>
          <li>
            <a href='#' className='login'><BsPerson /></a>
          </li>
        </ul>
        <div className='hamburger-menu'>
          <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
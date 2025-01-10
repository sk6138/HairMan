import React from 'react'
import '../Css/NavbarCss.css'


export default function Navbar() {
    


  return (
    <div>
        <header>
      <nav className="header__nav">
        <div className="header__logo">
          <h4 data-aos="fade-down">Hairman</h4>
          <div className="header__logo-overlay"></div>
        </div>

        <ul className="header__menu" data-aos="fade-down">
          <li>
            <a href="#menu">Services</a>
          </li>
          <li>
            <a href="#food">Trending</a>
          </li>
          <li>
            <a href="">Cancel</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
          <a href="#login">Login</a>
          </li>
        </ul>

        <ul className="header__menu-mobile" data-aos="fade-down">
          <li>
            <img src="assets/menu.svg" alt="menu" />
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
export default function Footer() {
  return (
    <div>
       <footer className="footer flex-between">
      <h3 className="footer__logo">
        <span>Hair</span>man
      </h3>

      <ul className="footer__nav">
        <li><a href="#menu">Service</a></li>
        <li><a href="#food">Trending</a></li>
        <li><a href="#">Cancle</a></li>
        <li><a href="#about-us">About Us</a></li>
      </ul>

      <ul className="footer__social">
        <li className="flex-center">
          <img src={facebook} alt="facebook" />
        </li>
        <li className="flex-center">
          <img src={instagram} alt="instagram" />
        </li>
        <li className="flex-center">
          <img src={twitter} alt="twitter" />
        </li>
      </ul>
    </footer>
    </div>
  )
}

import React from 'react';
import './Footer.css'; // Ensure styles are applied from Footer.css
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa'; // Social icons from 'react-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
      <div className="footer__socials">
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter"><FaTwitter /></a>
  <a href="https://www.linkedin.com/in/freyasantos/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebookF /></a>
</div>
        <p>© {new Date().getFullYear()} TechByte Scholar Ltd. All rights reserved.</p>
        <p>Designed and built with 
          <span className="footer__heart" title="Love from Rayyan!"> ♥ </span> 
          by <a href="mailto:" className="footer__author">Rayyan</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

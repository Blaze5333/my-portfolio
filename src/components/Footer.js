import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-top">
          <div className="footer-logo">
            <h3><span className="gradient-text">Mustafa Chaiwala</span></h3>
            <p>Building tomorrow's technologies today</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p><FaEnvelope className="footer-icon" />mustafachaiwala2003@gmail.com</p>
            <div className="footer-social">
              <a href="https://github.com/Blaze5333" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/mustafa-chaiwala-7a3890226/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="social-icon" />
              </a>
              <a href="https://x.com/MustafaCha47413" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Mustafa Chaiwala. All rights reserved.</p>
          </div>
          <div className="scroll-top">
            <a href="#home" aria-label="Scroll to top">
              <div className="chevron-up"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
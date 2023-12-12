import React from 'react';
import '../../css/footer.css';


const Footer = () => {
    return (
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-block">
          <h2 className="footer-title">Pawel Sloboda</h2>
          <p className="footer-description">Creating kickass websites and apps with the latest technologies.</p>
        </div>

        <div className="footer-block">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#projects" onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}>Projects</a></li>
            <li><a href="#about">About</a></li>
            {/* Add other links as needed */}
          </ul>
        </div>

  
        <div className="footer-block">
          <h3 className="footer-heading">Follow Me</h3>
          <a href="https://github.com/pawelsloboda" className="footer-social-link">GitHub</a>
          {/* More social links */}
        </div>

        <div className="footer-block">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-contact-info">Email: contact@pawelsloboda5@gmail.com</p>
          {/* Additional contact info */}
        </div>
      </div>

      <div className="footer-copy">
        <p>&copy; {new Date().getFullYear()} Pawel Sloboda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
  
  
  
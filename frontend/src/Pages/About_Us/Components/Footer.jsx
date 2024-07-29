import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>© 2024 SRM University, Andhra Pradesh</p>
    <div className="social-links">
      <a href="https://srmap.edu.in/" className="social-link" target="_blank" rel="noopener noreferrer">
        <img src="/icons/website.png" alt="Website" className="icon" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=61558968743920&mibextid=ZbWKwL" className="social-link" target="_blank" rel="noopener noreferrer">
        <img src="/icons/facebook.png" alt="Facebook" className="icon" />
      </a>
      <a href="http://twitter.com/SRMAP" className="social-link" target="_blank" rel="noopener noreferrer">
        <img src="/icons/twitter.png" alt="Twitter" className="icon" />
      </a>
      <a href="https://www.linkedin.com/showcase/srmap-alumni/" className="social-link" target="_blank" rel="noopener noreferrer">
        <img src="/icons/linkedin.png" alt="LinkedIn" className="icon" />
      </a>
      <a href="https://youtube.com/c/SRMUniversityAP" className="social-link" target="_blank" rel="noopener noreferrer">
        <img src="/icons/youtube.png" alt="YouTube" className="icon" />
      </a>
      <a href="https://www.instagram.com/srmap_alumni_relations/" className="social-link" target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram.png" alt="Instagram" className="icon" />
      </a>
    </div>
  </footer>
);

export default Footer;

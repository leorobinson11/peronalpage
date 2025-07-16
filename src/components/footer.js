import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            I am developer dedicated to providing the best services and products to my customers.
            My mission is to improve businesses through quality and innovation.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/#profile">Profile</a></li>
            <li><a href="/#portfolio">Portfolio</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Me</h2>
          <p>Email: leorobinsonvienna@gmail.com</p>
          <p>Phone: +43 678 7810316 </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} User. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

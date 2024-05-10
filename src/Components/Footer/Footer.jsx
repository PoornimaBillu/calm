import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className="footer-container">
        <div className="footer-column">
            <h5>Company</h5>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
                <li>Meet Our Instructor</li>
                <li>Calm Science</li>
            </ul>
        </div>
        <div className="footer-column">
        <h5>Offers</h5>
            <ul>
                <li> Buy A Gift</li>
                <li>Reedem a Gift</li>
                <li>Family Plan</li>
                <li>Calm Health</li>
                
                <li>Calm Business</li>
            </ul>
        </div>

        <div className="footer-column">
        <h5>Help</h5>
            <ul>
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Terms & Privacy Policy</li>
                <li>Accessibility Statement</li>
                <li>CCPA Notice</li>
                <li>Cookies</li>
                <li>Opt Out of Targeted Ads</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer
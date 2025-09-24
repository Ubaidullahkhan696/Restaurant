import React from "react";
import "../Style/SectionEight.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function SectionEight() {
  return (
    <>
      <div className="main-footer">
        <div className="footer-one">
          <div className="footer-card">
            <h1 className="footer-card-title">Company</h1>
            <ul>
              <li className="company-itms"><a href="#">About Us</a></li>
              <li className="company-itms"><a href="#">Contact Us</a></li>
              <li className="company-itms"><a href="#">Reservation</a></li>
              <li className="company-itms"><a href="#">Privacy</a></li>
              <li className="company-itms"><a href="#">Terms & condition</a></li>
            </ul>
          </div>
          <div className="footer-card">
            <h1 className="footer-card-title">Contact</h1>
            <p className="address">123 Street, New York, Us</p>
            <p className="address">+92 3454844612</p>
            <p className="address">Shinwari@gmail.com</p>
            <div className="footer-contact-icons">
              <i className="fab fa-twitter">
                <FaTwitter />
              </i>
              <i className="fab fa-twitter">
                <FaFacebookF />
              </i>
              <i className="fab fa-twitter">
                <FaInstagram />
              </i>
              <i className="fab fa-twitter">
                <FaLinkedin />
              </i>
            </div>
          </div>
          <div className="footer-card">
            <h1 className="footer-card-title">Opening</h1>
            <div className="dayAndtime">
              <p className="days">Monday - Saturday</p>
              <p className="time">09AM - 09PM</p>
              <p className="days">Sunday</p>
              <p className="time">10AM - 08PM</p>
            </div>
          </div>
          <div className="footer-card">
            <h1 className="footer-card-title">Newsletter</h1>
            <p className="newslatter-def">
              Dolor amet sit justo amet elitr <br />
              clita ipsum elitr est.
            </p>
            <div className="footer-btn">
              <input type="text" name="signup" id="footer-input" placeholder="Your Email"/>
              <button type="button" className="signup-btn">SIGNUP</button>
            </div>
          </div>
        </div>
        <div className="copy-right-area">
        <p className="copy-right">
          © <a href="#">Your Site Name</a>, All Right Reserved. Designed By
          Abasyn Internship Group
        </p>
        <ul className="copy-right-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">FQAs</a></li>
        </ul>
        </div>
      </div>
    </>
  );
}

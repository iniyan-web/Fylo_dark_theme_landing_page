import React from "react";
import footerLogo from "../images/logo.svg";
import locationIcon from "../images/icon-location.svg";
import phoneIcon from "../images/icon-phone.svg";
import mailIcon from "../images/icon-email.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <img className="footer__logo" src={footerLogo} alt="Home." />
        <div className="footer__text">
          <div className="location">
            <img
              className="location__icon"
              src={locationIcon}
              alt="Location illustration."
            />
            <p className="location__info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="contact">
            <div className="phone">
              <img
                className="phone__icon"
                src={phoneIcon}
                alt="Phone illustration."
              />
              <p className="phone__info">+1-543-123-4567</p>
            </div>
            <div className="mail">
              <img
                className="mail__icon"
                src={mailIcon}
                alt="Mail illustration."
              />
              <p className="mail__info">example@fylo.com</p>
            </div>
          </div>
          <ul className="footer__links1">
            <li className="link">About Us</li>
            <li className="link">Jobs</li>
            <li className="link">Press</li>
            <li className="link">Blog</li>
          </ul>
          <ul className="footer__links2">
            <li className="link">Contact Us</li>
            <li className="link">Terms</li>
            <li className="link">Privacy</li>
          </ul>
          <div className="social-icons">
            <i className="icon icon--fb"></i>
            <i className="icon icon--twitter"></i>
            <i className="icon icon--instagram"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

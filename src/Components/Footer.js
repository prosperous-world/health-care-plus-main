import React from "react";
import { Link } from "react-router-dom";

import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Health Care <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Emergency Care</a>
            </li>
            <li>
              <a href="#services">Heart Disease</a>
            </li>
            <li>
              <a href="#services">Dental Care</a>
            </li>
            <li>
              <a href="#services">Prescription</a>
            </li>
            <li>
              <a href="#services">Insights for doctors</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@healthcareplus.com">
                support@healthcareplus.com
              </a>
            </li>
            <li>
              <a href="mailto:appointment@healthcareplus.com">
                appointment@healthcareplus.com
              </a>
            </li>
            <li>
              <a href="tel:+447940728737">+447940728737</a>
            </li>
            <li>
              <a href="tel:+447940728737">+447940728737</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>&copy; 2013-2024 HealthCare+. All rights reserved.</p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://linkedin.com/in/wang-xing-667365315/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://facebook.com/"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

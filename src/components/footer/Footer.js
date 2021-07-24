import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import logo1 from "./logo1.svg";
import twitter from "./twitter.svg";
import insta from "./insta.svg";
import fb from "./facebook.svg";
import im1 from "./im1.svg";
import im2 from "./im2.svg";
import im3 from "./im3.svg";
import im4 from "./im4.svg";
// import logoS from "./footerelements.js"
function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <Link
            class="footer-link-items f1"
            to="/"
            target="_blank"
            aria-label="Help"
          >
            <img src={im1} />
          </Link>
          <Link
            class="footer-link-items f2"
            to="/"
            target="_blank"
            aria-label="Contact"
          >
            <img src={im2} />
          </Link>
          <Link
            class="footer-link-items f3"
            to="/"
            target="_blank"
            aria-label="Privacy Policy"
          >
            <img src={im3} />
          </Link>
          <Link
            class="footer-link-items f4"
            to="/"
            target="_blank"
            aria-label="Term of use"
          >
            <img src={im4} />
          </Link>
        </div>
      </div>

      <section class="social-media">
        <div class="social-media-wrap">
          {/* <small class='website-rights'>TRVL © 2020</small> */}
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <img src={fb} alt="facebook" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <img src={insta} alt="instagram" />
            </Link>

            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <img src={twitter} alt="Twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

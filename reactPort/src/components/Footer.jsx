import React from "react";
import { ckgrey } from "../assets";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__menu">
        <a href="/" id="footer__logo">
          <img
            className="footer-image w-[50px] h-[35px]"
            src={ckgrey}
            alt="ck logo"
          />
        </a>
        <ul className="footer__items">
          <li>
            <a
              href="https://www.linkedin.com/in/collin-kimball-b004a622b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CollinK23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github-square"></i>
            </a>
          </li>
          <li>
            <a href="mailto:contact@collinkimball.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

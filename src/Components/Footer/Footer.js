import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EMJCreates
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/jeweleni_diva">
          <IoLogoTwitter />
        </a>
        <a href="https://www.instagram.com/emjcreates">
          <FaInstagram />{" "}
        </a>
        <a href="https://www.linkedin.com/in/momoreoluwajeweleni/">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer__copyright">
        <p>© 2023 EMJCreates. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

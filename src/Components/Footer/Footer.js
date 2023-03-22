import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
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
      <a href="https://github.com/Jeweleni"  rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
        <a href="https://twitter.com/jeweleni_diva">
          <IoLogoTwitter />
        </a>
        <a href="https://www.instagram.com/emj_creates">
          <FaInstagram />{" "}
        </a>
        <a href="https://www.linkedin.com/in/momoreoluwajeweleni/">
          <FaLinkedinIn />
        </a>
      </div>

      <div className="footer__copyright">
        <p>©EMJCreates_ 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

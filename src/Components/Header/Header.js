import React from "react";
import "./Header.css";
import CTA from "../CTA/CTA";
import me from "./me.png";
import Socials from "../Socials/Socials";

const Header = () => {
  return (
    <header>
      
      <div className="container header__container">
        <h1 className="title">
          Hi!!! <span>My name is </span> Momoreoluwa Jewel
        </h1>

        <h3 className="text-light"> and I am a Software Developer</h3>

        <CTA />

        <Socials />
        
      </div>
      <div className="me">
        <div className="image-wrapper">
          <img src={me} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;

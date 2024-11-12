import React from "react";
import "./Header.css";
import CTA from "../CTA/CTA";
import me from "./me.png";
// import confetti from "./confetti.json"
import Socials from "../Socials/Socials";

// import Lottie from "lottie-react"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1 className="title">
          Hi!!! <span>My name is </span> Momoreoluwa Jewel
        </h1>

        {/* <h1>Jewel</h1> */}

        <h3 className="text-light"> and I am a Software Developer</h3>

        <CTA />

        {/* <div className="me">
                    
                    <img src={me} alt="me"/>
                    
                </div> */}

        <Socials />
        {/* <div className="me">
                    
                    <img src={me} alt="me"/>
                    
                </div> */}
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

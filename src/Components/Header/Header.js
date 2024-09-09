import React from "react";
import './Header.css';
import CTA from '../CTA/CTA'
import me from './me.png'
// import confetti from "./confetti.json"
import Socials from "../Socials/Socials";

// import Lottie from "lottie-react"

const Header = () => {
    return ( 
        <header>
            <div className="container header__container">
            {/* <div className="confetti">
                <Lottie animationData={confetti}/>
                </div> */}
                
                <h4>Hello!!! <span>My name is </span></h4>
                
                <h1>Jewel</h1>
              
                <h5 className="text-light"> I am a Software Engineer</h5>
                
              
                <CTA/>
               

                <div className="me">
                    
                    <img src={me} alt="me"/>
                    
                </div>
               
                <Socials/>
                
            </div>
        </header>
     );
}
 
export default Header;
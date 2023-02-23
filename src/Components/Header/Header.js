import React from "react";
import './Header.css';
import CTA from '../CTA/CTA'
import me from './me.png'
import Socials from "../Socials/Socials";

const Header = () => {
    return ( 
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Jewel</h1>
                <h5 className="text-light"> Frontend Engineer</h5>
                <CTA/>
                <Socials/>

                <div className="me">
                    <img src={me} alt="me"/>
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
     );
}
 
export default Header;
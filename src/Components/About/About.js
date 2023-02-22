import React from "react";
import "./About.css";
import coding from "./coding.png"
import { FaAward, FaCss3, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";

const About = () => {
    return ( 
        <section id='about'>
            <h5>Get To kNow</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={coding} alt=""/>
                    </div>
                </div>    
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card"> 
                                <FaReact className= "about__icon"/>
                                <h5>experience</h5>
                                <small>React</small>  
                            </article>
                            <article className="about__card">
                                <FaVuejs className= "about__icon"/>
                               <h5>experience</h5>
                                <small>Vue.js</small>
                            </article>
                            <article className="about__card">
                                <TbBrandJavascript className= "about__icon"/>
                                <h5>experience</h5>
                                <small>Javascript</small>
                            </article>
                            <article className="about__card">
                                <TbBrandNextjs className= "about__icon"/>
                                <h5>experience</h5>
                                <small>Next.js</small>
                            </article>
                            <article className="about__card">  
                                <FaCss3 className= "about__icon"/>
                                <h5>experience</h5>
                                <small>CSS3</small>
                            </article>
                            <article className="about__card">  
                                <FaHtml5 className= "about__icon"/>
                                <h5>experience</h5>
                                <small>Html5</small>
                            </article>
                            
                        </div>
                        <p>I'm a Frontend Engineer</p>
                           <a href="#contacts" className="btn btn-primary">Let's Talk</a>
                    </div>
            </div>
        </section>
     );
}
 
export default About;
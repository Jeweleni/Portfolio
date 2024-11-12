import React from "react";
import "./About.css";
import coding from "./coding.png"
import { FaAward } from "react-icons/fa";
import { IoGitNetwork } from "react-icons/io5";

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
                                <FaAward className= "about__icon"/>
                                <h5>Experience</h5>
                                <small>2 years+</small>  
                            </article>
                            <article className="about__card">
                                <IoGitNetwork className= "about__icon"/>
                                <h5>Projects</h5>
                                <small>50+ Completed</small>
                            </article>
                           
                        </div>
                        <p>I am a software developer proficient in several technologies, from JavaScript and its framework to Python. I'm particularly interested in solving environmental issues using technology, as software engineering will play a crucial role in mitigating climate change and promoting sustainable practices.
I also intend to collaborate with like-minded individuals and organizations who share my passion for using technology to solve environmental problems. Ultimately, my goal as a software engineer is to contribute to a more sustainable future and positively impact the world.</p>
                           <a href="#contacts" className="btn btn-primary">Let's Talk</a>
                    </div>
            </div>
        </section>
     );
}
 
export default About;
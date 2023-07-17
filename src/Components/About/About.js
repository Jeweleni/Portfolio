import React from "react";
import "./About.css";
import coding from "./coding.png"
import { FaAward } from "react-icons/fa";
import { IoSchoolSharp, IoGitNetwork } from "react-icons/io5";

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
                                <small>18 Months+</small>  
                            </article>
                            {/* <article className="about__card">
                                <IoSchoolSharp className= "about__icon"/>
                               <h5>Education</h5>
                                <small>Altschool Africa</small>
                            </article> */}
                            <article className="about__card">
                                <IoGitNetwork className= "about__icon"/>
                                <h5>Projects</h5>
                                <small>40+ Completed</small>
                            </article>
                           
                        </div>
                        <p>I am a motivated and result driven Software Engineer. My focus is on building
and optimizing user-focused websites and apps for clients with diverse
business objectives. With exceptional organizational, problem-solving and
communication skills, I thrive in collaborative environments where I can
effectively contribute to project success. I am a highly adaptable learner,
continuously improving my abilities and taking on new challenges one
problem at a time. </p>
                           <a href="#contacts" className="btn btn-primary">Let's Talk</a>
                    </div>
            </div>
        </section>
     );
}
 
export default About;
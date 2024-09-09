import React from "react";
import "./Experience.css";
import { FaNodeJs, FaGithub, FaHtml5, FaReact, FaVuejs, FaPython } from "react-icons/fa";
import { TbBrandNextjs, TbBrandJavascript, TbLetterC} from "react-icons/tb";
import {  SiMysql, SiTypescript } from "react-icons/si";

const Experience = () => {
    return ( 
        <section id="experience">
            {/* <h5>Skills I have</h5> */}
            <h2>Experience</h2>
            <h5>My Skills include</h5>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Technical Skills</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaReact className="experience__details-icon"/>
                            <div>
                            <h4>React</h4>
                            
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaPython className="experience__details-icon"/>
                            <div>
                            <h4>Python</h4>
                           
                            </div>
                        </article>
                        <article className="experience__details">
                            <TbBrandJavascript className="experience__details-icon"/>
                            <div>
                            <h4>Javascript</h4>
                           
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <FaVuejs className="experience__details-icon"/>
                            <div>
                            <h4>Vue Js</h4>
                           
                            </div>
                        </article>
                        <article className="experience__details">
                            <TbBrandNextjs className="experience__details-icon"/>
                            <div>
                            <h4>Next Js</h4>
                            
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__frontend">
                    <h3>Technical Skills</h3>
                    <div className="experience__content">
                    <article className="experience__details">
                            <FaGithub className="experience__details-icon"/>
                            <div>
                            <h4>Github</h4>
                           
                            </div>
                        </article>
                        <article className="experience__details">
                            <TbLetterC className="experience__details-icon"/>
                            <div>
                            <h4>C</h4>
                           
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaNodeJs className="experience__details-icon"/>
                            <div>
                            <h4>Nodejs</h4>
                           
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiTypescript className="experience__details-icon"/>
                            <div>
                            <h4>Typescript</h4>
                          
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiMysql className="experience__details-icon"/>
                            <div>
                            <h4>SQL</h4>
                          
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Experience;
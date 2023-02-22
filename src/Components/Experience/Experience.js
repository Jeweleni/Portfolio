import React from "react";
import "./Experience.css";
import { FaBootstrap, FaCss3, FaGit, FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
const Experience = () => {
    return ( 
        <section id="experience">
            <h5>Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Software Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaReact className="experience__details-icon"/>
                            <div>
                            <h4>React</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaVuejs className="experience__details-icon"/>
                            <div>
                            <h4>Vue Js</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <TbBrandJavascript className="experience__details-icon"/>
                            <div>
                            <h4>Javascript</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <FaHtml5 className="experience__details-icon"/>
                            <div>
                            <h4>Html5</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <TbBrandNextjs className="experience__details-icon"/>
                            <div>
                            <h4>Next Js</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Software Development</h3>
                    <div className="experinece__content">
                        <article className="experience__details">
                            <FaCss3 className="experience__details-icon"/>
                            <div>
                            <h4>CSS3</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <FaBootstrap className="experience__details-icon"/>
                            <div>
                            <h4>Nodejs</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        
                        <article className="experience__details">
                            <FaGit className="experience__details-icon"/>
                            <div>
                            <h4>Git</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <SiTailwindcss className="experience__details-icon"/>
                            <div>
                            <h4>Tailwind</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Experience;
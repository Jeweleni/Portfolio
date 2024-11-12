import React from 'react';
import './Portfolio.css';
import Authentication from "./porfolio-images/Authentication.png";
import Summarize from "./porfolio-images/Summarize.png";
import Carefinder from "./porfolio-images/Carefinder.png";
import postpedia from './porfolio-images/postpedia.png';
import chrome from './porfolio-images/chrome.png';
import zuriportfolio from './porfolio-images/zuriportfolio.png'


const data =[
    
    {
        id: 1,
        image: zuriportfolio,
        title: "ZuriPortfolio",
        code: "NextJs",
        demo: "https://zuriportfolio.vercel.app"
    },
    {
        id: 2,
        image: chrome,
        title: "ScreenRecorder",
        code: "Javascript",
        // github: "https://github.com/Jeweleni/Admin-Dashboard-Application",
        demo: "https://hng-screen-recorder.vercel.apps"
    },

    {
        id: 3,
        image: postpedia,
        title: "Postpedia",
        code: "Next Js",
        // github: "https://github.com/Jeweleni/metaverse",
        demo: "https://post-pedia-v1.vercel.app"
    },


    {
        id: 4,
        image: Authentication,
        title: "Authentication App",
        code: "Vue Js",
        // github: "https://github.com/Jeweleni/Authentication-app-1",
        demo: "https://authentication-app-1.vercel.app"
    },
    
    {
        id: 5,
        image: Carefinder,
        title: "Carefinder",
        code: "Typescript",
        // github: "https://github.com/Jeweleni/carefinder",
        demo: "https://carefinder-jeweleni.vercel.app"
    },
    {
        id: 6,
        image: Summarize,
        title: "OpenAI GPT-4",
        code: "React Js",
        // github: "https://github.com/Jeweleni/openai-summarizer",
        demo: "https://openai-summarizer-inky.vercel.app/"
    },
    


    
]


const Portfolio = () => {
    return (  
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                data.map(({id, image, title, code, demo}) => {
                    return(
                     <article key={id} className="portfolio__items">
                     <div className="portfolio__items-image">
                         <img src={image} alt={title}/>
                     </div>
                     <h3>{title}</h3>
                     <p>{code}</p>
                     <div className='portfolio__items-cta'>
                     {/* <a href={github} className="btn">Github</a> */}
                     <a href={demo} className="btn btn-primary" rel="noreferrer" target="_blank">Demo</a>
                     </div>
                 </article>
                 ) 
                 })
            }   
                

            </div>
        </section>
    );
}
 
export default Portfolio;
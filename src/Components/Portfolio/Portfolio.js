import React from 'react';
import './Portfolio.css';
import Authentication from "./porfolio-images/Authentication.png";
import Dashboard from "./porfolio-images/Dashboard.png";
import metaverse from "./porfolio-images/metaverse.png";
import Summarize from "./porfolio-images/Summarize.png";
import Carefinder from "./porfolio-images/Carefinder.png";
import topratedmovies from "./porfolio-images/topratedmovies.png";


const data =[
    
    {
        id: 1,
        image: Carefinder,
        title: "Carefinder",
        code: "Typescript",
        // github: "https://github.com/Jeweleni/carefinder",
        demo: "https://github.com/Jeweleni/carefinder"
    },
    {
        id: 2,
        image: Summarize,
        title: "OpenAI GPT-4",
        code: "React Js",
        // github: "https://github.com/Jeweleni/openai-summarizer",
        demo: "https://openai-summarizer-inky.vercel.app/"
    },
    
    {
        id: 3,
        image: Authentication,
        title: "Authentication App",
        code: "Vue Js",
        // github: "https://github.com/Jeweleni/Authentication-app-1",
        demo: "https://authentication-app-1.vercel.app/"
    },

    {
        id: 4,
        image: Dashboard,
        title: "Admin Dashboard",
        code: "syncfusion/ej2",
        // github: "https://github.com/Jeweleni/Admin-Dashboard-Application",
        demo: "https://admin-dashboard-application.vercel.app/"
    },

    
    {
        id: 5,
        image: metaverse,
        title: "Metaverse",
        code: "Next Js",
        // github: "https://github.com/Jeweleni/metaverse",
        demo: "https://metaversebyjewel.vercel.app/"
    },

    {
        id: 6,
        image: topratedmovies,
        title: "Moviebox",
        code: "Typescript",
        // github: "https://github.com/Jeweleni/moviebox",
        demo: "https://movie-discovery-by-jewel.vercel.app/home"
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
import React from 'react';
import './Portfolio.css';
// import bookapp from "./porfolio-images/bookapp.png"
// import calculator from "./porfolio-images/calculator.png"
import Github from "./porfolio-images/Github.png"
import jewelivy from "./porfolio-images/jewelivy.png"
// import noteapp from "./porfolio-images/noteapp.png"
// import reciepewebsite from "./porfolio-images/reciepewebsite.png"
// import rentalagency from "./porfolio-images/rentalagency.png"
import Authentication from "./porfolio-images/Authentication.png"
import Dashboard from "./porfolio-images/Dashboard.png"
import metaverse from "./porfolio-images/metaverse.png"
import Summarize from "./porfolio-images/Summarize.png"


const data =[
    
    {
        id: 1,
        image: Summarize,
        title: "OpenAI GPT-4",
        github: "https://github.com/Jeweleni/openai-summarizer",
        demo: "https://openai-summarizer-inky.vercel.app/"
    },
    
    {
        id: 2,
        image: Dashboard,
        title: "Admin Dashboard",
        github: "https://github.com/Jeweleni/Admin-Dashboard-Application",
        demo: "https://admin-dashboard-application.vercel.app/"
    },

    {
        id: 3,
        image: Authentication,
        title: "Authentication App",
        github: "https://github.com/Jeweleni/Authentication-app-1",
        demo: "https://authentication-app-1.vercel.app/"
    },

    {
        id: 4,
        image: metaverse,
        title: "Metaverse",
        github: "https://github.com/Jeweleni/metaverse",
        demo: "https://metaversebyjewel.vercel.app/"
    },

    {
        id: 5,
        image: jewelivy,
        title: "JewelIvy Party Website",
        github: "https://github.com/Jeweleni/React-Router-Assignment--2",
        demo: "https://altschoolreactrouterassignment.netlify.app/"
    },

    {
        id: 6,
        image: Github,
        title: "Github Portfolio",
        github: "https://github.com/Jeweleni/Holiday-Challenge-MyGithub-portfolio ",
        demo: "https://holiday-challenge-my-github-portfolio.vercel.app"
    },

    // {
    //     id: 6,
    //     image: reciepewebsite,
    //     title: "Receipe Website",
    //     github: "https://github.com/Jeweleni/Food-Website ",
    //     demo: "https://food-website-byemjcreates.vercel.app/"
    // },

    // {
    //     id: 5,
    //     image: bookapp,
    //     title: "Book App",
    //     github: "https://github.com/Jeweleni/book-app",
    //     demo: "https://book-app-olive.vercel.app"
    // },
    // {
    //     id: 6,
    //     image: rentalagency,
    //     title: "Rental Agency",
    //     github: "https://github.com/Jeweleni/rental-agency",
    //     demo: "https://rental-agency.vercel.app/"
    // },
    
   
    // {
    //     id: 7,
    //     image: noteapp,
    //     title: "Note App",
    //     github: "https://github.com/Jeweleni/Note-App",
    //     demo: "https://note-app-nu-pied.vercel.app"
    // },


    // {
    //     id: 7,
    //     image: calculator,
    //     title: "Calculator",
    //     github: "https://github.com/Jeweleni/Altschool-Calculator-App-Assignment",
    //     demo: "https://altschool-calculator-app-assignment.emjcreates.repl.co/"
    // }
]


const Portfolio = () => {
    return (  
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                data.map(({id, image, title, github, demo}) => {
                    return(
                     <article key={id} className="portfolio__items">
                     <div className="portfolio__items-image">
                         <img src={image} alt={title}/>
                     </div>
                     <h3>{title}</h3>
                     <div className='portfolio__items-cta'>
                     <a href={github} className="btn">Github</a>
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
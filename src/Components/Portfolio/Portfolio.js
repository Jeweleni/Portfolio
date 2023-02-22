import React from 'react';
import './Portfolio.css';
import bookapp from "./porfolio-images/bookapp.png"
import calculator from "./porfolio-images/calculator.png"
import Github from "./porfolio-images/Github.png"
import jewelivy from "./porfolio-images/jewelivy.png"
import noteapp from "./porfolio-images/noteapp.png"
import reciepewebsite from "./porfolio-images/reciepewebsite.png"
import rentalagency from "./porfolio-images/rentalagency.png"


const data =[
    {
        id: 1,
        image: rentalagency,
        title: "Rental Agency",
        github: "https://github.com/Jeweleni/rental-agency",
        demo: "https://rental-agency.vercel.app/"
    },
    {
        id: 2,
        image: Github,
        title: "Github Portfolio",
        github: "https://github.com/Jeweleni/Holiday-Challenge-MyGithub-portfolio ",
        demo: "https://holiday-challenge-my-github-portfolio.vercel.app"
    },
    {
        id: 3,
        image: reciepewebsite,
        title: "Receipe Website",
        github: "https://github.com/Jeweleni/Food-Website ",
        demo: "https://food-website-byemjcreates.vercel.app/"
    },
    {
        id: 4,
        image: noteapp,
        title: "Note App",
        github: "https://github.com/Jeweleni/Note-App",
        demo: "https://note-app-nu-pied.vercel.app"
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
        image: bookapp,
        title: "Book App",
        github: "https://github.com/Jeweleni/book-app",
        demo: "https://book-app-olive.vercel.app"
    },
    {
        id: 7,
        image: calculator,
        title: "Calculator",
        github: "https://github.com/Jeweleni/Altschool-Calculator-App-Assignment",
        demo: "https://altschool-calculator-app-assignment.emjcreates.repl.co/"
    }
]


const Portfolio = () => {
    return (  
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                data.map(({id, image, tittle, github, demo}) => {
                    return(
                     <article key={id} className="portfolio__items">
                     <div className="portfoloi__items-image">
                         <img src={image} alt={tittle}/>
                     </div>
                     <h3>This is a portfolio items title</h3>
                     <div className='portfolio__item-cta'>
                     <a href={github} className="btn">Github</a>
                     <a href={demo} className="btn btn-primary" rel="noreferrer" target="_blank">Live Demo</a>
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
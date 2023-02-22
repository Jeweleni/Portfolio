import React from 'react';
import './Contacts.css';
import { MdOutlineEmail } from "react-icons/md";

const Contacts = () => {
    return ( 
       <section id='contacts'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="conatact__option">
              <MdOutlineEmail/>
            </article>

          </div>
        </div>

       </section>
     );
}
 
export default Contacts;
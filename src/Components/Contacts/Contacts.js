import React, {useRef} from 'react';
import './Contacts.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jqznsom', 'template_bgvq6xn', form.current, 'HLnEWYTJOU0TEi63d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return ( 
       <section id='contacts'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="conatact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>jeweleni@gmail.com</h5>
              <button className='btn btn-primary' onClick={SubmitEvent}>
              <a className='text' href='mailto:jeweleni@gmail.com'>Send a message</a>
              </button>
            </article>
            <article className="contact__option__option-icon">
              <BsWhatsapp className='conatact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+2348147528661</h5>
              <button className='btn btn-primary' onClick={SubmitEvent}>
              <a className='text' href='https://api.whatsapp.com/send/?phone=2348147528661&text=Hello ' rel="noreferrer" target="_blank">Send a message</a>
              </button>
            </article>
            {/* <article className="contact__option__option-icon">
              <FaLinkedin/>
              <h4>Linkedin</h4>
              <h5>jeweleni@gmail.com</h5>
              <a href='https://www.linkedin.com/in/momoreoluwajeweleni/'>Send a message</a>
            </article> */}

          </div>
       

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows="name" placeholder="Your Message" required/>

            <button type='submit'  className='btn btn-primary' onClick={SubmitEvent}>Send Message</button>
          </form>
     
        </div>

       </section>
     );
}
 
export default Contacts;
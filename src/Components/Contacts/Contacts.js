import React, {useRef} from 'react';
import './Contacts.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
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
              <MdOutlineEmail className='conatact__option-icon'/>
              <h4>Email</h4>
              <h5>jeweleni@gmail.com</h5>
              <a href='mailto:jeweleni@gmail.com'>Send a message</a>
            </article>
            <article className="conatact__option">
              <BsWhatsapp className='conatact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+2348147528661</h5>
              <a href='https://api.whatsapp.com/send?phone=+2348147528661' rel="noreferrer" target="_blank">Send a message</a>
            </article>
            {/* <article className="conatact__option">
              <FaLinkedin/>
              <h4>Linkedin</h4>
              <h5>jeweleni@gmail.com</h5>
              <a href=''>Senf a message</a>
            </article> */}

          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows="name" placeholder="Your Message" required/>

            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>

       </section>
     );
}
 
export default Contacts;
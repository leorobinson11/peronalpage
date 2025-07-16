import React from 'react'; 
import emailjs from 'emailjs-com';
import '../styles/contactform.css'

// emailapi: https://dashboard.emailjs.com/admin 

// !!! variables to be inputed in .env !!!

const Contactform = () => {
    const sendEmail = (e) => {  
        e.persist();
        e.preventDefault();

        emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.error("Failed to send email:", error.text);
          }
        );

        e.target.reset()
    }

    return (
        <section id="contact" className='contact-form'>
            <h2> Send me a message! </h2>
            <div className='form-container'>
                <form onSubmit={sendEmail}>
                    <input name="from_name" className='input-field' type='text' placeholder='Name' autoComplete='off' required />
                    <input id="from_email" name="from_email" className='input-field' type='email' placeholder='Email' autoComplete='off' required />
                    <textarea name="message" className='message-field' type='field' placeholder='Your Message ...' required />
                    <button className="msg-btn"> Send </button>
                </form>
            </div>
        </section>
    );
};

export default Contactform;
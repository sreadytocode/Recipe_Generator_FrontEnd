import React, { useRef } from 'react';
// npm install @emailjs/browser
import emailjs from '@emailjs/browser';
// npm i sweetalert --save
import swal from 'sweetalert';

import "./contact.css";

const Contact = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_key', 
                     'template_key', 
                     form.current, 
                     'Public_Key'
                     )
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          e.target.reset();

          swal({
            title: "Success!",
            text: "Thank you! I'll be in touch soon!",
            icon: "success",
            button: "Continue",
          });

      }, (error) => {
          console.log(error.text);
      });
  };



  return (


    <form ref={form} onSubmit={sendEmail}>
      <h1>Contact me <span>Here</span></h1>
      <label>Name</label>
      <input type="text" name="user_name" id='text-input' placeholder="Enter your name" required/>
      <label>Email</label>
      <input type="email" name="user_email" id='text-input' placeholder='example@example.com' required/>
      <label>Message</label>
      <textarea type="text" name="message" cols='30' rows='10' id='text-input' placeholder='Write your message here!...' required/>


      <button type="submit" value="Send">Send</button>
    </form>

  );
};

export default Contact;
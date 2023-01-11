import React, { useRef, useState } from "react";
// npm install @emailjs/browser
import emailjs from "@emailjs/browser";
// npm i sweetalert --save
import swal from "sweetalert";
// npm install react-google-recaptcha
import ReCAPTCHA from 'react-google-recaptcha';

import "./contact.css";



const Contact = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ud03kp', 
                     'template_xap5ldc', 
                     form.current, 
                     'vI1H3NsEQ44lqAcdr'
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



//ReCAPTCHA arrow function

  const [buttonDisabled, setButtonDisabled] = useState(true) 
  
  
  const onChange = () => {
    setButtonDisabled(false)
  };

  const captchaRef = useRef(null)

  return (


    <form ref={form} onSubmit={sendEmail}>
      <h1>Contact me <span>Here</span></h1>
      <label>Name</label>
      <input type="text" name="user_name" id='text-input' placeholder="Enter your name" required/>
      <label>Email</label>
      <input type="email" name="user_email" id='text-input' placeholder='example@example.com' required/>
      <label>Message</label>
      <textarea type="text" name="message" cols='30' rows='10' id='text-input' placeholder='Write your message here!...' required/>

      <ReCAPTCHA 
               sitekey='6LfxNKAjAAAAADVl79UcfT7yh3AUwpChEvRU1G6y' 
                 onChange={onChange} 
                 ref={captchaRef}
                 render="explicit"
                 required
                 />

      <button className="submit-button" type="submit" value="Send" disabled={buttonDisabled}>Send</button>
    </form>

  );
};

export default Contact;

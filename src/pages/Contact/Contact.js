import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_spkuc4i",
        "template_u8ic08s",
        e.target,
        "user_j8eTZFCtFLVuRzmcQODII"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          Swal.fire("Your Message send successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <h2 className="text-center m-5 common"><b><i>Contact With Us</i></b></h2>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name</label> */}
          <input
            required
            placeholder="Enter Your Name"
            type="text"
            name="user_name"
          />
          {/* <label>Email</label> */}
          <input
            required
            placeholder="Enter Your Email"
            type="email"
            name="user_email"
          />
          {/* <label>Message</label> */}
          <textarea
            className="contact-text"
            required
            placeholder="Please Write message Here"
            name="message"
          />
          <input id="contact-submitBtn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

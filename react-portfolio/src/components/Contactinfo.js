import React, { Component } from "react";
import "../styles/Contactspage.css";

function Contact() {
  return (
    <section classNameName="page-section contact" id="contact">
      <div classNameName="contact">
        <h2>Contact</h2>
        <p>
          Please read my <a href="../CV.pdf">CV</a> for information on my
          background. Feel free to{" "}
          <a href="mailto: naomi.winchurch@hotmail.co.uk">email</a> me if you
          have any questions or fill out the contact form below.
        </p>
      </div>
      <ul>
        <p>
          Links to my GitHub and Linkedin profiles have also been included below
          for reference.
        </p>
        <p>
          Here is a link to my{" "}
          <a
            classNameName="btn"
            href="https://github.com/Nwinch1512"
            role="button"
          >
            Github
          </a>{" "}
          profile
        </p>
        <p>
          Please refer to my{" "}
          <a
            classNameName="btn"
            href="https://www.linkedin.com/in/naomiwinchurch/"
            role="button"
          >
            Linkedin
          </a>{" "}
          page for more information on my work experience.
        </p>
      </ul>
    </section>
  );
}

export default Contact;

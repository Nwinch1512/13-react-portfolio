import React, { Component } from "react";
import "../styles/Contactspage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="contact-container col-lg-9 col-md-9 col-sm-12">
      <div className="card-body-contact" id="contact">
        <h2 className="card-title">
          <FontAwesomeIcon icon={faAddressBook} /> Contact{"  "}
        </h2>
        <div className="contact-info">
          <p className="contact">
            Please read my <a href="CV web developer.pdf">CV</a> for information
            on my background. Feel free to{" "}
            <a href="mailto: naomi.winchurch@hotmail.co.uk">email</a> me if you
            have any questions or fill out the contact form.
          </p>
          <p className="contact">
            Links to my GitHub and Linkedin profiles have also been included
            below for reference.
          </p>
          <div className="contact-icon-container">
            <a
              className="btn btn-primary github"
              href="mailto: naomi.winchurch@hotmail.co.uk"
              role="button"
            >
              <FontAwesomeIcon icon={faEnvelope} className="emailBtn" />
            </a>
            <a
              className="btn btn-primary github"
              href="https://github.com/Nwinch1512"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} className="githubBtn" />
            </a>
            <a
              className="btn btn-primary linkedin"
              href="https://www.linkedin.com/in/naomiwinchurch/"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedin} className="linkedinBtn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

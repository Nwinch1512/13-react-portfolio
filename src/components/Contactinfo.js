import React, { Component } from "react";
import "../styles/Contactspage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faEarDeaf } from "@fortawesome/free-solid-svg-icons";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="page-section contact">
      <div className="cardContainer col-lg-12 col-md-12 col-sm-3">
        <div className="contact">
          <div className="card-body" id="contact">
            <h2 className="card-title">Contact </h2>
            <div className="contact-info">
              <p className="contact">
                Please read my <a href="../CV.pdf">CV</a> for information on my
                background. Feel free to{" "}
                <a href="mailto: naomi.winchurch@hotmail.co.uk">email</a> me if
                you have any questions or fill out the contact form below.
              </p>
              <p className="contact">
                Links to my GitHub and Linkedin profiles have also been included
                below for reference.
              </p>
              <a
                class="btn btn-primary github"
                href="mailto: naomi.winchurch@hotmail.co.uk"
                role="button"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                class="btn btn-primary github"
                href="https://github.com/Nwinch1512"
                role="button"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                class="btn btn-primary linkedin"
                href="https://www.linkedin.com/in/naomiwinchurch/"
                role="button"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

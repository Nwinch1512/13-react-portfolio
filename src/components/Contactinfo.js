import React, { Component } from "react";
import "../styles/Contactspage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className="page-section contact">
      <div className="cardContainer col-lg-12 col-md-12 col-sm-3">
        <div className="contact">
          <div className="card-body" id="contact">
            <h2 className="card-title">Contact </h2>
            <div className="contact-info">
              <p className="contact">
                <FontAwesomeIcon icon={faAddressBook} />
                Please read my <a href="../CV.pdf">CV</a> for information on my
                background. Feel free to{" "}
                <a href="mailto: naomi.winchurch@hotmail.co.uk">email</a> me if
                you have any questions or fill out the contact form below.
              </p>
              <p className="contact">
                Links to my GitHub and Linkedin profiles have also been included
                below for reference.
              </p>
              <p className="contact">
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

              <p className="contact">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

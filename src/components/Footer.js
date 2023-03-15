import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div id="contact-methods">
        <a
          className="btn"
          href="mailto: naomi.winchurch@hotmail.co.uk"
          role="button"
        >
          Email
        </a>
        <a className="btn" href="https://github.com/Nwinch1512" role="button">
          Github
        </a>
        <a
          className="btn"
          href="https://twitter.com/NaomiWinchurch"
          role="button"
        >
          Twitter
        </a>
      </div>
      {/* <section class="page-section contact" id="contact">
        <div class="contact">
          <h2>Contact</h2>
        </div>
        <div id="contact-methods">
          <a
            class="btn"
            href="mailto: naomi.winchurch@hotmail.co.uk"
            role="button"
          >
            Email
          </a>
          <a class="btn" href="https://github.com/Nwinch1512" role="button">
            Github
          </a>
          <a
            class="btn"
            href="https://twitter.com/NaomiWinchurch"
            role="button"
          >
            Twitter
          </a>
        </div>
      </section> */}
    </footer>
  );
}

export default Footer;

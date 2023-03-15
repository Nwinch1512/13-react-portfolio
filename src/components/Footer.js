import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div id="contact-methods">
        <a
          className="btn-email"
          href="mailto: naomi.winchurch@hotmail.co.uk"
          role="button"
        >
          <FontAwesomeIcon icon={faEnvelope} className="emailBtn" />
        </a>
        <a
          className="btn-github"
          href="https://github.com/Nwinch1512"
          role="button"
        >
          <FontAwesomeIcon icon={faGithub} className="githubBtn" />
        </a>
        <a
          className="btn-linkedin"
          href="https://www.linkedin.com/in/naomiwinchurch/"
          role="button"
        >
          <FontAwesomeIcon icon={faLinkedin} className="linkedinBtn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

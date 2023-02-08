import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
  return (
    <header>
      <section classNameName="navContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Homepage
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        <div className="jumbotron jumbotron-fluid jumbotron-custom">
          <div className="row align-items-center">
            <div className="col">
              <h1>Naomi Winchurch</h1>
              <p className="lead custom-hero-text">
                "Proactive, organised, great problem solver, keen to master web
                development"
              </p>
            </div>
            <div className="col-sm-2">
              <img
                className="naomi-pic"
                src="/images/Bootcamp_profile_pic.jpeg"
                alt="photograph of Naomi Winchurch"
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;

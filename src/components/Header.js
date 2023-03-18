import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/NW-logo.png";
import jumbotronVideo from "../images/pexels-german-korb-5644053.mp4";

const profileImg = require("../images/bw-profile.png");
const jumbotronImg = require("../images/pexels-fwstudio-164005.jpg");

function Header() {
  return (
    <header>
      <section className="navContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
          {" "}
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
            <a className="navbar-brand spacer" href="/">
              <img
                src={logo}
                width="60"
                className="d-inline-block align-top NWlogo"
                alt="NW logo"
              />
            </a>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faHome} className="icon" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="project"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faBriefcase} className="icon" />
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="contact"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <FontAwesomeIcon icon={faAddressBook} className="icon" />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        <div
          // className="jumbotron jumbotron-fluid jumbotron-custom"
          className="jumbotron jumbotron-custom"
          // style={{}}
          // style={{ backgroundImage: "url(" + jumbotronImg + ")" }}
        >
          <div className="row align-items-center">
            <div className="col">
              <video
                className="video-jumbotron"
                src={jumbotronVideo}
                autoPlay={true}
                loop={true}
                controls={false}
                playsInline
                muted
              ></video>
              <h1>Naomi Winchurch | Web Developer</h1>
              <p className="lead custom-hero-text">
                "Proactive, organised, creative, and a great problem solver"
              </p>
            </div>
            <div className="col-sm-2">
              <img
                className="naomi-pic"
                src={profileImg}
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

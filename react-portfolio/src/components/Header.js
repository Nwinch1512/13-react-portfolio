import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
const profileImg = require("../images/Bootcamp_profile_pic.jpeg");
const jumbotronImg = require("../images/pexels-fwstudio-164005.jpg");

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
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
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
                  Projects
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
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        <div
          className="jumbotron jumbotron-fluid jumbotron-custom"
          style={{ backgroundImage: "url(" + jumbotronImg + ")" }}
        >
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

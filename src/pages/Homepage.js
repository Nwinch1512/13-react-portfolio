import React from "react";
import "../styles/Homepage.css";
import logo from "../images/NW-logo-with-colour.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const marbleImg = require("../images/pexels-henry-&-co-2341290.jpg");
const greyWoodImg = require("../images/pexels-photo-4097157.jpeg");
const greyConstructionImg = require("../images/pexels-photo-3661445.jpeg");

const jQueryLogo = require("../images/jQueryLogo.png");
const javaScriptLogo = require("../images/javaScriptLogo.png");
const agileLogo = require("../images/agileLogo.jfif");
const bootstrapLogo = require("../images/bootstrapLogo.png");
const cssLogo = require("../images/cssLogo.png");
const githubLogo = require("../images/githubLogo.png");
const htmlLogo = require("../images/htmlLogo.png");
const microsoftLogo = require("../images/296-2963605_logo-microsoft-office-png-transparent-png.png");
const reactLogo = require("../images/reactLogo.png");

function Homepage() {
  return (
    <div className="container-fluid">
      <section className="aboutSection">
        <div
          className="cardContainer col-lg-9 col-md-9 col-sm-12"
          style={{ zIndex: 1, opacity: 1 }}
        >
          <div className="card-1">
            <div
              className="card-body"
              id="about"
              style={{ backgroundImage: "url(" + marbleImg + ")" }}
            >
              <h2 className="card-title">
                <img
                  src={logo}
                  width="30"
                  className="d-inline-block align-top NWlogoAbout"
                  alt="NW logo"
                />
                {"  "}
                About Me
              </h2>
              <p className="about">
                Hello and welcome to my portfolio page! I have extensive
                analysis and project management experience in both the public
                and private sector, as per my{" "}
                <a href="CV web developer.pdf">CV</a>. I'm highly organised and
                a great problem solver. I enjoy working alone and in a team.
                I've just completed the University of Birmingham front end web
                development bootcamp in partnership with edx and am proud to
                have achieved an A grade. I'm excited to develop my technical
                skills and take on new challenges. In my spare time I enjoy:
                weightlifting, jogging, reading, playing board games with my
                family, cooking and drawing.
              </p>
            </div>
          </div>
        </div>

        <div className="cardContainer col-lg-9 col-md-9 col-sm-12">
          <div className="card-2">
            <div
              className="card-body"
              id="skills"
              style={{ backgroundImage: "url(" + marbleImg + ")" }}
            >
              <h2 className="card-title">
                <FontAwesomeIcon icon={faPuzzlePiece} />
                {"  "}Skills
              </h2>
              <div className="listContainer">
                <img
                  className="javaScriptLogo"
                  src={javaScriptLogo}
                  alt="JavaScript logo"
                />
                <img
                  className="jQueryLogo"
                  src={jQueryLogo}
                  alt="jQuery logo"
                />
                <img className="htmlLogo" src={htmlLogo} alt="HTML logo" />
                <img className="cssLogo" src={cssLogo} alt="CSS logo" />
                <img
                  className="githubLogo"
                  src={githubLogo}
                  alt="GitHub logo"
                />
                <img
                  className="bootstrapLogo"
                  src={bootstrapLogo}
                  alt="Bootstrap logo"
                />
                <img className="reactLogo" src={reactLogo} alt="React logo" />
                <img className="agileLogo" src={agileLogo} alt="Agile logo" />
                <img
                  className="microsoftLogo"
                  src={microsoftLogo}
                  alt="Microsoft Word, Excel and Powerpoint logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;

import React from "react";
import "../styles/Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const mealPlannerImg = require("../images/01-meal-planner.jpeg");
const weatherDashboardImg = require("../images/02-weather-dashboard.jpeg");
const workdaySchedulerImg = require("../images/03-work-day-scheduler.jpeg");
const javaScriptQuizImg = require("../images/04-javascript-quiz.jpeg");
const passwordGeneratorImg = require("../images/05-password-generator.jpeg");
const bootstrapPortfolioImg = require("../images/06-bootstrap-portfolio.jpeg");

const projectImages = [
  mealPlannerImg,
  weatherDashboardImg,
  workdaySchedulerImg,
  javaScriptQuizImg,
  passwordGeneratorImg,
  bootstrapPortfolioImg,
];

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <a class="btn btn-primary" href={props.url} role="button">
            {props.title}
          </a>
          <a class="btn btn-primary github" href={props.GitHub} role="button">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* <a class="btn btn-primary" href= role="button">
            GitHub repo
          </a> */}
        </ul>
      </div>
    </div>
  );
}
export default Project;

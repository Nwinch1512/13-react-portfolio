import React, { Component } from "react";
import "../styles/Projectspage.css";
import Project from "./Project";
import Wrapper from "./Wrapper";
import projects from "../projects.json";

//Importing project images
const mealPlannerImg = require("../images/01-meal-planner.jpeg");
const weatherDashboardImg = require("../images/02-weather-dashboard.jpeg");
const workDaySchedulerImg = require("../images/03-work-day-scheduler.jpeg");
const javascriptQuizImg = require("../images/04-javascript-quiz.jpeg");
const passwordGeneratorImg = require("../images/05-password-generator.jpeg");
const bootstrapPortfolioImg = require("../images/06-bootstrap-portfolio.jpeg");

const imgArr = [
  mealPlannerImg,
  weatherDashboardImg,
  workDaySchedulerImg,
  javascriptQuizImg,
  passwordGeneratorImg,
  bootstrapPortfolioImg,
];

function renderImg(url) {
  const img = require(url);
  return img;
}

class Projectspage extends Component {
  state = { projects };

  render() {
    // const img = require({project.image});
    return (
      <Wrapper>
        {this.state.projects.map((project) => (
          <Project
            title={project.title}
            image={project.image}
            url={project.url}
            GitHub={project.GitHub}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Projectspage;

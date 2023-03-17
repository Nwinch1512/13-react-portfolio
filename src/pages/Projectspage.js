import React, { Component } from "react";
import "../styles/Projectspage.css";
import Project from "../components/Project";
import Wrapper from "../components/Wrapper";
import projects from "../projects.json";

class Projectspage extends Component {
  state = { projects };

  render() {
    return (
      <Wrapper>
        {this.state.projects.map((project) => (
          <Project
            title={project.title}
            image={project.image}
            summary={project.summary}
            url={project.url}
            GitHub={project.GitHub}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Projectspage;

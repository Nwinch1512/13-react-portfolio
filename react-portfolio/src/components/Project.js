import React from "react";
import "../styles/Project.css";

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
          <a class="btn btn-primary" href={props.GitHub} role="button">
            GitHub repo
          </a>
        </ul>
      </div>
    </div>
  );
}
export default Project;

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
          <li>
            <strong>
              <a href={props.url}>Title:</a>
            </strong>
            {props.title}
          </li>
          <li>
            <strong>GitHub repo:</strong> {props.GitHub}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Project;

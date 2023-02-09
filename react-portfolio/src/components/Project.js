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
          {/* <button>
            <strong>Title:</strong> */}
          {/* <a href={props.url}> {props.title}</a> */}
          <a class="btn btn-primary" href={props.url} role="button">
            {props.title}
          </a>
          {/* </button> */}
          <li>
            Check out the project on <a href={props.GitHub}>GitHub</a>!
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Project;

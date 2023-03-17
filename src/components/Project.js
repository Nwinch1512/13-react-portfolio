import React from "react";
import Tooltip from "rc-tooltip";
import "../styles/Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "rc-tooltip/assets/bootstrap.css";

const greyWoodImg = require("../images/pexels-photo-3575827-brick-slate.jpeg");
const marbleImg = require("../images/pexels-henry-&-co-2341290.jpg");

function Project(props) {
  return (
    <div className="card" style={{ backgroundImage: "url(" + marbleImg + ")" }}>
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <a
            className="btn btn-primary"
            href={props.url}
            dataToggle="tooltip"
            role="button"
          >
            <Tooltip
              placement="bottom"
              overlay={<span>Click here to access the deployed project</span>}
            >
              <span>{props.title}</span>
            </Tooltip>
          </a>
          <a
            className="btn btn-primary githubRepo"
            href={props.GitHub}
            role="button"
          >
            <Tooltip
              placement="bottom"
              overlay={<span>Click here to access the repo</span>}
            >
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </Tooltip>
          </a>
        </ul>
      </div>
    </div>
  );
}
export default Project;

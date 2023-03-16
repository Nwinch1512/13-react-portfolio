import React from "react";
import "../styles/Wrapper.css";

const marbleImg = require("../images/pexels-henry-&-co-2341290.jpg");

function Wrapper(props) {
  return (
    <div className="cardContainer col-lg-12 col-md-12 col-sm-3">
      <div
        className="projectContainer"
        style={{ backgroundImage: "url(" + marbleImg + ")" }}
      >
        <h2
          className="project card-title"
          // style={{ backgroundImage: "url(" + marbleImg + ")" }}
        >
          Projects
        </h2>
        <div
          className="wrapper"
          // style={{ backgroundImage: "url(" + marbleImg + ")" }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;

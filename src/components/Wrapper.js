import React from "react";
import "../styles/Wrapper.css";

function Wrapper(props) {
  return (
    <div className="cardContainer col-lg-12 col-md-12 col-sm-3">
      <h2 className="project card-title">Projects</h2>
      <div className="wrapper">{props.children}</div>
    </div>
  );
}

export default Wrapper;

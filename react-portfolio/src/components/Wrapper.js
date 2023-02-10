import React from "react";
import "../styles/Wrapper.css";

function Wrapper(props) {
  return (
    <main>
      <h2>Projects</h2>
      <div className="wrapper">{props.children}</div>
    </main>
  );
}

export default Wrapper;

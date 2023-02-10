import React from "react";
import "../styles/Homepage.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
function Homepage() {
  return (
    <div className="container-fluid">
      <section>
        <div className="row">
          <div className="cardContainer col-lg-12 col-md-12 col-sm-3">
            <div className="card-1">
              <div className="card-body" id="about">
                <h2 className="card-title">About Me</h2>
                <p className="about">
                  Hello and welcome to my portfolio page! I have extensive
                  analysis and project management experience in both the public
                  and private sector, as per my <a href="../CV.pdf">CV</a>. I'm
                  highly organised and a great problem solver. I enjoy working
                  alone and in a team. I'm currently learning web developer
                  skills through the University of Birmingham front end
                  developer bootcamp in partnership with edx. I'm excited to
                  develop my technical skills and take on new challenges. In my
                  spare time I enjoy: weightlifting, jogging, reading, playing
                  board games with my family, cooking and drawing.
                </p>
              </div>
            </div>
          </div>

          <div className="cardContainer col-lg-12 col-md-12 col-sm-3">
            <div className="card-2">
              <div className="card-body" id="skills">
                <h2 className="card-title">Skills</h2>
                <div className="listContainer">
                  <ul className="skills-items">
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>GitHub</li>
                  </ul>
                  <ul className="skills-items">
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Agile</li>
                    <li>Microsoft Excel, Word, Powerpoint</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;

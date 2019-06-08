import React, { Component } from "react";
import Graph from '../../components/Graph';
import "./style.css";

class Skills extends Component {

  state = {
    labels: ["HTML + CSS + JS", "Bootstrap", "jQuery", "MySQL + Sequelize", "MongoDB + Mongoose", "Express", "ReactJS", "NodeJS", "Java", "Github"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(255,165,0,0.5)",
        strokeColor: "rgba(255,165,0,0.8)",
        highlightFill: "rgba(255,165,0,0.75)",
        highlightStroke: "rgba(255,165,0,1)",
        data: [85, 60, 85, 90, 45, 55, 65, 92, 5, 95]
      }
    ]
  }

  render() {
    return (
      <React.Fragment>
        {/* <div className="pattern"></div> */}
        <div className="title-wrapper">
          <div className="title-1">Skills</div>
          <div className="title-2 ul">&  Experience</div>
          <div className="half-content right">
            <p>
            I have experience working as a full-stack developer from a 6-month coding bootcamp program from UW PCE and Trilogy.
            </p>
            <p>
            My main area of profeciency is with MongoDB, Express, React, and Node; along with several libraries revolving the MERN stack, CSS, Javascript, and more.
            </p>
          </div>
          <Graph 
          chartData = {this.state}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;

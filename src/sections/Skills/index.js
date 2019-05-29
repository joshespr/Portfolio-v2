import React, { Component } from "react";
import Graph from '../../components/Graph';
import "./style.css";

class Skills extends Component {

  state = {
    currencies: [
      {
        currencyName: 'HTML + CSS + JS',
        marketCap: 106330074359
      },
      {
        currencyName: 'jQuery',
        marketCap: 32402945322
      },
      {
        currencyName: 'Bootstrap',
        marketCap: 11864383092
      },
      {
        currencyName: 'MySQL + Sequelize',
        marketCap: 9612908814
      },
      {
        currencyName: 'MongoDB + Mongoose',
        marketCap: 4644155391
      },
      {
        currencyName: 'Express',
        marketCap: 4084424747
      },
      {
        currencyName: 'ReactJS',
        marketCap: 11864383092
      },
      {
        currencyName: 'NodeJS',
        marketCap: 11864383092
      },
      {
        currencyName: 'Java',
        marketCap: 11864383092
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
          <Graph 
            currencies={this.state.currencies} 
            graphTitle="languages libraries and frameworks"
          />
          <div className="half-content">
            <p>
            I have experience working as a full-stack developer from a 6-month coding bootcamp program from UW PCE and Trilogy.
            </p>
            <p>
            My main area of profeciency is with MongoDB, Express, React, and Node; along with several libraries revolving the MERN stack, CSS, Javascript, and more.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;

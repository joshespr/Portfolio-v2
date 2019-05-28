import React, { Component } from "react";
import "./style.css";

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="pattern"></div>
        <div className="title-wrapper">
          <div className="title-1">Hi,</div>
          <div className="title-2">I'm a Web Developer</div>
          <div className="subtitle">FULL-STACK DEVELOPER / MERN STACK / WEB DESIGNER</div>
          <div className="title-link"><a href="#about" className="hyperlink">Learn More >></a></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

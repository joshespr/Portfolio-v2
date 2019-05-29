import React, { Component } from "react";
import "./style.css";

class Contact extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="pattern"></div>
        <div className="title-wrapper">
          <div className="title-1">Contact <span className="title-2">Me</span></div>
          <div className="subcontent">
            <p>
            In West Philadelphia, born and raised. 
            On the playground is where I spent most of my days.
            Chilling out, maxing, relaxing all cool
            and all shooting some b-ball outside of the school.
            When a couple of guys who were up to no good!
            Started making trouble in my neighborhood..
            I got in one little fight and my mom got scared
            she said, "You're moving with your auntie and uncle in Bel-Air
            </p>
            <p>
            I pulled up to a house about seven or eight,
            and I yelled to the cabbie "Yo homes, smell ya later."
            Looked at my kingdom, I was finally there.
            To sit on my throne as the Prince of Bel-Air.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;

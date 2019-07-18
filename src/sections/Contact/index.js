import React, { Component } from "react";
import "./style.css";

class Contact extends Component {

  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();

  // };

  render() {
    return (
      <React.Fragment>
        <div className="pattern"></div>
        <div className="title-wrapper">
          <div className="title-1">Contact <span className="title-2">Me</span></div>
          <div className="subcontent" style={{color: '#f1f1f1'}}>
            <p> 
            Have a question or want to work together?
            </p>
          </div>

          <div className="contact-frm">

            <div>
              <input 
                className="input name-inp"
                placeholder="Name"
                name="name"
                type="name"
                value={this.state.name}
                onChange = {this.handleInputChange} 
              />
              <input 
                className="input email-inp"
                placeholder="Email"
                name="email"
                type="email"
                value={this.state.email}
                onChange = {this.handleInputChange} 
              />
            </div>

            <div>
              <input 
                className="input subject-inp"
                placeholder="Subject"
                name="subject"
                type="subject"
                value={this.state.subject}
                onChange = {this.handleInputChange} 
              />
            </div>

            <div>
              <textarea  
                className="input message-inp"
                placeholder="Message"
                name="message"
                type="text"
                value={this.state.message}
                onChange = {this.handleInputChange} 
              />
            </div>

            <button 
              className="btn-send" 
              type="submit" 
              // onClick = {this.handleFormSubmit} 
              >Send
            </button>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;

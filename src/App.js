import React, { Component } from 'react';
import "./style.css";
import Nav from './components/Nav';
import Section from './components/Section';
import Home from './sections/Home';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Nav>
          <li><a href="#home">Home</a></li>  
          <li><a href="#about">About</a></li>  
          <li><a href="#skills">Skills</a></li>  
          <li><a href="#project">Project</a></li>  
          <li><a href="#contact">Contact</a></li>  
        </Nav>
        <Section label="home">
          <Home />
        </Section>
      </React.Fragment>
    );
  }
}

export default App;

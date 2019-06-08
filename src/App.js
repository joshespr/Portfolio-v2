import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";
import Nav from './components/Nav';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Project from './sections/Project';
import Contact from './sections/Contact';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        
        <Nav>
          <a href="#">
          <li>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={20} duration= {750}>
          Home
          </Link>
          </li>
          </a>

          <a href="#">
          <li>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={20} duration= {750}>
          About
          </Link>
          </li>
          </a>

          <a href="#">
          <li>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={120} duration= {750}>
          Skills
          </Link>
          </li>
          </a>

          <a href="#">
          <li>
          <Link activeClass="active" to="project" spy={true} smooth={true} offset={120} duration= {750}>
          Project
          </Link>
          </li>
          </a>

          <a href="#">
          <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={120} duration= {750}>
          Contact
          </Link>
          </li>
          </a>
        </Nav>
        
        <Sidebar />

        <Section label="home">
          <Home />
        </Section>

        <Section label="about">
          <About />
        </Section>

        <Section label="skills">
          <Skills />
        </Section>

        <Section label="project">
          <Project />
        </Section>

        <Section label="contact">
          <Contact />
        </Section>

      </React.Fragment>
    );
  }
}

export default App;

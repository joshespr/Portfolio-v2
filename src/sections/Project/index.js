import React, { Component } from "react";
import Wrapper from '../../components/Wrapper';
import Gallery from '../../components/Gallery';
import Console from '../../components/Console';
import GalleryV2 from '../../components/Gallery.V2';
import projects from '../../projects.json';
import "./style.css";

class Project extends Component {

  state = {
    projects
  };


  render() {
    return (
      <React.Fragment>
        <div className="pattern"></div>
        <div className="title-wrapper">
          <div className="title-1">My <span className="title-2">Projects :</span></div>

          <Console>
            {this.state.projects.map(projects => (
              <GalleryV2
                id={projects.id}
                name={projects.name}
                type={projects.type}
                description={projects.description}
                link={projects.link}
                image={projects.image}
              />  
            ))}
          </Console>
          
        </div>
        
      </React.Fragment>
    );
  }
}

export default Project;

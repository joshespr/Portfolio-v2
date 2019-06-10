import React from "react";
import "./style.css";

const styles = {
    pic: {
      width: 300,
      height: "auto",
    }
  }
  

function GalleryV2(props) {

  return (
    <div className="slide" name={props.id}>
      <div className="card">
        <img className="card-img"  alt={props.name} src={require(`../../images/${props.image}`)} />
        <div className="card-content">
          <p className="card-theme">{props.type}</p>
          <h2 className="card-header">{props.name}</h2>
          <p className="card-para">{props.description}</p>
          <a className="card-link" href={props.link}>Visit app</a>
        </div>
      </div>
    </div>
  );
}

export default GalleryV2;

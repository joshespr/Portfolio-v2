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
    <div class="slide">
      <div class="card">
        <img className="card-img"  alt={props.name} src={require(`../../images/${props.image}`)} />
        <div class="card-content">
          <p class="card-theme">{props.type}</p>
          <h2 class="card-header">{props.name}</h2>
          <p class="card-para">{props.description}</p>
          <a class="card-link" href={props.link}>Visit app</a>
        </div>
      </div>
    </div>
  );
}

export default GalleryV2;

import React from "react";
import "./style.css";

const styles = {
    pic: {
      width: 300,
      height: "auto",
    }
  }
  

function Gallery(props) {

    return (
        <div className="trail-card center">
            <img className="trail-img"  alt={props.name} src={require(`../../images/${props.image}`)} />
            <div className="overlay center">
            <div className="content">{props.name}<p className="sub-content">{props.type}</p></div>
            {props.children}
            </div>
        </div>
    );
}

export default Gallery;

import React from "react";
import "./style.css";

function Gallery(props) {

    return (
        <div className="Gallery" id={props.label}>      
            {props.children}
        </div>
    );
}

export default Gallery;

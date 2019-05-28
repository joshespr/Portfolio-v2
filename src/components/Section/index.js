import React from "react";
import "./style.css";

function Section(props) {

    return (
        <div id={props.label}>      
            {props.children}
        </div>
    );
}

export default Section;

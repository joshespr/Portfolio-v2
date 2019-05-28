import React from "react";
import "./style.css";

function Nav(props) {

    return (
        <nav className="navbar navbar-default navbar-fixed-top">      
            <ul>
                {props.children}
            </ul>
        </nav>

    );
}

export default Nav;

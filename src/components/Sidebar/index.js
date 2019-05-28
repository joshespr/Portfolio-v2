import React from "react";
import "./style.css";

function Sidebar(props) {

    return (
        <div className="sidebar">      
            <ul>
                <li><ion-icon name="logo-facebook"></ion-icon></li>
                <li><ion-icon name="logo-instagram"></ion-icon></li>
                <li><ion-icon name="logo-twitter"></ion-icon></li>
                <li><ion-icon name="logo-youtube"></ion-icon></li>
            </ul>
        </div>

    );
}

export default Sidebar;

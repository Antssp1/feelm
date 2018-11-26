import React from "react";
import "./index.css";
 const FeelButton = (props) => (
    <li className="feel-li">
        
        <img src={props.image} className="feel-icone" alt={props.text}></img>
        <span className="round-span"></span>
        <p className="feel-text">{props.text}</p>
        
    </li>
);
 export default FeelButton; 
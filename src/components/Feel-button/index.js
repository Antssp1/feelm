import React from "react";
import "./index.css";
import {NavLink} from "react-router-dom"

 const FeelButton = (props) => (
    <li className="feel-li">
        
        <img src={props.image} className="feel-icone" alt={props.text}></img>
        <NavLink to={`/actu/${props.genre}`}><span className="round-span"></span></NavLink>
        <p className="feel-text">{props.text}</p>
        
    </li>
);
 export default FeelButton; 
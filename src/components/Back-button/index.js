import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import './index.css';
import fleche from "./fleche-retour.png"

class BackButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: props.nav
          };
        }
  render() {
    return (
    <div className="bouton-fleche">
        <NavLink to="/">
        <img className="image-fleche" src={fleche} alt="fleche de retour"></img>
        <NavLink />
    </div>
    );
  }
  }

export default BackButton;
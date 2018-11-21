import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import './index.css';
import fleche from "./fleche-retour.png"

class BackButton extends Component {

  render() {
    return (
    <div className="bouton-fleche" onClick={this.navigateBack}>
        <NavLink to="/">
        <img className="image-fleche" src={fleche} alt="fleche de retour"></img>
        <NavLink />
    </div>
    );
  }
  }

export default BackButton;
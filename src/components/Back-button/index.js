import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import { withRouter } from 'react-router-dom';
import './index.css';
import fleche from "./fleche-retour.png"

class BackButton extends Component {


  navigateBack(){
    this.props.history.goBack();
  }
  render() {
    return (
    <div className="bouton-fleche" onClick={ () => this.navigateBack()}>
        <img className="image-fleche" src={fleche} alt="fleche de retour"></img>
    </div>
    )
  }
}

export default withRouter(BackButton);
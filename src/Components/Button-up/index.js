// Button scroll up 
import React, { Component } from "react";
import "./index.css";
import upbutton from './upbutton.png';


class ButtonUp extends Component {
    render() {
        return (
            <div className={this.props.isVisible ? 'visible button-up' : 'button-up'}>
                <a href="#top" className="buttonlink" >
                    <img className="button-img" src={upbutton} alt="Button up" />
                </a>
            </div>
        );
    }
}




export default ButtonUp



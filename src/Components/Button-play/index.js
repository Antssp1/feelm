import React, { Component } from "react";
import "./index.css"
import ButtonClose from "./closebutton.png";
import ButtonPlay from "./playbutton.png";


class ButtonsPlayClose extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }


    handleClick() {
        this.props.displayNon()
        this.setState({
            isVisible: !this.state.isVisible
        })
    }


    render() {
        return (
            <div className="body">
                <img onClick={() => this.handleClick()} src={ButtonPlay} className="button-play" alt="Button Play" />
                {this.state.isVisible ? (
                    <div className="video">
                        <img onClick={() => this.handleClick()} src={ButtonClose} className="button-close" alt="Button Play" />
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.video}?controls=0`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                ) : null}
            </div>
        );
    }

}

export default ButtonsPlayClose;

//                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.video}?controls=0`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

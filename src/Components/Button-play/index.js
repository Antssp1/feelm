import React, { Component } from "react";
import "./index.css"
import ButtonClose from "./closebutton.png";
import ButtonPlay from "./playbutton.png";

// remplacer le iframe par le component video => //<iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


class ButtonsPlayClose extends Component {


    constructor() {
        super();
        this.state = {
            isVisible: false,
        };
    }


    handleClick(){
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
 

    render() {
        return (
            <div className="body">
                <img onClick={() => this.handleClick() } src={ButtonPlay} className="button-play" alt="Button Play" />
                {this.state.isVisible ? (
                    <div className="video">
                    <img onClick={() => this.handleClick()} src={ButtonClose} className="button-close" alt="Button Play" />
                        <iframe width="560" height="315" src="https://www.youtube.com/watch?v=9_k_goMr5ZI&list=RD9_k_goMr5ZI&start_radio=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default ButtonsPlayClose;


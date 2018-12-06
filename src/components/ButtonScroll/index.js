// Button scroll up 
import React, { Component } from "react";
import "./index.css";
import upbutton from './upbutton.png';
import Fleche from "./fleche-down.gif"



class ButtonScroll extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lastOffset: 0,
            isVisible: true
        }
    }

    handleScroll(evt) {
        let sign = this.props.direction === 'up' ? true : false;
        const offset = Math.round(window.pageYOffset)
        if (this.state.lastOffset !== offset) {
            if (this.state.lastOffset < offset) {
                this.setState({ isVisible: sign, lastOffset: offset })
            } else {
                this.setState({ isVisible: !sign, lastOffset: offset })
            }
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', (evt) => this.handleScroll(evt))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', (evt) => this.handleScroll(evt))
    }

    ButtonUp(){
        return (
  
            <div className={this.state.isVisible ? 'visible button-up' : 'button-up'}>
                <a href="#top" className="buttonlink" >
                    <img className="button-img" src={upbutton} alt="Button up" />
                </a>
            </div>
        )
    }

    ButtonDown(){
        return(
            <img src={Fleche} className={"gif-fleche" + (this.state.isVisible ? "" : "-close")} alt="fleche vers le bas" />
        )
    }
    render() {

        let Button
        if (this.props.direction === 'up') {
            Button = () => this.ButtonUp();
          } else {
            Button =() => this.ButtonDown();
          }
        return (
          <Button />
        );
    }
}




export default ButtonScroll



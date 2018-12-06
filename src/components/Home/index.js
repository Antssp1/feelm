import React, { Component } from "react"
import Logo from './Logo.png';
import "./index.css";
import ListButton from "../../components/List-button/index"
import ButtonScroll from "../../components/ButtonScroll/index"

class Home extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="container-home">
        <div className="header-description">
          <div className="logo-description">
            <img src={Logo} alt="feel'm logo" />
            <p>Make the choice that match with your feeling among <b>400 000 movies</b> !</p>
          </div>
          <div className="div-question-gif">
            <p className="question">How do you feel today ?</p>
           <ButtonScroll direction="down"/>
          </div>
        </div>
        <ListButton />
      </div>
    )
  }
}


export default Home
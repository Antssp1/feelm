import React, { Component } from "react"
import Logo from './Logo.png';
import "./index.css";
import ListButton from "../../Components/List-button/index"
import ButtonScroll from "../ButtonScroll/index"

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
            <p>Faites le choix qui convient le mieux à votre humeur parmi plus de <b>400 000 films</b> !</p>
          </div>
          <div className="div-question-gif">
            <p className="question">Comment vous sentez-vous ?</p>
           <ButtonScroll direction="down"/>
          </div>
        </div>
        <ListButton />
      </div>
    )
  }
}


export default Home
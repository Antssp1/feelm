import React, {Component} from "react"
import Logo from './Logo.png';
import "./index.css";
import ListButton from "../../components/List-button/index"
import Fleche from "./fleche-down.gif"

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
          lastOffset: 0,
          isVisible: false
        }
      }
       handleScroll(evt) {
        const offset = Math.round(window.pageYOffset)
         if (this.state.lastOffset !== offset) {
          if (this.state.lastOffset > offset) {
            this.setState({ isVisible: true, lastOffset: offset })
          }else{
            this.setState({ isVisible: false, lastOffset: offset })
           }
        }
      }
       componentDidMount() {
        window.addEventListener('scroll', (evt) => this.handleScroll(evt))
      }
       componentWillUnmount() {
        window.removeEventListener('scroll', (evt) => this.handleScroll(evt))
      }
       render() {
    return (
        <div className="container-home" onScroll={(evt) => this.handleScroll(evt)}>
            <img src={Logo} alt="feel'm logo"/>
            <p>Faites le choix qui convient le mieux à votre humeur parmi plus de <b>400 000 films</b> !</p>
            <div className="div-question-gif">
            <p className="question">Comment vous sentez-vous ?</p>
            <img src={Fleche} className={"gif-fleche" + (this.state.isVisible ? "":"-close")} alt="fleche vers le bas"/>
            </div>
            <ListButton />
        </div>
    )
}
}


export default Home
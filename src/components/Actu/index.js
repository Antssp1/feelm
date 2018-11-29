import React, {Component} from "react"
import "./index.css"
import BoutonTri from "../Bouton-tri/index";
import Layout from "../scroll/index";
import ButtonScroll from '../ButtonScroll/index'
import BackButton from "../../components/Back-button/index"

class Actu extends Component {
   
    render() {
        return (
            <div id="top" className="container-actu" onScroll={(evt) => this.handleScroll(evt)}>
                <BackButton />
                <BoutonTri />
                <Layout />
                <ButtonScroll direction="up"/>
            </div>
        )
    }
}


    export default Actu
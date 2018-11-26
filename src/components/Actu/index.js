import React, { Component } from "react";
import "./index.css";
import BoutonTri from "../Bouton-tri/index";
import Layout from "../scroll/index";
// import ButtonUp from "../Button-up/index";


class Actu extends Component {
   
    render() {
        return (
            <div id="top" className="container-actu" onScroll={(evt) => this.handleScroll(evt)}>
                <BoutonTri />
                <Layout />
            </div>
        )
    }
}


    export default Actu
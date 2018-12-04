import React, {Component} from "react"
import "./index.css"
import BoutonTri from "../Bouton-tri/index";
import Layout from "../scroll/index";
import ButtonScroll from '../../Components/ButtonScroll/index'

class Actu extends Component{
    constructor(props){
        super(props)
        this.state = {
            apiType : "popularity"
        }
    }
    changeOrder(str){
        this.setState({
            apiType: str
        })
    }
    render(){ 
    return (
        <div className="container-actu" onScroll={(evt) => this.handleScroll(evt)}>
            <BoutonTri activate={(str) => this.changeOrder(str)}/>
            <Layout apiType={this.state.apiType}/>
            <ButtonScroll direction="up"/>

        </div>
    )
    }
}


    export default Actu
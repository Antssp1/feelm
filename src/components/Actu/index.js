import React, {Component} from "react"
import "./index.css"
import BoutonTri from "../Bouton-tri/index";
import Layout from "../scroll/index";
import ButtonScroll from '../../components/ButtonScroll/index'
import BackButton from "../../components/Back-button/index"
import Image from "../Image/index"

class Actu extends Component{
    constructor(props){
        super(props)
        this.state = {
            apiType : "popularity",
            classname : "popularity"
        }
    }

    changeOrder(str){
        this.setState({
            apiType: str,
            classname: str.substring(0, 5)
        })
        
    }
    render(){ 
    return (
        <div className="container-actu">
            <Image />
            <BackButton />
            <BoutonTri activate={(str) => this.changeOrder(str)} />
            <Layout apiType={this.state.apiType} classname={this.state.classname}/>
            <ButtonScroll direction="up"/>

        </div>
    )
    }
}


    export default Actu
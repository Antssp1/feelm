import React from "react";
import "./index.css";
import BoutonTri from "../Bouton-tri/index";
import Layout from "../scroll/index";
import ButtonUp from "../Button-up/index";


class Actu extends Component {

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
            if (this.state.lastOffset < offset) {
                this.setState({ isVisible: true, lastOffset: offset })
            } else {
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
            <div id="top" className="container-actu" onScroll={(evt) => this.handleScroll(evt)}>
                <BoutonTri />
                <Layout />
                <ButtonUp isVisible={this.state.isVisible} />
            </div>
        )
    }
}


    export default Actu
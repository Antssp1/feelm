import React, { Component } from "react";
import "./index.css";
import ButtonsPlayClose from "../Button-play/index"
//<img src={`https://image.tmdb.org/t/p/w1400_and_h450_bestv2${props.affiche}`} alt="Affiche film" />


class DetailsFilm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            etat: true
        }


    }

    cacher() {
        this.setState({
            etat: !this.state.etat

        })

    }

    render() {
        let description = "";
        (this.state.etat ? description = "container-detail" : description = "displayNon")

        return (

            <React.Fragment>

                <ButtonsPlayClose displayNon={() => this.cacher()} />

                <div className={description}>

                    <div className="header-detail image-poster" style={{ backgroundImage: 'url(https://image.tmdb.org/t/p/w1400_and_h450_bestv2' + this.props.affiche + ')' }}>
                        <div className="titre">
                            <h2 className="titre-film">{this.props.titre}</h2>
                        </div>
                       
                    </div>

                    <div className="liste-detail">

                        <div className="list-infos-film">
                            <ul className="info">
                                <li className="right"> {this.props.annee} </li>
                                <li>{this.props.genre}  </li>
                                <li className="no-bar">{this.props.duree} mins </li>
                            </ul>
                            <ul className="info2">
                                <li className="right">Productor : {this.props.producteur} </li>
                                <li className="no-bar">Principal actor : {this.props.acteur}  </li>
                            </ul>
                            <p className="description-film">{this.props.description}</p>
                        </div>

                    </div>

                    <div className="films-similaires">
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default DetailsFilm;
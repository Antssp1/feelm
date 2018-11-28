import React from "react";
import "./index.css";
import ButtonPlay from "./playbutton.png";


const DetailsFilm = (props) => {
    return (
        <div className="container-detail">

            <div className="header-detail">
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.affiche}`}  alt="Affiche film" />
                
                <p className="Titre du film">{props.titre}</p>
                <img src={ButtonPlay} alt="Button Play"/> 
            </div>

            <div className="list-infos-film">
                <ul className="info">
                    <li className="elemlist">Année : {props.annee} </li>
                    <li>Genre : {props.genre} </li>
                    <li className="no-bar">Durée : {props.duree} </li>
                </ul>
                <ul>
                    <li>Producteur : {props.producteur} </li>
                    <li className="no-bar">Acteurs : {props.acteur}  </li>
                </ul>
                <p className="description-film">{props.description}</p>
            </div>
            
            <div className="films-similaires">
                <h3>Film similaires</h3>
            </div>
        </div>
    )
}

export default DetailsFilm;
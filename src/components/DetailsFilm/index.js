import React from "react";
import "./index.css";
import ButtonPlay from "./playbutton.png";


// <img src={`https://www.youtube.com/watch?v=U0YyQ9TGQa0{props.key}`}  alt="Video" /> 

const DetailsFilm = (props) => {
    return (
        <div className="container-detail">

            <div className="header-detail">
                  <img src={`https://image.tmdb.org/t/p/w1400_and_h450_bestv2${props.affiche}`}  alt="Affiche film" />
                    <h2 className="Titre-film">{props.titre}</h2>
            
            </div>
           <img src={ButtonPlay} className="button-play" alt="Button Play"/> 

            <div className="list-infos-film">

                <ul className="info">
                    <li className="right">Année : {props.annee} </li>
                    <li>Genre : {props.genre} </li>
                    <li className="no-bar">Durée : {props.duree} </li>
                </ul>
                <ul>
                    <li className="right">Producteur : {props.producteur} </li>
                    <li className="no-bar">Acteurs : {props.acteur}  </li>
                </ul>
                <p className="description-film">{props.description}</p>
            </div>
            
            <div className="films-similaires">
            </div>
        </div>
    )
}

export default DetailsFilm;
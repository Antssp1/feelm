import React from "react";
import "./index.css";
import ButtonPlay from "./playbutton.png";

//<img src={`https://image.tmdb.org/t/p/w1400_and_h450_bestv2${props.affiche}`} alt="Affiche film" />

//<iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const DetailsFilm = (props) => {
    return (

        <div className="container-detail">

            <div className="header-detail">
                <div className="bg-opacite">
                    <div className="titre">
                        <h2 className="titre-film">{props.titre}</h2>
                        <hr />
                    </div>
                    <div className="image-poster">
                        <img src={`https://image.tmdb.org/t/p/w1400_and_h450_bestv2${props.affiche}`} alt="Affiche film" />
                    </div> 

                </div>
            </div>

            <div className="liste-detail">
                <img src={ButtonPlay} className="button-play" alt="Button Play" />

                <div className="list-infos-film">
                    <ul className="info">
                        <li className="right"> {props.annee} </li>
                        <li>{props.genre}  </li>
                        <li className="no-bar">{props.duree} mins </li>
                    </ul>
                    <ul className="info2">
                        <li className="right">Productor : {props.producteur} </li>
                        <li className="no-bar">Principal actor : {props.acteur}  </li>
                    </ul>
                    <p className="description-film">{props.description}</p>
                </div>

            </div>

            <div className="films-similaires">
            </div>
        </div>
    )
}

export default DetailsFilm;
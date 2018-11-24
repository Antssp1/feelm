import React from "react";
import "./index.css"


const ListeDescription = ({ infos }) => {
    return (
        <div className="container-detail">

            <div className="header-detail">
                <img src="" alt="Affiche film" />
                <p className="Titre du film">{}</p>
                <img src="" alt="Button Play"/> 
            </div>

            <div className="list-infos-film">
                <ul className="info">
                    <li>Année : {}  </li>
                    <li>Genre : {}  </li>
                    <li>Durée : {} </li>
                </ul>
                <ul>
                    <li>Producteur :{}  </li>
                    <li>Acteurs : {} </li>
                </ul>
                <p className="description-film">{}</p>
            </div>
            
            <div className="films-similaires">
                <h3>Film similaires</h3>
            </div>
        </div>


    )
}


export default ListeDescription;
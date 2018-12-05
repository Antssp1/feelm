import React from "react";
import "./index.css";
import FeelButton from "../Feel-button/index"
import Joyeux from "./1.png"
import Triste from "./2.png"
import EnColere from "./3.png"
import Amoureux from "./4.png"
import Sadique from "./5.png"
import Confiant from "./6.png"
import Anxieux from "./7.png"


const feel = [
    {
      feeling:"Joyeux",
      image:Joyeux,
      genre:"35"
    }, 
    {
        feeling:"Triste",
        image:Triste,
        genre:"18"
    },
    {
        feeling:"En Colere",
        image:EnColere,
        genre:"10752"
      }, 
      {
        feeling:"Amoureux",
        image:Amoureux,
        genre:"10749"
      }, 
      {
        feeling:"Sadique",
        image:Sadique,
        genre:"27"
      }, 
      {
        feeling:"Confiant",
        image:Confiant,
        genre:"28",
        secondGenre:"878"
      },
      {
        feeling:"Anxieux",
        image:Anxieux,
        genre:"53"
      },
  ];
  

const ListButton = () => (
    <ul className="list-button">

        {feel.map(elem => (
                <FeelButton image={elem.image} text={elem.feeling} genre={elem.genre}/>
            ))}
    </ul>
)

export default ListButton
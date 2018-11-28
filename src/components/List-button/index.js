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
    }, 
    {
        feeling:"Triste",
        image:Triste
    },
    {
        feeling:"En Colère",
        image:EnColere
      }, 
      {
        feeling:"Amoureux",
        image:Amoureux
      }, 
      {
        feeling:"Sadique",
        image:Sadique
      }, 
      {
        feeling:"Confiant",
        image:Confiant
      },
      {
        feeling:"Anxieux",
        image:Anxieux
      },
  ];
  

const ListButton = () => (
    <ul className="list-button">

        {feel.map(elem => (
                <FeelButton image={elem.image} text={elem.feeling} classement={elem.classement}/>
            ))}
    </ul>
)

export default ListButton
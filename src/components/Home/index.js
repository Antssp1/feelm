import React from "react"
import Logo from './Logo.png';
import "./index.css";
import ListButton from "../../components/List-button/index"

const Home = () => {
    return (
        <div className="container-home">
            <img src={Logo} alt="feel'm logo"/>
            <p>L’application qui selon votre humeur vous propose une liste de film.
                Avec une base de donnée de plus de 400 000 films.
            </p>
            <ListButton />
        </div>
    )
}


export default Home
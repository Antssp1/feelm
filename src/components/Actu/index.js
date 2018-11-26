import React from "react"
import "./index.css"
import BoutonTri from "../Bouton-tri/index"
import Layout from "../scroll/index"
import ListFilm from "../List-film/index"

const Actu = () => {
    return (
        <div className="container-actu">
            <BoutonTri />
            <Layout />
            <ListFilm />
        </div>
    )
}


export default Actu
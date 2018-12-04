import React from "react";
import ButtonsPlayClose from "../../Components/Button-play"
import BackButton from "../../components/Back-button/index"

// div à rajouter dans DetailFilms
const Detail = () => {
    return (
        <div className="container-detail">
            <BackButton />
            <ButtonsPlayClose/>
        </div>
    )
}


export default Detail;
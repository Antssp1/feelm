import React from "react"
import {withRouter} from "react-router"
import Image35 from "./35.png"
import Image18 from "./18.png"
import Image10752 from "./10752.png"
import Image10749 from "./10749.png"
import Image27 from "./27.png"
import Image28 from "./28.png"
import Image53 from "./53.png"
import "./index.css"

const tbl = {
    35: Image35,
    18: Image18,
    10752: Image10752,
    10749: Image10749,
    27: Image27,
    28: Image28,
    53: Image53
}

const Image = (props) => (
    <div>
            <img className="image" src={tbl[props.match.params.genre]}></img>
    </div>
)

export default withRouter(Image);
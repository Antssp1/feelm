import React, {Component} from "react";
import "./index.css";



class ListFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: []
          };
        }
        
   

    render() {
    const listeDeFilm = this.state.film.map((elem, index)=> (
        <li key={index} image={elem.poster_path}></li>
    ))

        return (
            <React.Fragment>
            {listeDeFilm}
            </React.Fragment>
        )
    }
}


export default ListFilm
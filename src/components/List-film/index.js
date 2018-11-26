import React, {Component} from "react";
import "./index.css";



class ListFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: props.image
          };
        }

        getImage() { 
            fetch("https://api.themoviedb.org/3/movie/550?")
                .then(response  =>  response.json())
                .then(data  => {
                this.setState({
                    film:  data[0],
                });
            });
        }

    render() {
        return(
       
    <ul className="list-film">

        {this.state.map(elem => (
                <li>
                {this.getImage()}
         
                </li>
            ))}
    </ul>
   
)}
}

export default ListFilm
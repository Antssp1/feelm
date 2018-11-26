import React, {Component} from "react";
import "./index.css";



class ListFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: []
          };
        }
        

        componentDidMount() { 
            fetch(" /discover/movie?sort_by=popularity.desc")
                .then(response  =>  response.json())
                .then(data  => {
                this.setState({
                    film:  data[0],
                });
            });
        }

    render() {
    const listeDeFilm = () => ( 
    
    <ul className="list-film">
        {this.state.film.map(elem =>(
            <li>{listeDeFilm}</li>
    
        )           
)}
</ul> 
) 
}
}

export default ListFilm
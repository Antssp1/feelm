import React, {Component} from "react";
import "./index.css";
import DetailFilm from "../DetailsFilm/index";
// rajout du bouton play avec Bande-Annonce

class ListeDescription extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataList:[]
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=b53ba6ff46235039543d199b7fdebd90&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1" )
        .then(response => response.json())
        .then (data => {
            this.setState({
                dataList : data.results 
            })
        })
    }


    render(){
        const list = this.state.dataList.map((detail, index) => (
            <DetailFilm key={index} affiche={detail.backdrop_path} titre={detail.title} annee={detail.release_date} description={detail.overview} duree={detail.runtime} genre={detail.genre_ids} ></DetailFilm>
        ))
        return(
            <div>
                {list}
            </div>
        )
    }

}

export default ListeDescription;
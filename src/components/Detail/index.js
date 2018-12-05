import React, {Component} from "react";
import DetailFilm from "../DetailsFilm/index"; 

const idMovie = 338952;

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            movieData:[], 
            cast:[],
            Producer:{},
            genre:{},
            video:{},
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/338952?api_key=b53ba6ff46235039543d199b7fdebd90&language=en-US" )
        .then(response => response.json())
        .then (data => {
            this.setState({
                movieData : data,
                genre : data.genres[0],

            })
        })


        fetch("https://api.themoviedb.org/3/movie/338952/credits?api_key=b53ba6ff46235039543d199b7fdebd90" )
        .then(response => response.json())
        .then (data => {
            this.setState({
                cast : data.cast[0],
                Producer : data.crew[2],
            })
        })
        

        fetch("https://api.themoviedb.org/3/movie/338952/videos?api_key=b53ba6ff46235039543d199b7fdebd90&language=en-US" )
        .then(response => response.json())
        .then (data => {
            this.setState({
                video : data.results[0]
            })
        }) 
    }


    render(){
        
        return(

            <div>
                
                <DetailFilm 
                    affiche={this.state.movieData.backdrop_path}
                    video={this.state.video.key} 
                    titre={this.state.movieData.title} 
                    annee={this.state.movieData.release_date} 
                    description={this.state.movieData.overview}
                    duree={this.state.movieData.runtime} 
                    genre={this.state.genre.name}
                    acteur={this.state.cast.name}
                    Producer={this.state.Producer.name} >
                 </DetailFilm>
            </div>
        )
    }

}

export default Detail;
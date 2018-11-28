import React, {Component} from "react";
import DetailFilm from "../DetailsFilm/index";
 

// const Detail =() => (
//     <div>
//         <ListeDescrption/>
//     </div>
// )
const idMovie = 338952;

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataList:[],
            movieData:[], 
            cast:[],
            director:{}
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/338952?api_key=b53ba6ff46235039543d199b7fdebd90&language=en-US" )
        .then(response => response.json())
        .then (data => {
            this.setState({
                dataList : data 
            })
        })

    }


    render(){

        

        return(
            <div>
                <DetailFilm affiche={this.state.dataList.backdrop_path} titre={this.state.dataList.title} annee={this.state.dataList.release_date} description={this.state.dataList.overview} duree={this.state.dataList.runtime} genre={this.state.dataList.genre} ></DetailFilm>
            </div>
        )
    }

}

export default Detail;
import React, { Component } from "react";
import DetailFilm from "../DetailsFilm/index";
import ButtonsPlayClose from "../Button-play/index";
import { withRouter } from "react-router"


class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: [],
            cast: [],
            Producer: {},
            genre: {},
            video: {},
        }
    }

    componentDidMount() {
        const idMovie = this.props.match.params.id


        fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=b53ba6ff46235039543d199b7fdebd90&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data, "OK")
                this.setState({
                    movieData: data,
                    genre: data.genres[0],

                })
            })


        fetch(`https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=b53ba6ff46235039543d199b7fdebd90`)
            .then(response => response.json())
            .then(data => {

                let producers = data.crew.filter((elem) => {
                    if (elem.job.toLowerCase().includes("producer")) {
                        return true;
                    }


                })

                this.setState({
                    cast: data.cast[0],
                    Producer: producers[0]
                })
            })


        fetch(`https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=b53ba6ff46235039543d199b7fdebd90&language=en-US`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    video: data.results[0]
                })
            })
    }

    render() {

        return (
            <div>
                <DetailFilm
                    affiche={this.state.movieData.backdrop_path}
                    titre={this.state.movieData.title}
                    annee={this.state.movieData.release_date}
                    description={this.state.movieData.overview}
                    duree={this.state.movieData.runtime}
                    genre={this.state.genre.name}
                    acteur={this.state.cast.name}
                    Producer={this.state.Producer}>
                </DetailFilm>

                <ButtonsPlayClose
                    video={this.state.video.key}
                >
                </ButtonsPlayClose>
            </div>
        )
    }

}

export default withRouter(Detail);
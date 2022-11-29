import React from "react";

import CardMovie from "../Cards/CardMovie";

import Constants from "../Constants/Constants";

class ClassCardMovies extends React.Component{
    
    constructor(){
        super();
        this.state={
            movies:Constants.movies
        }
    }

    render(){
        return(
            <div id="movies" className="content content_row">
                {this.state.movies.map(movie => <CardMovie key={movie.id} props={movie} />)}
            </div>
        )
    }

}

export default ClassCardMovies;
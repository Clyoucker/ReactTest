import React from "react";

import CardMovie from "../Cards/CardMovie";

import Constants from "../Constants/Constants";

class ClassCardMovies extends React.Component{
    
    constructor({props}){
        super();
        this.state={
            movies:Constants.movies,
            filter:props.useFilter,
            searh:props.useSearh,
            ages:props.useAges,
            years:props.useYears,
            rates:props.useRates,
            genres:props.useGenres,
            keys:null,
        }
    }

    Proof(lstStandart,lstCheck){
        let count = 0;
        let lstStandartCount = lstStandart.length;
        let lstCheckCount = lstCheck.length;
        for(let i = 0; i < lstCheckCount; i++){
            for(let j = 0; j < lstStandartCount; j++){
                if(lstStandart[j] === lstCheck[i]){count++}
            }
        }
        return (count === lstStandartCount ? true : false)
    }

    Filtration(){
        let keys = [];
        let arr = this.state.ages.concat(this.state.years).concat(this.state.rates).concat(this.state.genres);
        const array = arr.filter(x => x !== null)
    
        this.state.movies.map(movie => {
            let arr2 = [movie.age].concat(movie.genres).concat([Number(movie.dateRelease.split(".")[2])]).concat([Math.floor(movie.rate)])
            let res = this.Proof(array,arr2)
            res === true && keys.push(movie.id)
        })
        this.state.keys = keys;
    }


    render(){
        return(
            <div id="movies" className="content content_row">
                {this.Filtration()}
                {this.state.filter === true ? this.state.keys.map(key => this.state.movies.map(movie => (movie.id === key ? <CardMovie key={movie.id} props={movie} /> : ""))) : this.state.movies.map(movie => <CardMovie key={movie.id} props={movie} />)}
            </div>
        )
    }

}

export default ClassCardMovies;
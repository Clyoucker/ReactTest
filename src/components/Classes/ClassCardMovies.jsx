import React from "react";

import CardMovie from "../Cards/CardMovie";
import Constants from "../Constants/Constants";

class ClassCardMovies extends React.Component{
    
    constructor({props}){
        super();
        console.log(props)
        this.state={
            movies:Constants.movies,
            filter:false,
            //searh:props.useSearh,
            //ages:props.useAges,
            years:props,
            //rates:props.useRates,
            //genres:props.useGenres,
            keys:[],
        }
    }

    Proof(lstStandart,lstCheck){
        let res = [];
        let count = 0;
        lstStandart.forEach((item) => {
            if(item.length > 0){count++}
        });
        
        for(const filter of lstStandart){
            for(const check of lstCheck){
                let ss = filter.filter(x => check.includes(x))
                if(ss.length > 0){res.push(ss[0])}
            }
        }

        let result = (res.length === count ? true : false)
        return (result === true ? true : false)
        }
        
    Filtration(){
        let ids = [];
        if(this.state.searh.length !== 0){
            let searh = this.state.searh[0].toLowerCase();
            this.state.movies.forEach(movie => {
                (movie.titleEng.toLowerCase().startsWith(searh.toLowerCase()) ? ids.push(movie.id) : (movie.titleRus.toLowerCase().startsWith(searh.toLowerCase()) ? ids.push(movie.id)  : console.log("Not Searh")))
            })
        } else {
            let filterArray = [this.state.ages,this.state.years,this.state.rates,this.state.genres];
                
            this.state.movies.forEach(movie => {
                let movieArray = [[movie.age],[Number(movie.dateRelease.split(".")[2])],[Math.floor(movie.rate)],movie.genres]
                if(this.Proof(filterArray,movieArray) === true){ids.push(movie.id)}
            });
        }
        this.state.keys = ids;
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
import React, { useEffect, useState } from "react";

import Constants from "../components/Constants/Constants";
import CardMovie from "../components/Cards/CardMovie";
// import ClassCardMovies from "../components/Classes/ClassCardMovies";

const Movie = () => {

  const [search,setSearch] = useState([])
  const [years,setYears] = useState([])
  const [ages,setAges] = useState([])
  const [rates,setRates] = useState([])
  const [genres,setGenres] = useState([])
  const [keys,setKeys] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32])

  const findIndex = (value,list) => {
    for(let i = 0; i < list.length; i++){
      if(list[i] === value){return i}
    }
  }

  const Filtration = (array,type) => {
    let ids = [];
    if(type === "searchs" && array[0].length !== 0){
        let searh = array[0].toLowerCase();
        Constants.movies.forEach(movie => {
            (movie.titleEng.toLowerCase().startsWith(searh) ? ids.push(movie.id) : (movie.titleRus.toLowerCase().startsWith(searh) ? ids.push(movie.id)  : console.log("Not Searh")))
        })
    } else {
        let filterArray = [];
        if(type === "ages"){filterArray.push(array,years,rates,genres)}
        if(type === "years"){filterArray.push(ages,array,rates,genres)}
        if(type === "rates"){filterArray.push(ages,years,array,genres)}
        if(type === "genres"){filterArray.push(ages,years,rates,array)}
            
        Constants.movies.forEach(movie => {
            let movieArray = [[movie.age],[Number(movie.dateRelease.split(".")[2])],[Math.floor(movie.rate)],movie.genres]
            if(Proof(filterArray,movieArray) === true){ids.push(movie.id)}
        });
    }
    setKeys(ids)
}

  const Searhing = (searchText) => {
    let array = Object.assign([],search);
    (searchText.length > 0 ? array.push(searchText) : array.push([]))
    setSearch(array);
    Filtration(array,"searchs")
  }

  const setCheckBox = (checkBoxId,value,type) => {
    const checkBox = document.getElementById(checkBoxId);
    let array = Object.assign([],(type === "years" ? years : (type === "ages" ? ages : (type === "rates" ? rates : (type === "genres" ? genres : NaN)))));

    (checkBox.classList.contains("checkbox_active") === true ? checkBox.classList.toggle("checkbox_active") : checkBox.classList.toggle("checkbox_active"));
    
    if(checkBox.classList.contains("checkbox_active")){array.push(value)} 
    else{
      let index = findIndex(value,array);
      (index === 0 ? array.shift() : array.splice(index,index))
    }

    (type === "years" ? setYears(array) : (type === "ages" ? setAges(array) : (type === "rates" ? setRates(array) : (type === "genres" ? setGenres(array) : console.log("Error!")))))
    Filtration(array,type)
  }

  const dropDown = (dropdownId,btnId) => {
    let btn = document.getElementById(btnId);;
    let dropdown = document.getElementById(dropdownId);

    dropdown.classList.toggle("hiden");
    dropdown.classList.toggle("ops");

    let dropdownWidth = dropdown.clientWidth;

    (btn.classList.contains("dropdown-btn_active") === true ? btn.classList.remove("dropdown-btn_active") : btn.classList.add("dropdown-btn_active"));
    (btn.classList.contains("dropdown-btn_active") === true ? btn.style.width = 12+dropdownWidth+"px" : btn.style.width = 86+"px");
    dropdown.classList.toggle("ops");
  }

  const Proof = (lstStandart,lstCheck) => {
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

  useEffect(()=>{

  },[years,ages,rates,genres,keys])

  return (
    <main className="main">
      <section className="section section-search">
        <div className="content content_row">
          <input id="search" onChange={(e) => Searhing(e.target.value.toLowerCase())} className="input input-search" type="search" placeholder="Search Movies"></input>
          <div className="dropdown-menu">
            <button id="dropdown-btn-year" onClick={() => dropDown("dropdown-year","dropdown-btn-year")} className="btn dropdown-btn">Years</button>
              <div key="years" id="dropdown-year" className="dropdown hiden">
                <div className="dropdown-year">
                  {Constants.years.map(year => <label key={year.id} id={year.id} className="checkbox"><input onClick={() => setCheckBox(year.id,Number(year.text),"years")} type="checkbox"/><span>{year.text}</span></label>)}
                </div>
              </div>
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-age" onClick={() => dropDown("dropdown-age","dropdown-btn-age")} className="btn dropdown-btn">Ages</button>
              <div key="ages" id="dropdown-age" className="dropdown hiden">
                <div className="dropdown-age">
                  {Constants.ages.map(age => <label key={age.id} id={age.id} className="checkbox"><input onClick={() => setCheckBox(age.id,Number(age.text.split("+")[0]),"ages")} type="checkbox"/><span>{age.text}</span></label>)}
                </div>
              </div>
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-rate" onClick={() => dropDown("dropdown-rate","dropdown-btn-rate")} className="btn dropdown-btn">Rates</button>
              <div key="ages" id="dropdown-rate" className="dropdown hiden">
                <div className="dropdown-rate">
                  {Constants.rates.map(rate => <label key={rate.id} id={rate.id} className="checkbox"><input onClick={() => setCheckBox(rate.id,Number(rate.text),"rates")} type="checkbox"/><span>{rate.text}</span></label>)}
                </div>
              </div>
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-genre" onClick={() => dropDown("dropdown-genre","dropdown-btn-genre")} className="btn dropdown-btn">Genres</button>
            <div key="ages" id="dropdown-genre" className="dropdown hiden">
              <div className="dropdown-genre">
                {Constants.genres.map(genre => <label key={genre.id} id={genre.id} className="checkbox"><input onClick={() => setCheckBox(genre.id,genre.text,"genres")} type="checkbox"/><span>{genre.text}</span></label>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-movies" className="section section-movies">
        <div id="movies" className="content content_row">
          {keys.map(key => Constants.movies.map(movie => (movie.id === key ? <CardMovie key={movie.id} props={movie} /> : "")))}
        </div>
      </section>
    </main>
  );
}

export default Movie;
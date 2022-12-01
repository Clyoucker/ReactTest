import React, { useEffect, useState } from "react";

import Constants from "../components/Constants/Constants";
import CheckBoxLists from "../components/Different/CheckBoxLists";
import ClassCardMovies from "../components/Classes/ClassCardMovies";

const Movie = () => {

  //const [searh,setSearh] = useState(null);
  const [filter,setFilter] = useState([
    {useFilter:false,useSearh:null,useYears:[2018],useAges:[null],useRates:[null],useGenres:[null]},
  ])

  const Searhind = (txt) => {
    setFilter({useSearh:txt})
  }

  useEffect(()=>{

  })

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

  return (
    <main className="main">
      <section className="section section-search">
        <div className="content content_row">
          <input id="search" onChange={(e) => Searhind(e.target.value.toLowerCase())} className="input input-search" type="search" placeholder="Search Movies"></input>
          <div className="dropdown-menu">
            <button id="dropdown-btn-year" onClick={() => dropDown("dropdown-year","dropdown-btn-year")} className="btn dropdown-btn">Years</button>
              <CheckBoxLists props={Constants.years[0]} />
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-age" onClick={() => dropDown("dropdown-age","dropdown-btn-age")} className="btn dropdown-btn">Ages</button>
              <CheckBoxLists props={Constants.ages[0]} />
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-rate" onClick={() => dropDown("dropdown-rate","dropdown-btn-rate")} className="btn dropdown-btn">Rates</button>
              <CheckBoxLists props={Constants.rates[0]} />
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-genre" onClick={() => dropDown("dropdown-genre","dropdown-btn-genre")} className="btn dropdown-btn">Genres</button>
              <CheckBoxLists props={Constants.genres[0]} />
          </div>
        </div>
      </section>
      <section id="section-movies" className="section section-movies">
        <ClassCardMovies props={filter[0]} />
      </section>
    </main>
  );
}

export default Movie;
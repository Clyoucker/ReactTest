import React, { useEffect, useState } from "react";

import Constants from "../components/Constants/Constants";
import CheckBoxLists from "../components/Different/CheckBoxLists";
import ClassCardMovies from "../components/Classes/ClassCardMovies";

const Movie = () => {

  //const [searh,setSearh] = useState(null);
  const [filter,setFilter] = useState([
    {useFilter:false,useSearh:[],useYears:[],useAges:[],useRates:[],useGenres:[]},
  ])

  const Searhind = (txt) => {
    setFilter({useSearh:txt})
  }

  const findIndex = (value,list) => {
    for(let i = 0; i < list.length; i++){
      if(list[i] === value){return i}
    }
  }

  const Checker = () => {
    let checkCount = 5;
    let status = filter[0].useFilter;

    for (let [key, value] of Object.entries(filter[0])) {
      if(value.length === 0){checkCount--}
    }
    (checkCount >= 1 ? status=true : status=false)
    console.log("Filter Used: ",status)
  }

  const setCheckBoxAge = (checkBoxId,value) => {
    const checkBox = document.getElementById(checkBoxId);
    (checkBox.classList.contains("checkbox_active") === true ? checkBox.classList.toggle("checkbox_active") : checkBox.classList.toggle("checkbox_active"));
    if(checkBox.classList.contains("checkbox_active")){
      setFilter({useAges:filter[0].useAges.push(value)})
      //ages.push(value);
    } else {
      let index = findIndex(value,filter[0].useAges);
      (index === 0 ? setFilter({useAges:filter[0].useAges.shift()}) : setFilter({useAges:filter[0].useAges.splice(index,index)}))
      //(index === 0 ? ages.shift()  : ages.splice(index,index));
    }
    Checker()
    console.log("Filter Ages: ",filter[0].useAges)
  }

  const setCheckBoxRate = (checkBoxId,value) => {
    const checkBox = document.getElementById(checkBoxId);
    let rates = filter[0].useRates;
    (checkBox.classList.contains("checkbox_active") === true ? checkBox.classList.toggle("checkbox_active") : checkBox.classList.toggle("checkbox_active"));
    if(checkBox.classList.contains("checkbox_active")){
      rates.push(value);
    } else {
      let index = findIndex(value,rates);
      (index === 0 ? rates.shift()  : rates.splice(index,index));
    }
    Checker()
    console.log("Filter Rates: ",rates)
  }


  useEffect(()=>{
    console.log(filter)
  },[filter])

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
              <CheckBoxLists key="box-list-years" props={Constants.years[0]} />
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-age" onClick={() => dropDown("dropdown-age","dropdown-btn-age")} className="btn dropdown-btn">Ages</button>
              <div key="ages" id="dropdown-age" className="dropdown hiden">
                <div className="dropdown-age">
                  <label id="age-18" className="checkbox">
                    <input onClick={() => setCheckBoxAge("age-18",18)} type="checkbox"/>
                    <span>18+</span>
                  </label>
                  <label id="age-16" className="checkbox">
                    <input onClick={() => setCheckBoxAge("age-16",16)} type="checkbox"/>
                    <span>16+</span>
                  </label>
                  <label id="age-14" className="checkbox">
                    <input onClick={() => setCheckBoxAge("age-14",14)} type="checkbox"/>
                    <span>14+</span>
                  </label>
                </div>
              </div>
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-rate" onClick={() => dropDown("dropdown-rate","dropdown-btn-rate")} className="btn dropdown-btn">Rates</button>
              <div key="ages" id="dropdown-rate" className="dropdown hiden">
                <div className="dropdown-age">
                  <label id="rate-0" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-0",0)} type="checkbox"/>
                    <span>0</span>
                  </label>
                  <label id="rate-1" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-1",1)} type="checkbox"/>
                    <span>1</span>
                  </label>
                  <label id="rate-2" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-2",2)} type="checkbox"/>
                    <span>2</span>
                  </label>
                  <label id="rate-3" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-3",3)} type="checkbox"/>
                    <span>3</span>
                  </label>
                  <label id="rate-4" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-4",4)} type="checkbox"/>
                    <span>4</span>
                  </label>
                  <label id="rate-5" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-5",5)} type="checkbox"/>
                    <span>5</span>
                  </label>
                  <label id="rate-6" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-6",6)} type="checkbox"/>
                    <span>6</span>
                  </label>
                  <label id="rate-7" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-7",7)} type="checkbox"/>
                    <span>7</span>
                  </label>
                  <label id="rate-8" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-8",8)} type="checkbox"/>
                    <span>8</span>
                  </label>
                  <label id="rate-9" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-9",9)} type="checkbox"/>
                    <span>9</span>
                  </label>
                  <label id="rate-10" className="checkbox">
                    <input onClick={() => setCheckBoxRate("rate-10",10)} type="checkbox"/>
                    <span>10</span>
                  </label>
                </div>
              </div>
          </div>
          <div className="dropdown-menu">
            <button id="dropdown-btn-genre" onClick={() => dropDown("dropdown-genre","dropdown-btn-genre")} className="btn dropdown-btn">Genres</button>
              <CheckBoxLists key="check-box-genres" props={Constants.genres[0]} />
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
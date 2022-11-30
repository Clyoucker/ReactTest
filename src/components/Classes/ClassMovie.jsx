import React from "react";

import Genre from "../Different/Genre";

const ClassMovie = ({props}) => {

  if(props.age === 18){
    alert("Внимание, материал предназначен для лиц, старше 18 лет")
  }

  return (
    <div className="movie">
      <div className="preview">
        <div className="card" id={props.id}>
          <div className="card-movie" style={{backgroundImage:`url('${props.poster}')`,backgroundSize:"cover"}}>
            <div className={(props.rate > 8 ? "mini-rate green" : (props.rate > 4 ? "mini-rate yellow" : "mini-rate red"))}>{props.rate}</div>
          </div>
        </div>
        <div className="preview__info">
          <div className="preview__info-titles">
            <h2 className="title movie_eng_title">{props.titleEng}</h2>
            <h2 className="title movie_rus_title">{props.titleRus}</h2>
          </div>
          <div className="episodes"><span className="span">Episodes: </span>{props.episodes !== undefined ? props.episodes : "0/?"}</div>
          <div className="status"><span className="span">Status: </span>{props.status !== undefined ? props.status : "?"}</div>
          <div className="age"><span className="span">Age: </span>{props.age !== undefined ? props.age + "+" : "0+"}</div>
          <div className="genres">
            {props.genres.map(genre => <Genre key={genre} props={genre} />)}
          </div>
        </div>
      </div>
      <div className="descriptions">{props.descriptions}</div>
      <div className="player">
        <div className="player__titles">
          <h2 className="title player_title">{props.titleEng}</h2>
          <h2 className="title player_age">{props.age}+</h2>
        </div>
        <div className="codec">
          <div className="codec__video">
              <iframe title="YouTube video player" src={props.codec} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
          </div>
          <div className="codec__menu">
              <div className="episodes">
                  <div className="episode episode_active">Teaser</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassMovie;
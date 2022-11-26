import React, { useState } from "react";

import Genre from "../Different/Genre";

const CardMovie = ({props})=>{

    const [active,setActive] = useState(false)

    return (
        <div onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)} className="card card-movie" id={props.id} style={{backgroundImage:`url('${props.poster}')`,backgroundSize:"cover"}}>
            <h2 className="title card_title eng_title">{props.titleEng}</h2>
            <div className={active === true ? "card__content visible" : "card__content hiden"}>
                <div className="card__content-top" style={{backgroundImage:`url('${props.bg}')`,backgroundSize:"cover"}}>
                    <h3 className="title card_title rus_title">{props.titleRus}</h3>
                    <h3 className="title age_title">{props.age}+</h3>
                    <h3 className="date">{props.dateRelease}</h3>
                </div>
                <div className="card__content-down">
                    <div className="descriptions">{props.descriptions.length < 256 ? props.descriptions : props.descriptions.slice(0,256)+"[...]"}</div>
                    <div className="genres">
                        {props.genres.map(genre => <Genre key={genre} props={genre} />)}
                    </div>
                    <div className="stars">
                        <div className="stars__container">
                            <div className="star star-inner" style={{width:`${Math.round(props.rate * 10)}%`}}></div>
                            <div className="star star-out"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Math.round(movie.rate * 10)+"%"

export default CardMovie;
import React from "react";
import { Link } from "react-router-dom";

import Genre from "../Different/Genre";

const CardMovie = ({props})=>{

    const basePath = "/Anime/";
    let link = basePath+props.id

    const show = (id) => {
        let section = document.getElementById("movies")
        let card = document.getElementById(id);
        let contents = card.children[1];
        let content = contents.children[0];
        console.log(content)

        let cardWidth = card.clientWidth;

        let xPosContent = content.getBoundingClientRect();
        let xPosWindow = section.getBoundingClientRect();

        card.style.zIndex = "5";
        (xPosContent.right+16 > xPosWindow.right) ? content.style.right = (cardWidth + 24)+"px" :  content.style.left = (cardWidth + 24)+"px";
        (xPosContent.bottom > xPosWindow.bottom) ? content.style.bottom = "0px" : content.style.top = "0px";

        content.classList.remove("hiden");
        content.classList.add("visible");
    }

    const hiden = (id) => {
        let card = document.getElementById(id);
        let contents = card.children[1];
        let content = contents.children[0];
        content.classList.remove("visible");
        content.classList.add("hiden");
        card.style = null;
        content.style = null;
    }


    return (
        <Link id={props.id} to={link} className="card">
            <div className="card-movie" onMouseOver={() => show(props.id)} onMouseOut={() => hiden(props.id)} style={{backgroundImage:`url('${props.poster}')`,backgroundSize:"cover"}}>
                <h2 className="title card-movie_title eng_title">{props.titleEng}</h2>
            </div>
            <div className="card-movie__content">
                <div className="card-movie__content-pc hiden">
                    <div className="card-movie__content-pc__top" style={{backgroundImage:`url('${props.bg}')`,backgroundSize:"cover"}}>
                        <h3 className="title card-movie_title rus_title">{props.titleRus}</h3>
                        <h3 className="title card-movie_age">{props.age}+</h3>
                        <h3 className="date">{props.dateRelease}</h3>
                    </div>
                    <div className="card-movie__content-pc__down">
                        <div className="descriptions">{props.descriptions.length < 256 ? props.descriptions : props.descriptions.slice(0,256)+"[...]"}</div>
                        <div className="episodes"><span className="span">Episodes: </span>{props.episodes !== undefined ? props.episodes : "0/?"}</div>
                        <div className="status"><span className="span">Status: </span>{props.status !== undefined ? props.status : "?"}</div>
                        <div className="genres">{props.genres.map(genre => <Genre key={genre} props={genre} />)}</div>
                        <div className="stars">
                            <div className="stars__container">
                                <div className="star star-inner" style={{width:`${Math.round(props.rate * 10)}%`}}></div>
                                <div className="star star-out"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-movie__content-mobile">
                    <div className={(props.rate > 8 ? "mini-rate green" : (props.rate > 4 ? "mini-rate yellow" : "mini-rate red"))}>{props.rate}</div>
                    <div className="preview__info-titles">
                        <h2 className="title movie_rus_title">{props.titleRus}</h2>
                    </div>
                    <div className="episodes"><span className="span">Episodes: </span>{props.episodes !== undefined ? props.episodes : "0/?"}</div>
                    <div className="status"><span className="span">Status: </span>{props.status !== undefined ? props.status : "?"}</div>
                    <div className="genres">{props.genres.map(genre => <Genre key={genre} props={genre} />)}</div>
                    <div className="descriptions">{props.descriptions.length < 256 ? props.descriptions : props.descriptions.slice(0,256)+"[...]"}</div>
                </div>
            </div>
        </Link>
    )
}

export default CardMovie;
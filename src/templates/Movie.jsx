import React from "react";

import ClassMovie from "../components/Classes/ClassMovie";

import Constants from "../components/Constants/Constants";

const MovieOne = () => {

  const movies = Constants.movies

  let id = Number(window.location.href.split("Anime/")[1])

  return (
    <main className="main">
      <section className="section section-movie">
        <div className="content content_row">
          {movies.map(movie => (movie.id === id ? <ClassMovie key={movie.id} props={movie} /> : ""))}
        </div>
      </section>
    </main>
  )
}

export default MovieOne;
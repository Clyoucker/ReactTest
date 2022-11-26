import React from "react";

import InputSearch from "../components/Modules/InputSearch";
import FilterAge from "../components/Filters/FilterAge";
import ClassCardMovies from "../components/Cards/ClassCardMovies";

const Movie = () => {

  return (
    <main className="main">
      <section className="section section-search">
        <div className="section__content">
          <InputSearch />
          <FilterAge />
        </div>
      </section>
      <section className="section section-movies">
        <div className="section__content">
          <ClassCardMovies />
        </div>
      </section>
    </main>
  );
}

export default Movie;
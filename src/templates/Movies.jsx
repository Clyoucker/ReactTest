import React from "react";

import InputSearch from "../components/Modules/InputSearch";
import FilterAge from "../components/Filters/FilterAge";
import FilterGenres from "../components/Filters/FilterGenres";
import FilterDates from "../components/Filters/FilterDates";
import FilterStatus from "../components/Filters/FilterStatus";
import FilterRates from "../components/Filters/FilterRates";

import ClassCardMovies from "../components/Classes/ClassCardMovies";

const Movie = () => {

  return (
    <main className="main">
      <section className="section section-search">
        <div className="content content_row">
          <InputSearch />
          <FilterDates />
          <FilterStatus />
          <FilterGenres />
          <FilterRates />
          <FilterAge />
        </div>
      </section>
      <section className="section section-movies">
        <ClassCardMovies />
      </section>
    </main>
  );
}

export default Movie;
import React from "react";
import {Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Movies from "./templates/Movies";
import Movie from "./templates/Movie";


function App(){

  return (
    <div className = "wrapper">
      <Header />
        <Routes>
          <Route path="/Anime" element={<Movies />} />
          <Route path="/Anime/1" element={<Movie />} />
          <Route path="/Anime/2" element={<Movie />} />
          <Route path="/Anime/3" element={<Movie />} />
          <Route path="/Anime/4" element={<Movie />} />
          <Route path="/Anime/5" element={<Movie />} />
          <Route path="/Anime/6" element={<Movie />} />
          <Route path="/Anime/7" element={<Movie />} />
          <Route path="/Anime/8" element={<Movie />} />
          <Route path="/Anime/9" element={<Movie />} />
          <Route path="/Anime/10" element={<Movie />} />
          <Route path="/Anime/11" element={<Movie />} />
          <Route path="/Anime/12" element={<Movie />} />
          <Route path="/Anime/13" element={<Movie />} />
          <Route path="/Anime/14" element={<Movie />} />
          <Route path="/Anime/15" element={<Movie />} />
          <Route path="/Anime/16" element={<Movie />} />
          <Route path="/Anime/17" element={<Movie />} />
          <Route path="/Anime/18" element={<Movie />} />
          <Route path="/Anime/19" element={<Movie />} />
          <Route path="/Anime/20" element={<Movie />} />
          <Route path="/Anime/21" element={<Movie />} />
          <Route path="/Anime/22" element={<Movie />} />
          <Route path="/Anime/23" element={<Movie />} />
          <Route path="/Anime/24" element={<Movie />} />
          <Route path="/Anime/25" element={<Movie />} />
          <Route path="/Anime/26" element={<Movie />} />
          <Route path="/Anime/27" element={<Movie />} />
          <Route path="/Anime/28" element={<Movie />} />
          <Route path="/Anime/29" element={<Movie />} />
          <Route path="/Anime/30" element={<Movie />} />
          <Route path="/Anime/31" element={<Movie />} />
          <Route path="/Anime/32" element={<Movie />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

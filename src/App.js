import React from "react";
import {Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./templates/Home";
import Movies from "./templates/Movies";
import Movie from "./templates/Movie";


function App(){

  return (
    <div className = "wrapper">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Anime" element={<Movies />} />
          <Route path="/Anime/:id" element={<Movie />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

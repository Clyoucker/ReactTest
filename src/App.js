import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Movie from "./templates/Movie";
import Evergarden from "./templates/Evergarden";

function App(){
  return (
    <div className = "wrapper">
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/Evergarden" element={<Evergarden />} />
          </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

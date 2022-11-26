import React, { useState } from "react";

import Slider from "../components/Different/Slider";

const Evergarden = () => {

  const movieImages = useState([
    {id:1,title:"helll",src:"https://comicvine.gamespot.com/a/uploads/original/11139/111398688/8042100-9108795038-850dd.jpg"},
    {id:2,title:"Sxxx",src:"https://media.kg-portal.ru/anime/v/violetevergarden/images/violetevergarden_37.jpg"},
    {id:3,title:"jf",src:"https://animesolution.com/wp-content/uploads/2019/12/Violet-Evergarden-09-BD_17.46_2019.12.23_13.30.01.jpg"},
    {id:4,title:"dfh",src:"https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/f56b3174-9eb4-4266-8c5b-6347b8767071/3840x"},
    {id:5,title:"dgd5",src:"https://cdn.myanimelist.net/s/common/uploaded_files/1593390419-911f13b55f3c1825190ff9163fc55324.jpeg"},
  ])

  return (
    <main className="main">
      <section className="section section-movie">
        <div className="section__content">
          <Slider props={movieImages[0]} />
        </div>
      </section>
    </main>
  )
}

export default Evergarden;
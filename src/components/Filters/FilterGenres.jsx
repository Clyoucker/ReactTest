import React from "react";
import Select from "react-select"

const options =[
    {value: "action", label: "Action",},
    {value: "adventure", label: "Adventure",},
    {value: "comedy", label: "Comedy",},
    {value: "drama", label: "Drama",},
    {value: "space", label: "Space",},
    {value: "romance", label: "Romance",},
    {value: "shounen", label: "Shounen",},
    {value: "military", label: "Military",},
    {value: "ecchi", label: "Ecchi",},
    {value: "fantasy", label: "Fantasy",},
    {value: "horror", label: "Horror",},
    {value: "school", label: "School",},
    {value: "thriller", label: "Thriller",},
    {value: "sports", label: "Sports",},
    {value: "shojo", label: "Shojo",},
    {value: "shounen", label: "Shounen",},
    {value: "everyday", label: "Everyday",},
    {value: "seinen", label: "Seinen",},
    {value: "supernatural", label: "Supernatural",},
    {value: "mecha", label: "Mecha",},
    {value: "music", label: "Music",},
    {value: "vampires", label: "Vampires",},
    {value: "harem", label: "Harem",},
    {value: "demons", label: "Demons",},
    {value: "psychological", label: "Psychological",},
    {value: "magic", label: "Magic",},
    {value: "historical", label: "Historical",},
    {value: "police", label: "Police",},
    {value: "parody", label: "Parody",},
    {value: "martial", label: "Martial",},
    {value: "super power", label: "Super Power",},
    {value: "samurai", label: "Samurai",},
    {value: "childish", label: "Childish",},
    {value: "yaoi", label: "Yaoi",},
    {value: "machine", label: "Machine",},
    {value: "madness", label: "Madness",},
    {value: "josei", label: "Josei",},
    {value: "yuri", label: "Yuri",},
    {value: "detective", label: "Detective",},
    {value: "erotica", label: "Erotica",},
    {value: "gourmet", label: "Gourmet",},
    {value: "work", label: "Work",},
    {value: "life", label: "Life",},
]

const FilterGenres = () => {
    return (
        <div className="filter genres-filter">       
            <Select options={options} />     
        </div>
    )
}

export default FilterGenres;
import React from "react";

const Image = ({props})=>{

    return (
        <img className="img" src={props.src} alt={props.title}/>
    )
}

export default Image;
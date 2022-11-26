import React from "react";

import Image from "./Image";

const Slider = ({props})=>{
    return (
        <div class="slider">
            <div class="slider__container">
                <div class="slideshow">
                    {props.map(img => <Image key={img.id} props={img}/>)}
                </div>
            </div>
            <div class="slider__btns">
            </div>
        </div>
    )
}

export default Slider;
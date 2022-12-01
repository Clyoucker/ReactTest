import React from "react";

const CheckBox = ({props})=>{
    return (
        <label id={props.id} className="checkbox">
            <input type="checkbox"/>
            <span>{props.text}</span>
        </label>
    )
}

export default CheckBox;
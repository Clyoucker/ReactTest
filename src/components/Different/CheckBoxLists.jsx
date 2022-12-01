import React from "react";

import CheckBox from "../Modules/CheckBox";

const CheckBoxLists = ({props})=>{

    return (
        <div id={props.classes} className="dropdown hiden">
            <div className={props.classes}>
                {props.labels.map(label => <CheckBox props={label} />)}
            </div>
        </div>
    )
}

export default CheckBoxLists;
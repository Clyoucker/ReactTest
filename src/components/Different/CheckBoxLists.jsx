import React from "react";

import CheckBox from "../Modules/CheckBox";

const CheckBoxLists = ({props})=>{

    return (
        <div key={props.key} id={props.classes} className="dropdown hiden">
            <div className={props.classes}>
                {props.labels.map(label => <CheckBox key={label.id} props={label} />)}
            </div>
        </div>
    )
}

export default CheckBoxLists;
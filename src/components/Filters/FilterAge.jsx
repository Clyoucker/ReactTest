import React from "react";
import Select from "react-select"

const options =[
    {
    value: "0",
    label: "0+",
    },
    {
    value: "6",
    label: "6+",
    },
    {
    value: "14",
    label: "14+",
    },
    {
    value: "16",
    label: "16+",
    },
    {
    value: "18",
    label: "18+",
    },
]

const InputSearch = ()=>{
    return (
        <div>       
            <Select options={options} />     
        </div>
    )
}

export default InputSearch;
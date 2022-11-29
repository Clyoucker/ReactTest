import React from "react";
import Select from "react-select"

const options =[
    {value: "planned", label: "Planned",},
    {value: "ongoing", label: "Ongoing",},
    {value: "finished", label: "Finished",},
]

const FilterStatus = () => {
    return (
        <div className="filter status-filter">       
            <Select options={options} />     
        </div>
    )
}

export default FilterStatus;
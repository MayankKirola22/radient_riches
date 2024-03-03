import { useState } from "react";
import "./Dropdown.css";

export default function Dropdown(){
    const options = [
        'one', 'two', 'three'
      ];
    const defaultOption=options[0];
    const [selectedOption,setSelectedOption]=useState(defaultOption)

    return(
        <div className="Dropdown">
            <Dropdown options={options} onChange={setSelectedOption} value={selectedOption} placeholder="Select an option" />
        </div>
    )
}
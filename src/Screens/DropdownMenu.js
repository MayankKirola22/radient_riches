import { useState } from "react";
import "./DropdownMenu.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default function DropdownMenu(){
    const options = [{value:"Apple",label:'Apple'},{value:"Orange",label:'Orange'},{value:"Banana",label:'Banana'}];
    const data=[{heading:"Apple",img:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Pink_lady_and_cross_section.jpg",body:"An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples have been grown for thousands of years in Asia and Europe and were introduced to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition."},
                {heading:"Orange",img:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Oranges_-_whole-halved-segment.jpg",body:"The orange originated in a region encompassing Southern China, Northeast India, and Myanmar,[5][6] and the earliest mention of the sweet orange was in Chinese literature in 314 BC.[2] As of 1987, orange trees were found to be the most cultivated fruit tree in the world.[7] Orange trees are widely grown in tropical and subtropical climates for their sweet fruit. The fruit of the orange tree can be eaten fresh, or processed for its juice or fragrant peel.[8] As of 2012, sweet oranges accounted for approximately 70% of citrus production."},             
                {heading:"Banana",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Banana_and_cross_section.jpg/1600px-Banana_and_cross_section.jpg",body:"A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called \"plantains\", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow upward in clusters near the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used."}
            ]
    const defaultOption = options[0];
    const [selectedOption,setSelectedOption]=useState(defaultOption);
    const selectedData=data.filter(option=>option.heading===selectedOption.value)[0]
    
    return(
        <div className="DropdownMenu">
            <Dropdown  options={options} onChange={setSelectedOption} value={selectedOption} placeholder="Select an option" />
            <h1>{selectedData.heading}</h1>
            <hr/>
            <img style={{objectFit:'contain',height:"300px"}} src={selectedData.img} alt='fruit'/>
            <hr/>
            {selectedData.body}
        </div>
    )
}
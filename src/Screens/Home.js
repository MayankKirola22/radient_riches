import tick from "../Resources/Images/tick.png";
import info from "../Resources/Images/info.png";
import down from "../Resources/Images/down.png";
import right from "../Resources/Images/right.png";
import "./Home.css";
import { useState } from "react";
import WebBuilder from "../Components/WebBuilder";
import WebBuilderCompact from "../Components/WebBuilderCompact";

export default function Home({BuilderInfo,BuilderCompact}){
    let lastUpdated = "Feburary 22, 2020";
    let disclosure="Advertisement Disclosure";
    const [sort,setSort]=useState("Top Relevent");
    const [path,setPath]=useState(["Hosting for all","Hosting","Hosting6","Hosting5"]);

    return(
        <div id="Home">
            <div className="heading">Best Website builders in the US</div>
            <hr color="#E1E4E6"/>
            <div>
                <div className="metaData">
                <div style={{display:'flex'}}>
                    <div id="lastUpdated" className="metaClass" >
                        <img src={tick} alt="tick" className="metaLogo"/>
                        <div>Last Updated - {lastUpdated}</div>
                    </div>
                    {disclosure!==null?
                    <div id="disclosure" className="metaClass">
                        <img src={info} alt='info' className="metaLogo"/>
                        <div>{disclosure}</div>
                    </div>:null} 
                    </div>
                    <div id='sort' className="metaClass">
                        <div>{sort}</div>
                        <img src={down} alt='down'/>
                    </div>
                </div>
            </div>
            <hr color="#E1E4E6"/>
            <div className="services">
                <div className="service">Tools</div>
                <div className="service">AWS Builder</div>
                <div className="service">Start Build</div>
                <div className="service">Build Supplies</div>
                <div className="service">Tooling</div>
                <div className="service">BlueHosting</div>
            </div>
            <div className="path">
                <div className="branch">Home</div>
                {path.map((branch)=>(    
                    <div className="branch">
                        <img src={right} alt='right' id='pathLogo'/>
                        <div>{branch}</div>
                    </div>
                ))}
            </div>
            <div id="buildersMain">
                {BuilderInfo.map((builder)=>(
                    <WebBuilder Builder={builder}/>
                ))}
            </div>
            <div className="subHeading">Related deals you might like for</div>
            <div className="buildersCompact">
                {BuilderCompact.map((builder)=>(
                    <WebBuilderCompact Builder={builder}/>
                ))}
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div className="subHeading">Sign up and get exclusive special deals. </div>
                <div className="email" style={{display:'flex'}}><input type="email" className="emailInput"/><div className="SignUpButton">Sign Up</div></div>
            </div>
        </div>
    )
}
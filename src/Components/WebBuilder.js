import "./WebBuilder.css";
import builderImg from "../Resources/Images/BuilderImage.png";
import fullStar from "../Resources/Images/FullStar.png";
import halfStar from "../Resources/Images/HalfStar.png";
import emptyStar from "../Resources/Images/EmptyStar.png";
import blueDown from "../Resources/Images/BlueDown.png";
import blueTick from "../Resources/Images/Bluetick.png";
import trophy from "../Resources/Images/trophy.png";
import diamond from "../Resources/Images/diamond.png";

export default function WebBuilder({Builder}){
    return(
        <div id="WebBuilder">
            <div>
                {Builder.tag!==undefined?Builder.tag===1?
                <div className="tag"><img src={trophy} alt="trophy" className="tagLogo"/><div>Best Choice</div></div>:Builder.tag===2?
                <div className="tag"><img src={diamond} alt="diamond" className="tagLogo" />Best Value</div>:null:null}
                <div id="sno">{Builder.id}</div>
                <img src={builderImg} id="builderImg" alt="Builder Img"/>
                {Builder.imgCaption}
            </div>
            <div className="builderContent">
                <p><font id='builderHead'>{Builder.heading}</font><font>- {Builder.intro}</font></p>
                <div className="deals">
                    {Builder.deals!==undefined?Builder.deals.map((deal)=>(
                        <div className="deal">{deal}</div>
                    )):null}
                </div>
                <b style={{color:"#2C384A"}}>Main highlights</b>
                {typeof Builder.mainHighlights!=="object"?<p style={{marginLeft:'20px'}}>{Builder.mainHighlights}</p>:
                <div className="featureBlock">
                        {Builder.mainHighlights.features.map((feature,index)=>(
                            <div style={{display:'flex',margin:'10px',alignItems:'center'}}><div className="featureRate">{Builder.mainHighlights.values[index]}</div> {feature}</div>
                        ))}
                </div>}
                {Builder.whyWeLove!==undefined?
                <div style={{margin:'10px 0px'}}>
                    <p>Why we love it</p>
                    {Builder.whyWeLove.True.map((point)=>(
                        <div id='point'>
                            <img style={{margin:'5px'}} src={blueTick} alt='blue tick'/>
                            {point}
                        </div>
                    ))}
                </div>:null}
                <div style={{color:'#1B88F4',alignContent:'center',display:'flex'}}>Show More<img src={blueDown} style={{position:'relative',top:"2px",padding:'0px 5px'}} alt="down"/></div>
            </div>
            <div className="builderVisual">
                <div className="rateBlock">
                    <div style={{fontSize:'32px'}}>{Builder.rating}</div>
                    <div style={{fontSize:'14px',margin:'10px'}}>{Builder.remark}</div>
                    <div className="stars">
                    {Array.apply(null,Array(Math.floor(Builder.stars))).map(()=>(
                        <img src={fullStar} alt="fullStar"/> 
                    ))}
                    {Builder.stars%1!==0?<img src={halfStar} alt="halfStar"/>:null}
                    {Array.apply(null,Array(5-Math.ceil(Builder.stars))).map(()=>(
                        <img src={emptyStar} alt="emptyStar"/>
                    ))}
                    </div>
                </div>
                <div id="ViewButton">View</div>
            </div>
        </div>
    )
}
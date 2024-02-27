import builderImg from "../Resources/Images/BuilderImage.png";
import "./WebBuilderCompact.css"

export default function WebBuilderCompact({Builder}){
    return(
        <div id="WebBuilderCompact">
            <img src={builderImg} id="builderImg" alt="Builder Img"/>
            <div className="deals">
                {Builder.deals!==undefined?Builder.deals.map((deal)=>(
                    <div className="deal">{deal}</div>
                )):null}
            </div>
            <div style={{color:'#626E79'}}>
                <p><font id='builderHead'>{Builder.heading}</font></p>
                <p style={{textAlign:'left'}}>{Builder.Caption}</p>
            </div>
            <div className="price" style={{display:'flex',alignItems:'end'}}>
                <div className="discounted" style={{color:'#5C6874',fontSize:"20px",margin:'5px'}}>${Math.floor(((100-Builder.discount)/100)*Builder.price*100)/100}</div>
                <div className="actual" style={{color:'#9FA9B3',fontSize:"14px",margin:'5px'}}><del>${Builder.price}</del></div>
                <div className="discount" style={{color:'#EF4C5D',fontSize:"13px",margin:'5px'}}>({Builder.discount}% off)</div>
            </div>
            <div id="ViewButtonCompact">View Deal</div>
        </div>
    )
}
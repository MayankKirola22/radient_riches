import "./Footer.css"
import whiteDown from "../Resources/Images/whiteDown.png";

export default function Footer({country,setCountry}){
    return(
        <div id="Footer">
            <div className="flex options">
                <div className="footerBlock">
                    <div className="footerHead">CATEGORIES</div>
                    <div className="footerOptions">
                        <div>Web Builder</div>
                        <div>Hosting</div>
                        <div>Data Center</div>
                        <div>Robotic-Automation</div>
                    </div>
                </div>
                <div className="footerBlock">
                    <div className="footerHead">CONTACT</div>
                    <div className="footerOptions">
                        <div>Contact</div>
                        <div>Privacy Policy</div>
                        <div>Terms Of Service</div>
                        <div>Categories</div>
                        <div>About</div>
                    </div>
                </div>
            </div>
            <div className="country" >{country}<img src={whiteDown} id='whiteDown' alt="down" /></div>
        </div>
    )
}
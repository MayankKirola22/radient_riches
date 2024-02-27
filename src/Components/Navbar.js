import "./Navbar.css"
import searchLogo from "../Resources/Images/SearchIcon.png"
export default function Navbar(){
    return(
        <div id="Navbar">
            <div className="searchInput">
                <img src={searchLogo} id='searchLogo' alt="searchLogo"/>
                <input id="search"/>
            </div>
            <div className="navOptions">
                <div className="navOption">Categories</div>
                <div className="navOption">Website Builders</div>
                <div className="navOption">Today's deals</div>
            </div>
        </div>
    )
}
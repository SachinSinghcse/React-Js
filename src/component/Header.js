import { LOGO_URL } from "../utils/constant";


const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} height="120px" width="200px"></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                     <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Card</li>
                </ul>
            </div>
        </div> 
    )
};

export default Header;
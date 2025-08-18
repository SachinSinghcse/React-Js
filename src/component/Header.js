import { useState } from "react";
import { LOGO_URL } from "../utils/constant";


const Header = () => {
    // let btnname="login"
    const [val, setval] = useState("login")
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
                    <button className="login-btn" onClick={() => {
                    return val==='login'? setval('logout'):'login'
                     console.log(val)   
                    }
                    }>
                        {val}
                    </button>

                   </ul>
            </div>
        </div>
    )
};

export default Header;
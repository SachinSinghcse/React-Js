import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";   


const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://as1.ftcdn.net/jpg/03/36/15/36/1000_F_336153688_4Yc0xXYZbjGWZpzp2hTKSqkxTvT1hetb.jpg" height="120px" width="200px"></img>
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
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">
        Search
            </div>
            <div className="res-container">
                <RestaurentCard resName="Meghna Food" cuisine="Biryni,north infidan "/>
                <RestaurentCard resName="KFC" cuisine="burger ,fast food"/>
                <RestaurentCard/>
                <RestaurentCard/>
      
            </div>
        </div>
    )
}
const styleCard={
    backgroundColor:"white"
}
const RestaurentCard=( props)=>{
    console.log(props)
    return(
        <div className="res-card" style={styleCard }>
            <img className="img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/47383757E.png"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 star</h4>
            <h4>38 min</h4>

        </div>
    )
}


const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>  
        </div>

    )
}

 

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
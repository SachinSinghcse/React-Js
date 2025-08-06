import RestaurentCard from "./RestaurentCard";
import restaurantList  from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body=()=>{
    const [resList,setResList]=useState(restaurantList);

    // useEffect(()=>{
    //     console.log("useeffect called")
    // },[])
    useEffect(()=>{
        fetchData();
         
    },[])
//fetch return promise
    const fetchData= async ()=>{
     
        const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json,"sa")
    }

  

    return(
        <div className="body">
            <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filterRes=resList.filter((res)=>{
                return res.info.avgRating>5

            });
            setResList(filterRes);

        } }>
            Top Rated Restaurent</button> 
            </div>
            <div className="res-container">
             { resList.map((res)=>
             ( <RestaurentCard key={res.info.id} resName={res}/>
             )        
              )
            }
                {/* <RestaurentCard resName={restaurantList}/> */}
            </div>
        </div>
    )
}
export default Body
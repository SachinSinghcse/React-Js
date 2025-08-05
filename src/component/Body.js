import RestaurentCard from "./RestaurentCard";
import restaurantList  from "../utils/mockdata";
import { useState } from "react";

const Body=()=>{
    const [resList,setResList]=useState(restaurantList);
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
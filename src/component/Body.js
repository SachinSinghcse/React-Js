import RestaurentCard from "./RestaurentCard";
import restaurantList  from "../utils/mockdata";

const Body=()=>{
    return(
        <div className="body">
            <div className="search">
        Search 
            </div>
            <div className="res-container">
             { restaurantList.map((res)=>

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
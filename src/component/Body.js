import RestaurentCard from "./RestaurentCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [value, setValue] = useState(0);
  const [searchValue,setSearchValue]=useState("")

  // useEffect(()=>{
  //     console.log("useeffect called")
  // },[])
  useEffect(() => {
    fetchData();
  }, []);

  //fetch return promise
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json, "sa");
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(resList, "newvalueeeeeeeeeeeeeeeeeee");
  };

  const getTopRated = () => {
    const filterData = resList.filter((res) => {
      return res.info.avgRating >= 5;
    });
    console.log(filterData, "asdsd");
    setResList(filterData);
  };
  // const search =async ()=>{
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=21.99740&lng=79.00110&str=nas&trackingId=undefined&submitAction=ENTER&queryUniqueId=a68253db-b48f-ac22-14d1-db5eec9e731c");
  //   console.log(data,"singham")
  // }
  // if(resList.length==0){
  //     return <Shimmer></Shimmer>
  // }
  return resList?.length == 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div>
        <button onClick={() => setValue(value + 1)}>increment</button>
        <button
          onClick={() => {
            if (value > 0) {
              setValue(value - 1);
            }
          }}
        >
          Decrement
        </button>
        value: {value}
      </div>
      <div className="filter">
        <div className="">
          <input type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}></input>
          <p>Value{searchValue}</p>
          <button onClick={()=>{
            let filterData=resList.filter((res)=>res.info.name.toLowerCase().includes(searchValue.toLowerCase()))
            
            console.log(filterData,"fghgfghgfgh")
            setResList(filterData)
            console.log("search value is this", resList)
          }}>Search</button>
          
        </div>
        <button
          className="filter-btn"
          onClick={getTopRated}


          // const filterRes = resList.filter((res) => {

          //     return res.info.avgRating > 5

          // });
          // {console.log(resList,"filtercalled")}
          // resList.filter((res)=>setResList(res.info.avgRating))
          // setResList(filterRes);
          // console.log("filter res",filterRes)
        >
          Top Rated Restaurent
        </button>
        {/* <button onClick={getTopRated}> Abc</button> */}
      </div>
      <div className="res-container">
        {resList?.map((res) => (
          <RestaurentCard key={res.info.id} resName={res} />
        ))}
      </div>
    </div>
  );
  // return(

  //     <div className="body">
  //           <div>
  //             <button onClick={()=>setValue(value+1)}>increment</button>
  //             <button onClick={()=>{
  //                 if(value>0){
  //                 setValue(value-1)}}}>Decrement</button>

  //             value: {value}
  //         </div>
  //         <div className="filter">
  //     <button className="filter-btn" onClick={()=>{
  //         const filterRes=resList.filter((res)=>{
  //             return res.info.avgRating>5

  //         });
  //         setResList(filterRes);

  //     } }>
  //         Top Rated Restaurent</button>
  //         </div>
  //         <div className="res-container">
  //          { resList.map((res)=>
  //          ( <RestaurentCard key={res.info.id} resName={res}/>
  //          )
  //           )
  //         }
  //             {/* <RestaurentCard resName={restaurantList}/> */}
  //         </div>

  //     </div>
  // )
};
export default Body;

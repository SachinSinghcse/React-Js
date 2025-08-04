import { CDN_URL } from "../utils/constant";
const styleCard={
    backgroundColor:"white"
} 
const RestaurentCard=( props)=>{
    console.log(props)
    const {resName}=props
    // const [resName] =props
        return(
        <div className="res-card" style={styleCard }>
            <img className="img"   src={ 
        CDN_URL +
          resName.info.cloudinaryImageId
        }></img>
            <h3>{resName.info.name}</h3>
            <h4>{resName.info.cuisines.join(" , ")}</h4>
            <span>{resName.info.avgRating}</span>
            <h4>{resName.info.costForTwo}</h4>
            <h4>{resName.info.deliveryTime} mins</h4>
          

        </div>
    )
}
export default RestaurentCard
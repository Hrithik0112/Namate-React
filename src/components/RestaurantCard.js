import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name , cloudinaryImageId , costForTwo , deliveryTime , cuisines}) => {
    return (
        <div className="w-52 p-2 m-4 border border-black ">
            <img className="w-48" src={IMG_CDN_URL+
            cloudinaryImageId} />
            <h2 className="font-bold">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4 className="font-bold bg-green-400">{costForTwo/100}rs   
            -----  {deliveryTime} min</h4>
            
        </div>
    )
}

export default RestaurantCard;
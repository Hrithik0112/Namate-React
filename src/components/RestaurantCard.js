import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name , cloudinaryImageId , costForTwo , deliveryTime , cuisines}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL+
            cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{costForTwo/100}rs   
            -----  {deliveryTime} min</h4>
            
        </div>
    )
}

export default RestaurantCard;
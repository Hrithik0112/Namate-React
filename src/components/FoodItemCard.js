import { IMG_CDN_URL } from "../constants";

const FoodItemCard = ({name , imageId , price , description }) => {
    return (
        <div className="w-52 p-2 m-4 border border-black ">
            <img className="w-48" src={IMG_CDN_URL+
            imageId} />
            <h2 className="font-bold">{name}</h2>
            <h3 className="font-semibold">{description}</h3>
            <h4 className="font-bold bg-green-400">{price/100}rs</h4>   
            
        </div>
    )
}

export default FoodItemCard;
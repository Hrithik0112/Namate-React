import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITEM_IMG_CDN_URL, SWIGGY_MENU_URL, RESTAURANT_TYPE_KEY } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const [restaurant, setRestauraunt] = useState(null);

    useEffect(()=> {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data = await fetch (SWIGGY_MENU_URL + resId);
        const json = await data.json();
        console.log(json.data);
        // const restaurantData = json?.data?.cards?.map(x => x.card)?.
        //                      find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestauraunt(json.data);
    }
    // IMPORTANT PAT " restaurant?.cards[0]?.card?.card?.info"

    // const {name , costForTwoMessage , avgRating , city , areaName , cloudinaryImageId} =
    // restaurant?.cards[0]?.card?.card?.info ;

    // destructring and checking if any variable is empty assign it null value
    const {name, city , costForTwoMessage , avgRating , areaName ,cloudinaryImageId} = 
    restaurant?.cards[0]?.card?.card?.info ?? '' ;


    //for menu
    const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? '' ;

    console.log(itemCards);
   
    return  (
        <div className="menu">
            <div className="res-details">
                <h1>Restraunt id: {resId}</h1>
                <h2>{name}</h2>
                <img src={ITEM_IMG_CDN_URL + cloudinaryImageId} />
                <h4>{areaName}</h4>
                <h3>{city}</h3>
                <h3>{avgRating} stars</h3>
                <h3>{costForTwoMessage}</h3>
            </div>
            
            <div >
                <h2 className="menu-title">Menu</h2>
                <ul className="menu-list">
                    {itemCards && itemCards.map((item) => (
                    <li key={item.card.info.id}>
                    {item.card.info.name} -{" Rs."}
                     {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                     ))}
                    
                </ul>
            </div>
        </div>
    )

}

export default RestaurantMenu;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITEM_IMG_CDN_URL, SWIGGY_MENU_URL, RESTAURANT_TYPE_KEY, IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const restaurant = useRestaurant(resId);
    

    // IMPORTANT PAT " restaurant?.cards[0]?.card?.card?.info"
    // const {name , costForTwoMessage , avgRating , city , areaName , cloudinaryImageId} =
    // restaurant?.cards[0]?.card?.card?.info ;

    // destructring and checking if any variable is empty assign it null value
    const {name, city , costForTwoMessage , avgRating , areaName ,cloudinaryImageId} = 
    restaurant?.cards[0]?.card?.card?.info ?? '' ;


    //for menu
    const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? '' ;

    // console.log(itemCards);

    return !restaurant ? (
        <Shimmer/>
    ) : (
        <div className="">
            <div className="flex">
                <h1>Restraunt id: {resId}</h1>
                <h2>{name}</h2>
                <img className="w-96  h-72 border  border-black p-3  m-3 rounded-md " src={IMG_CDN_URL + cloudinaryImageId} />
                    <div className="flex flex-col p-4 m-4">
                        <h4 className="font-semibold text-3xl text-orange-500">{areaName}</h4>
                        <h3 className="font-semibold text-xl mt-3">City : {city}</h3>
                        <h3 className="font-semibold text-xl mt-3">Rating :{avgRating} stars</h3>
                        <h3 className="mt-3 italic font-semibold">{costForTwoMessage}</h3>
                    </div>
            </div>
            
            <div >
                <h2 className="font-bold text-5xl bg-red-500 text-white inline-block p-2 m-3 ">Menu</h2>
                <ul className="menu-list">
                    {itemCards && itemCards.map((item) => (
                    <li className="font-bold" key={item.card.info.id}>
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
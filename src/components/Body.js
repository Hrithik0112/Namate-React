import RestaurantCard from "./RestaurantCard";

import { restaurantList } from "../constants";
import { useState } from "react";


const Body = () => {


    function filterData(searchInput, restaurants) {
        const filterData = restaurants.filter((restaurant) =>
          restaurant.data.name.includes(searchInput)
        );
      
        return filterData;
      }

    const [searchInput, setSearchInput] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
            <div className="search-container">
                <input type="text" 
                className="search-text" 
                placeholder="Search" 
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}    
                />
                <button className="search-btn" 
                onClick={() => {
                    const data = filterData(searchInput , restaurants);
                    setRestaurants(data);
                    console.log(data);
                }}
                >Search</button>
            </div>
            <div className="list">
                {restaurants.map((restaurant) => {
                return <RestaurantCard  {...restaurant.data} key={restaurant.data.id}/>
             })}
            
            </div>
        </>
    )
};

export default Body;
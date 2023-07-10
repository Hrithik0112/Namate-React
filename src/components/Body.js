import RestaurantCard from "./RestaurantCard";

import { restaurantList } from "../constants";
import { useState } from "react";


const Body = () => {


    function filterData(searchInput , restaurents){
        
       const filterData = restaurents.filter((restaurant) =>
       restaurant.data.name.includes(searchInput)
        );
        return filterData;
        
    };

    const [searchInput, setSearchInput] = useState();
    const [restaurents, setRestaurents] = useState(restaurantList);
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
                    const data = filterData(searchInput , restaurents);
                    setRestaurents(data);
                    console.log(data);
                }}
                >Search</button>
            </div>
            <div className="list">
                {restaurantList.map((restaurant) => {
                return <RestaurantCard  {...restaurant.data} key={restaurant.data.id}/>
             })}
            
            </div>
        </>
    )
};

export default Body;
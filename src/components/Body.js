import RestaurantCard from "./RestaurantCard";

import { restaurantList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {


    function filterData(searchInput, restaurants) {
        const filterData = restaurants.filter((restaurant) =>
          restaurant.data.name?.toLowerCase()?.includes(searchInput.toLowerCase())
        );
      
        return filterData;
      }

    const [searchInput, setSearchInput] = useState("");
    const [fillteredRestaurants, setFillteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);
    
    async function getRestaurants(){
        const data = await fetch (
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572645&lng=88.363892&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json); 
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);   
        setFillteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);   
    }

//  early retunrn
    if(!allRestaurants){
        return null;
    }

    if(fillteredRestaurants.length === 0){
        return <h1>Sorry . Not Found</h1>
    }
    // conditional rendering 
    // shimmer ui effect while there is no data


    return (allRestaurants.length === 0) ? <Shimmer/> : (
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
                    const data = filterData(searchInput , allRestaurants);
                    setFillteredRestaurants(data);
                    console.log(data);
                }}
                >Search</button>
            </div>
            <div className="list">
                {fillteredRestaurants.map((restaurant) => {
                return <RestaurantCard  {...restaurant.data} key={restaurant.data.id}/>
             })}
            
            </div>
        </>
    )
};

export default Body;
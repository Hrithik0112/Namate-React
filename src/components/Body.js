import RestaurantCard from "./RestaurantCard";

import { SWIGGY_RESTAURANT_URL, restaurantList } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";


const Body = () => {


    const [searchInput, setSearchInput] = useState("");
    const [fillteredRestaurants, setFillteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    useEffect(() => {


        getRestaurants();
    }, []);
    
    async function getRestaurants(){
        const data = await fetch (SWIGGY_RESTAURANT_URL);
        const json = await data.json();
        // console.log(json); 
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);   
        setFillteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);   
    }

//  early retunrn
    if(!allRestaurants){
        return null;
    }

    // if(fillteredRestaurants.length === 0){
    //     return <h1>Sorry . Not Found</h1>
    // }
    // conditional rendering 
    // shimmer ui effect while there is no data


    return (allRestaurants.length === 0) ? <Shimmer/> : (
        <>
            <div className="p-5 m-2 bg-orange-100">
                <input type="text" 
                className="search-text" 
                placeholder="Search" 
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}    
                />
                <button className="p-2 m-2 bg-orange-600 text-white" 
                onClick={() => {
                    const data = filterData(searchInput , allRestaurants);
                    setFillteredRestaurants(data);
                    console.log(data);
                }}
                >Search</button>
            </div>
            <div className="flex flex-wrap">
                {fillteredRestaurants.map((restaurant) => {
                return (
                    <Link to={"/restaurant/" + restaurant.data.id} 
                    key={restaurant.data.id}>
                    <RestaurantCard  {...restaurant.data} />
                    </Link>
                );
             })}
            
            </div>
        </>
    )
};

export default Body;
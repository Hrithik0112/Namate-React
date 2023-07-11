import { useState } from "react";


const useRestaurant = (resId) => {
    const [restaurant, setRestauraunt] = useState(null);

    // get data from api
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
     //return restaurant data
    
    return restaurant;
}

export default useRestaurant;
import {
  useState,
  useEffect,
} from "react";

import { SWIGGY_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] =
    useState([]);
  const [
    restaurantmenu,
    setRestaurantmenu,
  ] = useState([]);

  // get data from api
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      SWIGGY_MENU_URL + resId
    );
    const json = await data.json();
    // console.log(json.data);
    // const restaurantData = json?.data?.cards?.map(x => x.card)?.
    //                      find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
    //   setRestauraunt(json.data);
    setRestauraunt(
      json?.data?.cards[0]?.card?.card
        ?.info
    );

    const menu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (e) => {
          if (e?.card?.card?.title) {
            return true;
          }
        }
      );

    setRestaurantmenu(menu);
  }
  //return restaurant data

  return [restaurant, restaurantmenu];

  return restaurant;
};

export default useRestaurant;

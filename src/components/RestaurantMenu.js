import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import ResMenuDetails from "./ResMenuDetails";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //   const restaurant =
  //     useRestaurant(resId);

  const [restaurant, restaurantmenu] =
    useRestaurant(resId);

  // IMPORTANT PAT " restaurant?.cards[0]?.card?.card?.info"
  // const {name , costForTwoMessage , avgRating , city , areaName , cloudinaryImageId} =
  // restaurant?.cards[0]?.card?.card?.info ;

  // destructring and checking if any variable is empty assign it null value
  //   const {
  //     name,
  //     city,
  //     costForTwoMessage,
  //     avgRating,
  //     areaName,
  //     cloudinaryImageId,
  //   } =
  //     restaurant?.cards[0]?.card?.card
  //       ?.info ?? "";

  //for menu
  //   const { itemCards } =
  //     restaurant?.cards[2]?.groupedCard
  //       ?.cardGroupMap?.REGULAR?.cards[1]
  //       ?.card?.card ?? "";

  // console.log(itemCards);
  if (restaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex">
        {/* <h1>Restraunt id: {resId}</h1> */}
        <h2>{restaurant?.name}</h2>
        <img
          className="w-96  h-72 border  border-black p-3  m-3 rounded-md "
          src={
            IMG_CDN_URL +
            restaurant?.cloudinaryImageId
          }
        />
        <div className="flex flex-col p-4 m-4">
          <h4 className="font-semibold text-3xl text-orange-500">
            {restaurant?.areaName}
          </h4>
          <h3 className="font-semibold text-xl mt-3">
            City : {restaurant?.city}
          </h3>
          <h3 className="font-semibold text-xl mt-3">
            Rating :
            {restaurant?.avgRating}{" "}
            stars
          </h3>
          <h3 className="mt-3 italic font-semibold">
            {
              restaurant?.costForTwoMessage
            }
          </h3>
        </div>
      </div>

      <div data-testid="menu-list">
        <h2 className="font-bold text-5xl bg-red-500 text-white inline-block p-2 m-3 ">
          Restaurant Menu :
        </h2>
        <div className="flex flex-wrap">
          {restaurantmenu?.map((e) => {
            // console.log(e?.card?.card?.title)
            return e?.card?.card?.itemCards?.map(
              (ele) => {
                // console.log(ele?.card?.info?.name)
                return (
                  <ResMenuDetails
                    info={
                      ele?.card?.info
                    }
                    key={
                      ele?.card?.info
                        ?.id
                    }
                  />
                );
              }
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

/**
 * {restaurantMenu?.map(() => {
          return itemCards?.map(
            (item) => {
              return (
                <ResMenuDetails
                  info={
                    item?.card?.info
                  }
                  key={
                    item?.card?.info?.id
                  }
                />
              );
            }
          );
        })}
 */

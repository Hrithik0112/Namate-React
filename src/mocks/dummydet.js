import { useParams } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetail = () => {
  const { id: restaurantId } =
    useParams();
  const [
    restaurantInfo,
    restaurantMenu,
  ] = useRestaurantMenu(restaurantId);

  if (restaurantInfo.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="w-[1024px] mx-auto mt-6">
      <div className="bg-gray-50 p-6  shadow-md">
        <h2 className="text-orange-600 text-2xl font-medium">
          {restaurantInfo?.name}
        </h2>
        <h3 className="pb-2">
          {restaurantInfo?.locality +
            ", " +
            restaurantInfo?.city}
        </h3>
        <h4 className="text-sm">
          {restaurantInfo?.cuisines?.join(
            ", "
          )}
        </h4>
        <p className="text-gray-700 text-sm">
          {
            restaurantInfo?.costForTwoMessage
          }
        </p>
      </div>

      <div
        data-testid="menu"
        className="my-4 p-4"
      >
        <h2 className="text-gray-700 text-lg font-semibold">
          Restaurant Menu
        </h2>
        {restaurantMenu?.map((e) => {
          // console.log(e?.card?.card?.title)
          return e?.card?.card?.itemCards?.map(
            (ele) => {
              // console.log(ele?.card?.info?.name)
              return (
                <RestaurantMenu
                  info={ele?.card?.info}
                  key={
                    ele?.card?.info?.id
                  }
                />
              );
            }
          );
        })}
      </div>
    </div>
  );
};

// export default RestaurantDetail;

endddddddddddddddddddd;

import { CLOUDINARY_CDN_LINK } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = (props) => {
  // console.log(props)
  // console.log(props.info)
  // console.log(props.info.name)

  const dispatch = useDispatch();

  const handleAddItem = (foodItem) => {
    // dispatch(addItem("grapes"))
    dispatch(addItem(foodItem));
  };

  return (
    <div className="border-b my-4 px-3 pt-3 pb-5 flex justify-between items-center">
      <div>
        <h2 className="text-orange-500 text-md">
          {props?.info?.name}
        </h2>
        <h3 className="text-gray-800">
          {props?.info?.category}
        </h3>
        <h4 className="text-gray-900 text-sm">
          {"Rs " +
            props?.info?.price / 100 +
            "/-"}
        </h4>
      </div>
      <div className="relative">
        <img
          className="w-28 rounded-md"
          src={
            CLOUDINARY_CDN_LINK +
            props?.info?.imageId
          }
          alt={props?.info?.name}
        />
        <button
          data-testid="add-btn"
          onClick={() =>
            handleAddItem(props)
          }
          className="px-4 py-1 rounded-md bg-white border hover:bg-orange-100 absolute z-10 bottom-[-5] left-[25%] shadow-md"
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  );
};

// export default RestaurantMenu;

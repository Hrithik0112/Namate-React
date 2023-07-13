import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { additem } from "../utils/cartSlice";

const ResMenuDetails = (props) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(additem(item));
  };

  return (
    <div className="p-3 m-2 border border-black w-48">
      <div>
        <h2 className="text-orange-500 text-md font-bold">
          {props?.info?.name}
        </h2>
        <h3 className="text-gray-800 bg-yellow-500 ">
          {props?.info?.category}
        </h3>
        <h4 className="text-gray-900 text-sm">
          {"Rs " +
            props?.info?.price / 100 +
            "/-"}
        </h4>
      </div>

      <div>
        <img
          className="w-36 rounded-md hover:scale-150"
          src={
            IMG_CDN_URL +
            props?.info?.imageId
          }
          alt={props?.info?.name}
        />
        <button
          data-testid="add-btn"
          onClick={() =>
            handleAddItem(props)
          }
          className="px-4 py-1 rounded-md bg-white border shadow-md hover:bg-green-500"
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  );
};

export default ResMenuDetails;

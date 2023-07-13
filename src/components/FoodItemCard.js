import { IMG_CDN_URL } from "../constants";

//({name , imageId , price , description })

const FoodItemCard = (props) => {
  return (
    <div className="w-52 p-2 m-4 border border-black ">
      <img
        className="w-48"
        src={
          IMG_CDN_URL + props.imageId
        }
      />
      <h2 className="font-bold">
        {props.name}
      </h2>
      <h3 className="font-semibold">
        {props.description}
      </h3>
      <h4 className="font-bold bg-green-400">
        {props.price / 100}rs
      </h4>
    </div>
  );
};

export default FoodItemCard;

import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearcart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    handleClearCart = () => {
        dispatch(clearcart());
    }

    return (
     <div>   
        <h1 className="font-bold text-3xl">Cart Items- {cartItems.length}</h1>
        <button className="p-2 m-5 bg-green-200" onClick={()=> handleClearCart()}>Clear Cart</button>

        <div className="flex flex-wrap">
        {cartItems.map((item) => 
        <FoodItemCard key={item.card.info.id} {...item.card.info}/>)}
        </div>
            
        
    </div>
    )
}
 export default Cart;
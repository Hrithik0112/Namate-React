import { directive } from "@babel/types";
import React from "react";
import ReactDOM, {createRoot} from "react-dom/client"
import { restaurantList } from "./constants";

/* 
    header
     -logo(title)
     -navitems(right side)
     -cart
    Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright 

*/
            

const Title = () => (

    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://orkfriend.com/wp-content/uploads/2023/03/Zwigato-Movie-Logo-PNG-794x420.png"
        />
    </a>
    
);

const Header = () => {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>contact</li>
                <li>cart</li>
            </ul>

            </div>
        </div>
    )
}

// const burgerKing = {
//     name : "Burger King",
//     image : "https://cmx.weightwatchers.com/assets-proxy/weight-watchers/image/upload/v1594406683/visitor-site/prod/ca/burgers_mobile_my18jv",
//     cuisins : ["aloo", "bhindi"],
//     rating: "4.3"
// }

const RestaurantCard = ({name , cloudinaryImageId , costForTwo , deliveryTime , cuisines}) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+
            cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{costForTwo/100}rs   
            -----  {deliveryTime} min</h4>
            
        </div>
    )
}

const Body = () => {
    return (
        <div className="list">
            {restaurantList.map((restaurant) => {
                return <RestaurantCard  {...restaurant.data} key={restaurant.data.id}/>
            })}
            
        </div>
        
    )
};

const Footer = () => {
    return <h3>this is Footer</h3>
}

const Applayout = () => {
    return (
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>

        </React.Fragment>
    )
}
    
    
    
    
    
const root = ReactDOM.createRoot(document.getElementById("root"));
    
    
root.render(<Applayout/>);
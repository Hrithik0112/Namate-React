import { directive } from "@babel/types";
import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
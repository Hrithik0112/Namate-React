import { directive } from "@babel/types";
import React, { Children } from "react";
import ReactDOM, {createRoot} from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Conatct";
import RestaurantMenu from "./components/RestaurantMenu";

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
        <Outlet/>
        <Footer/>

        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Applayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element :<About/>
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:resId",
                element : <RestaurantMenu/>
            }
        ]
    }
])
    
    
    
    
const root = ReactDOM.createRoot(document.getElementById("root"));
    
    
root.render(<RouterProvider router={appRouter}/>);
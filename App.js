import { directive } from "@babel/types";
import React from "react";
import ReactDOM from "react-dom/client"



// const heading = React.createElement("h1", {id: "title",}, "hello dosto");
// const head2 = React.createElement("h2", {id: "title",}, "hello dosto");
// const container = React.createElement("div", {id: "container",}, [heading , head2]);
            

const Title = () => (
    <h1 id="title" key="h2">
        namaste raect
    </h1>
);

const HeadComponent = () => {
    return (
        <div>
            <Title/>
            <h2>this is raect functional component</h2>
            <h2>this is h2 tag</h2>
        </div>
    )
}
    
    
    
    
    
    
const root = ReactDOM.createRoot(document.getElementById("root"));
    
    
root.render(<HeadComponent/>);
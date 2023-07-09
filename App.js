const heading = React.createElement("h1", {id: "title",}, "hello dosto");
const head2 = React.createElement("h2", {id: "title",}, "hello dosto");
const container = React.createElement("div", {id: "container",}, [heading , head2]);
            
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
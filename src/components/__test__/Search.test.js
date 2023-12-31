
import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../utils/store";
import Body from "../Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/dummyData";


global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json : () => { 
            return Promise.resolve(RESTAURANT_DATA)
        },
    });
});


test("shimmer should render on homapge", () => { 
    //load body
    

    const body = render(
        <StaticRouter>
          <Provider store={store}>
            <Body />
          </Provider>
        </StaticRouter>
      );

    const shimmer = body.getByTestId("shimmer");

    // expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(15);

    //cheack logo is loaded
});


// test("shimmer should render on homapge", async() => { 
//     //load body
    

//     const body = render(
//         <StaticRouter>
//           <Provider store={store}>
//             <Body />
//           </Provider>
//         </StaticRouter>
//       );
    
//     await waitFor(() => expect(body.getByTestId("search-btn")))  
     
//     const resList = body.getByTestId("res-list");

//     // expect(shimmer).toBeInTheDocument();
//     expect(resList.children.length).toBe(15);

//     console.log(shimmer);

//     //cheack logo is loaded
// })

test("Restaurants should load on Homepage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(() => expect(body.getByTestId("search-btn")));
  
    const resList = body.getByTestId("res-list");
  
    expect(resList.children.length).toBe(15);

});

test("Search for string(food) on Homepage", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(() => expect(body.getByTestId("search-btn")));
  
    const input = body.getByTestId("search-input");
  
    fireEvent.change(input, {
      target: {
        value: "food",
      },
    });
  
    const searchBtn = body.getByTestId("search-btn");
  
    fireEvent.click(searchBtn);
  
    const resList = body.getByTestId("res-list");
  
    expect(resList.children.length).toBe(1);
  });
  
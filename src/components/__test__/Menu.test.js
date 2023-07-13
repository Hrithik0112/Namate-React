import { MENU_DATA } from "../../mocks/dummyData";
import RestaurantMenu from "../RestaurantMenu";
import store from "../../utils/store";
import Header from "../Header";
import { Provider } from "react-redux";

import "@testing-library/jest-dom";
import {
  render,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";

// Creating a fetch() mock function with jest.fn().
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Shimmer should load on restaurant-detail page", async () => {
  // Load RestaurantDetail Component
  let restaurantDetail;
  await waitFor(() => {
    restaurantDetail = render(
      <StaticRouter>
        <Provider store={store}>
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  });
  // Shimmer should load on restaurant-detail page
  const shimmer =
    await restaurantDetail.getByTestId(
      "shimmer"
    );
  /* Instead of wrapping render() in waitFor() directly use findByTestId() */
  // const shimmer = await restaurantDetail.findByTestId("shimmer")
  expect(shimmer.children.length).toBe(
    15
  );
});

test("Menu should load on restaurant-detail page", async () => {
  // Load RestaurantDetail Component
  let restaurantDetail;
  await waitFor(() => {
    restaurantDetail = render(
      <StaticRouter>
        <Provider store={store}>
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  });
  // Shimmer should load on restaurant-detail page
  await waitFor(() =>
    expect(
      restaurantDetail.getByTestId(
        "menu-list"
      )
    )
  );
  const restaurantMenu =
    restaurantDetail.getByTestId(
      "menu-list"
    );
  expect(
    restaurantMenu.children.length
  ).toBe(2);
});

test("Add menu to cart", async () => {
  // load restaurant-detail & header
  let body;
  await waitFor(() => {
    body = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  });
  // check the total cart items on button click
  await waitFor(() =>
    expect(
      body.getByTestId("menu-list")
    )
  );
  // fire click thrice to add 3 menu itemsw
  const allAddBtn =
    body.getAllByTestId("add-btn"); // Note: getAllByTestId() vs getByTestId()
  fireEvent.click(allAddBtn[0]);
  fireEvent.click(allAddBtn[1]);
  fireEvent.click(allAddBtn[2]);
  // check whether 3-items has been added to the cart
  const cartItems = body.getByTestId(
    "cart-items"
  );
  expect(cartItems.innerHTML).toBe(
    " - 3"
  );
});

import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";

test("logo should render on loading of header", () => { 
    //load header
    

    const header = render(
        <StaticRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </StaticRouter>
      );

    const logo = header.getAllByTestId("logo");

    expect(logo[0].src).toBe("http://localhost/dummy.png");


    //cheack logo is loaded
})

test("inline status logo should render on loading of header", () => { 
    //load header
    

    const header = render(
        <StaticRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </StaticRouter>
      );

    const onlineStatus = header.getByTestId("online-status");

    expect(onlineStatus.innerHTML).toBe("✅");

});

test("cart should have 0 item on render of loading of header", () => { 
    //load header
    

    const header = render(
        <StaticRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </StaticRouter>
      );

    const cart = header.getByTestId("cart");

    expect(cart.innerHTML).toBe("cart -0-items");

});
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
import Logo from "../assets/img/Logo.png";

const Title = () => (
  <a href="/">
    <img
      className="w-32 ml-10"
      data-testid="logo"
      alt="logo"
      src={Logo}
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();

  const { profile } = useContext(
    UserContext
  );

  const cartItems = useSelector(
    (store) => store.cart.items
  );
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-950 shadow-lg">
      <Title />
      <div className="flex">
        {profile && (
          <h1 className="font-bold text-white">
            {profile.name}
          </h1>
        )}
        <ul className="flex py-8 font-bold text-white">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/about">
              about
            </Link>{" "}
          </li>
          <li className="px-2">
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">
              Instamart
            </Link>
          </li>

          <li className="px-2">
            <Link to="/cart">
              {" "}
              cart
              <span data-testid="cart-items">
                {" "}
                - {cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
        <h1 data-testid="online-status">
          {isOnline ? "✅" : "🔴"}
        </h1>
      </div>
    </div>
  );
};

export default Header;

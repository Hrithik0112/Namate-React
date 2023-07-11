import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";



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

    const isOnline = useOnline();
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/about">about</Link> </li>
                <li><Link to="/contact">Contact</Link></li>
                <li>cart</li>
                <li><Link to="/instamart">Instamart</Link></li>
            </ul>
            <h1>{isOnline ? "✅" : "🔴"}</h1>
            </div>
        </div>
    )
}

export default Header;
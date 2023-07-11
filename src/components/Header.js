import { Link } from "react-router-dom";

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
                <li><Link to="/">Home</Link></li>
                <li> <Link to="/about">about</Link> </li>
                <li><Link to="/contact">Contact</Link></li>
                <li>cart</li>
            </ul>

            </div>
        </div>
    )
}

export default Header;
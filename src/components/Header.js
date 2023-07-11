import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";



const Title = () => (

    <a href="/">
        <img
            className="w-32 ml-10"
            alt="logo"
            src="https://orkfriend.com/wp-content/uploads/2023/03/Zwigato-Movie-Logo-PNG-794x420.png"
        />
    </a>
    
);

const Header = () => {

    const isOnline = useOnline();
    return (
        <div className="flex justify-between bg-orange-950 shadow-lg">
            <Title/>
            <div className="flex">
            <ul className="flex py-8 font-bold text-white">
                <li className="px-2"><Link to="/">Home</Link></li>
                <li className="px-2"> <Link to="/about">about</Link> </li>
                <li className="px-2"><Link to="/contact">Contact</Link></li>
                <li className="px-2">cart</li>
                <li className="px-2"><Link to="/instamart">Instamart</Link></li>
            </ul>
            <h1>{isOnline ? "✅" : "🔴"}</h1>
            </div>
        </div>
    )
}

export default Header;
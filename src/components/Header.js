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
                <li>Home</li>
                <li>about</li>
                <li>contact</li>
                <li>cart</li>
            </ul>

            </div>
        </div>
    )
}

export default Header;
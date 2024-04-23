import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
        </ul>
    );
};

export default Nav;

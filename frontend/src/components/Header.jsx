import {useContext} from "react";
import AuthContext from "../context/AuthContext.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext);
    return (
        <div>
            <Link to="/">Home</Link>
            <span> | </span>
            {user ? (
                <Link onClick={logoutUser} to="/login">Logout</Link>
            ) : (
                <Link to="/login">Login</Link>
            )}
            {user && (
                <p>Hello {user.username}!</p>
            )}
        </div>
    );
};

export default Header;
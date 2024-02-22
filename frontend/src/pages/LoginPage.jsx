import {useContext} from 'react';
import AuthContext from "../context/AuthContext.jsx";

const LoginPage = () => {
    const {loginUser} = useContext(AuthContext);

    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter Username"/>
                <input type="password" name="password" placeholder="Enter Password"/>
                <input type="Submit"/>
            </form>
        </div>
    );
};

export default LoginPage;
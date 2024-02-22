import {createContext, useState} from 'react';
import {jwtDecode} from "jwt-decode";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    let [user, setUser] = useState(null);
    let [authTokens, setAuthTokens] = useState(null);
    let navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        });
        const data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    }

    const contextData = {
        user: user,
        loginUser: loginUser,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
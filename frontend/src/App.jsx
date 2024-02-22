import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Header from "./components/Header.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Header/>
                    <Routes>
                        <Route element={<PrivateRoutes/>}>
                            <Route exact path='/' element={<HomePage/>}/>
                        </Route>
                        <Route exact path='/login' element={<LoginPage/>}/>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App

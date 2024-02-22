import {useState, useEffect, useContext} from "react";
import AuthContext from "../context/AuthContext.jsx";

const HomePage = () => {
    let [notes, setNotes] = useState([]);
    let {authTokens, logoutUser} = useContext(AuthContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const response = await fetch("http://localhost:8000/api/notes/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + String(authTokens.access)
            }
        })
        const data = await response.json()
        if (response.status === 200) {
            setNotes(data)
        } else if (response.statusText === 'Unauthorized') {
            logoutUser()
        }
    }

    return (
        <div>
            <p>You are Logged in to the Homepage</p>
            <ul>
                {notes.map((note) => {
                    return <li key={note.id}>{note.body}</li>
                })}
            </ul>
        </div>
    );
}

export default HomePage;
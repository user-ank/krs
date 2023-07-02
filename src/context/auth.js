import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
// import {auth} from "../firebase"
// import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";


export const AuthProvider = ({ children }) => {

    const data = window.localStorage.getItem('_user');

    const [user, setUser] = useState(JSON.parse(data) ||  null);
    const navigate = useNavigate();

    function login(user) {
        setUser(user);
    }

    function logout() {
        setUser(null);
        window.localStorage.clear();
        navigate('/');
    }

    // function googleSignIn(){
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider);
    // // }

    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return(useContext(AuthContext));
}
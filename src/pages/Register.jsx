import { useContext, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import './css/Register.css'

export default function Register() {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
    
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                email: email,
                password: password,
                profile_picture: null
            }),
        });
        if(response.ok) {
            navigate("/login");
        }
    };

    return (
        <div>
            <h1>S'inscrire</h1>
            <form onSubmit={handleRegister} className="formRegister">
            <div className="inputRegister">
                <div>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div> 

                <div>
                    <label>Email :</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div> 

                <div>
                    <label>Mot de passe :</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>   
            </div> 
                <input type="submit" value="S'inscrire" />
            </form>
            <Link to="/login">Déjà inscrit ? Se connecter</Link>
        </div>
    );
};
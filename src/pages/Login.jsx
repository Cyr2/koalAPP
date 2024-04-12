import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function Login() {
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
    
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
            localStorage.setItem('token', data.authToken);
            const userResponse = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/auth/me', {
                headers: {
                    'Authorization': `Bearer ${data.authToken}`
                },
            });
    
            const userData = await userResponse.json();
            if (userResponse.ok) {
                setUser({ id: userData.id, name: userData.name});
                localStorage.setItem('userId', userData.id);
            } else {
                console.error(userData);
            }
    
            navigate("/");
        } else {
            alert(data.message)
        }
    };

    useEffect(() => {
    }, [user]);

    return (
        <div>
            <h1>Se connecter</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email :
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Mot de passe :
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Se connecter" />
            </form>
            <Link to="/register">Pas encore inscrit ?</Link>
        </div>
    );
};
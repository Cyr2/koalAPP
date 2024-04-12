import { NavLink } from 'react-router-dom';
import './css/Nav.css'
import { useContext } from "react";
import UserContext from '../contexts/UserContext';

export default function Nav() {
    const { user, setUser } = useContext(UserContext);
    return (
        <nav className='nav'>
            <ul>
                <NavLink to="/"><li>Accueil</li></NavLink>
                <NavLink to="/add"><li>Nouvelle question</li></NavLink>
                <NavLink to="/leaderboard"><li>Leader Board</li></NavLink>
            </ul>
            <ul className='ulUser'>
                <li>Bonjour, {user.name} {user.picture}</li>
                <NavLink to="/logout"><li>Déconnecter</li></NavLink>
            </ul>
        </nav>
    )
}
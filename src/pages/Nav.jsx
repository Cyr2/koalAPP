import { NavLink } from 'react-router-dom';
import './Nav.css'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <NavLink to="/"><li>Accueil</li></NavLink>
                <NavLink to="/add"><li>Nouvelle question</li></NavLink>
                <NavLink to="/leaderboard"><li>Leader Board</li></NavLink>
            </ul>
            <ul className='ulUser'>
                <li>bonjour, utilisateur</li>
                <NavLink to="/logout"><li>Déconnécter</li></NavLink>
            </ul>
        </nav>
    )
}
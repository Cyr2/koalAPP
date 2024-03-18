import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/add">New Question</NavLink></li>
                <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
            </ul>
        </nav>
    )
}
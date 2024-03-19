import { NavLink } from 'react-router-dom';
import './Nav.css'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/add">New Question</NavLink></li>
                <li><NavLink to="/leaderboard">Leader Board</NavLink></li>
            </ul>
            <ul className='ulUser'>
                <li>hello, user</li>
                <li><a href="">logout</a></li>
            </ul>
        </nav>
    )
}
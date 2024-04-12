import './NewQuestion.css'
import { useContext } from "react";
import UserContext from '../contexts/UserContext';

export default function Leaderboard() {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            <h1>Nouvelle question</h1>
            <div className="ask">
                <h2>{user.name}, question</h2>
                    <p>tu préfère ?</p>
                <form action="">
                    <input type="text" placeholder="Entrer le texte de l'option"/>
                    <input type="text" placeholder="Entrer le texte de l'option"/>
                    <input type="submit" value="Valider" className='valider'/>
                </form>
            </div>
                
        </>
    )
};
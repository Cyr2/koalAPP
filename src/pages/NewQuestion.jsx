import './NewQuestion.css'

export default function Leaderboard() {
    return (
        <>
            <h1>Nouvelle question</h1>
            <div className="ask">
                <h2>utilisateur, question</h2>
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
import './NewQuestion.css'

export default function Leaderboard() {
    return (
        <>
            <h1>New Question</h1>
            <div className="ask">
                <h2>user, ask</h2>
                    <p>tu préfère ?</p>
                <form action="">
                    <input type="text" placeholder="Enter Option One Text Here"/>
                    <input type="text" placeholder="Enter Option One Text Here"/>
                    <input type="submit" value="Sumbit" className='valider'/>
                </form>
            </div>
                
        </>
    )
};
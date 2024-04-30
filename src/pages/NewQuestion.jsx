import './css/NewQuestion.css'
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function NewQuestion() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [choices, setChoices] = useState(['', '']);

    const handleChoiceChange = (index, event) => {
        const newChoices = [...choices];
        newChoices[index] = event.target.value;
        setChoices(newChoices);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const questionResponse = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: user.id
            })
        });
        const questionData = await questionResponse.json();
        for (let choice of choices) {
            await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    choice: choice,
                    question_id: questionData.result1.id
                })
            });
        };

        navigate('/');
    };

    return (
        <>
            <h1>Nouvelle question</h1>
            <div className="ask">
                <h2>{user.name}, question</h2>
                <p>tu préfère ?</p>
                <form onSubmit={handleSubmit}>
                    {choices.map((choice, index) => (
                        <input key={index} type="text" placeholder="Entrer le texte de l'option" value={choice} onChange={(event) => handleChoiceChange(index, event)} />
                    ))}
                    <input type="submit" value="Valider" className='valider' />
                </form>
            </div>
        </>
    );
};
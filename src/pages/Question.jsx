import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './css/Question.css'

export default function Question() {
    const navigate = useNavigate();
    const url = window.location.pathname.split('/')[2];
    const { user, setUser } = useContext(UserContext);
    const [questions, isLoaded] = useFetch();
    const [renderList, setRenderList] = useState(<div>Loading...</div>);
    let selectedAnswer;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Récupérer l'ID de l'answer sélectionnée
        const answerData = {
            user_id: user.id,
            answer_id: parseInt(selectedAnswer),
            question_id: parseInt(url),
        };

        try {
            const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/user_answer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(answerData),
            });

            if (response.ok) {
                navigate('/');
            } else {
                console.error("Échec de l'envoi des données.");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi des données :", error);
        }
    }

    useEffect(() => {
        if (!isLoaded) {
            questions.forEach((question) => {
                if (question.question_id === parseInt(url)) {
                    setRenderList(
                        <div className='formQuestion'>
                            <h2>{question.author} demande</h2>
                            <h4>Tu préfères</h4>

                            <form action="" method='post' onSubmit={handleSubmit}>
                                <ul>
                                    {question.choices.map((choice) => (
                                        <li key={choice}>
                                            <input type='radio' id={choice} value={choice} name={question.question_id} onClick={()=> {
                                                selectedAnswer = question.answer_id[question.choices.indexOf(choice)];
                                            }}></input>
                                            <label htmlFor={choice}>{choice.charAt(0).toUpperCase() + choice.slice(1)}</label>
                                        </li>
                                    ))}
                                </ul>
                                <input type='submit' value='Envoyez'></input>
                            </form>
                        </div>
                    );
                }
            })
        }
    }, [isLoaded]);

    return renderList;
};

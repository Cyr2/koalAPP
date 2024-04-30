import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useFetch } from '../hooks/useFetch';
import './css/Question.css'

export default function Question() {
    const url = window.location.pathname.split('/')[2];
    const { user, setUser } = useContext(UserContext);
    const [questions, isLoaded] = useFetch();
    const [renderList, setRenderList] = useState(<div>Loading...</div>);
    let answers;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const answerData = {
            user_id: user.id,
            answer_id: "",
            question_id: parseInt(url),
        };

        // RECUPERER L'ID DE L'ANSWER

        console.log();
    }

    useEffect(() => {
        if (!isLoaded) {
            questions.map((questions) => {
                if (questions.question_id === parseInt(url)) {
                    answers = questions.choices;
                    console.log(questions);
                    setRenderList(
                        <div className='formQuestion'>
                            <h2>{questions.author} demande</h2>
                            <h4>Tu préfères</h4>

                            <form action="" method='post' onSubmit={handleSubmit}>
                                <ul>
                                    {questions.choices.map((choice) => (
                                        <li key={choice}>
                                            <input type='radio' id={choice} value={choice} name={questions.question_id}></input>
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
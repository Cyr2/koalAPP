import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFetchUserAnswer } from '../hooks/useFetchUserAnswer';
import './css/Question.css'
import { useFetchQuestionAnswer } from '../hooks/useFetchQuestionAnswer';

export default function Question() {
    const navigate = useNavigate();
    const url = window.location.pathname.split('/')[2];
    const { user, setUser } = useContext(UserContext);
    const [questions, isLoaded] = useFetch();
    const [userAnswer, isLoading, error] = useFetchUserAnswer();
    const [questionAnswer, isQuestionAnswerLoaded, questionAnswerError] = useFetchQuestionAnswer(url);
    const [renderList, setRenderList] = useState(<div>Loading...</div>);
    let selectedAnswer;

    const countAllAnswers = (questionId) => {
        return questionAnswer.filter(answer => answer.question_id === questionId).length;
    }

    const countAnswers = (questionId, answerId) => {
        return questionAnswer.filter(answer => answer.question_id === questionId && answer.answer_id === answerId).length;
    }

    const calcPourcentage = (questionId, answerId) => {
        return Math.round((countAnswers(questionId, answerId) / countAllAnswers(questionId)) * 100);
    }

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
                    const hasAnswered = Array.isArray(userAnswer) && userAnswer.find((element) => element.question_id === question.question_id);
                    setRenderList(
                        <div className='formQuestion'>
                            <h2>{question.author} demande</h2>
                            <h4>Tu préfères</h4>
    
                            {hasAnswered ? (
                                <ul>
                                    {question.choices.map((choice, index) => (
                                        <li key={choice}>
                                            <h4 htmlFor={choice}>{choice.charAt(0).toUpperCase() + choice.slice(1)}</h4>
                                            <p>
                                                {calcPourcentage(question.question_id, question.answer_id[index])}%
                                            </p>
                                            <p>
                                                {countAnswers(question.question_id, question.answer_id[index])} out of {countAllAnswers(question.question_id)} vote(s)
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
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
                            )}
                        </div>
                    );
                }
            })
        }
    }, [isLoaded]);

    return renderList;
};
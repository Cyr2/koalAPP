import { useState } from 'react';
import { useParams } from "react-router-dom";
import { allQuestions } from '../data/allQuestions'; 
import { v4 as uuidv4 } from 'uuid';

export default function Question() {
    const [questions, setQuestions] = useState(allQuestions());
    const questionId = useParams().id;
    const question = questions[questionId];

    const updateAnswer = (index, answer) => {
        const newQuestions = [...questions];
        newQuestions[index].answer = answer;
        setQuestions(newQuestions);
    };

    const changeAnswer = (id) => {
        const selectedChoice = document.querySelector(`input[name="choice"]:checked`).value;
        updateAnswer(id, selectedChoice);
    }

    const addNew = () => {
        
    };

    return (
        <>
            <button onClick={addNew}>Nouvelle question</button>
            <ul>
                {question.answer ? <li key={uuidv4()}>{question.answer}</li> : null}
                {question.question.map((choice, index) => {
                    return <li key={uuidv4()}><input type="radio" name="choice" id={index} value={choice} /><label htmlFor={index}>{choice}</label></li>
                })}
            </ul>
            <button className="color" onClick={() => changeAnswer(questionId)}>Envoyé</button>
        </>
    );
};
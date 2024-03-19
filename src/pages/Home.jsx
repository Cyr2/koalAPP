import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import AllQuestionsContext from '../contexts/Context';

export default function Home() {
    const [questions, isLoading, error] = useFetch();
    const choiseToObject = (data) => {
        return data.reduce((acc, curr) => {
            const existingQuestion = acc.find(item => item.id === curr.Q_id);
            if (existingQuestion) {
                existingQuestion.question.push(curr.choice);
            } else {
                acc.push({id: curr.Q_id, question: [curr.choice]});
            }
            return acc;
        }, []);
    };

    // Utiliser le contexte
    const context = useContext(AllQuestionsContext);
    useEffect(() => {
        const allQuestions = choiseToObject(questions);
        context.setAllQuestions(allQuestions);
    }, [questions]);

    return (
        <AllQuestionsContext.Provider value={context}>
            <h1>Accueil</h1>
            <ul className='tableQuestion'>
                {context.allQuestions.map((question, index) => {
                    const choices = question.question;
                    let choicesString = '';
                    if (choices.length > 1) {
                        choicesString = choices.slice(0, -1).join(', ') + ' ou ' + choices[choices.length - 1];
                    } else if (choices.length === 1) {
                        choicesString = choices[0];
                    }
                    return (
                        <li key={index}>
                            <Link to={`/questions/${index + 1}`}>
                                {"Tu préfères : " + choicesString + " ?"}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </AllQuestionsContext.Provider>
    )
}
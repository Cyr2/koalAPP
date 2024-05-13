import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useFetchUserAnswer } from '../hooks/useFetchUserAnswer';

export default function Home() {

    const [userAnswer, isLoading, error] = useFetchUserAnswer();

    const [questions, isLoaded] = useFetch();
    const [renderList, setRenderList] = useState(<div>Loading...</div>);

    useEffect(() => {
        if (!isLoaded) {
            setRenderList(
                <>
                    <h1>Accueil</h1>
                    <ul className='tableQuestion'>
                        <h5>Non répondu</h5>
                        {questions.map((question) => 
                            (!Array.isArray(userAnswer) || !userAnswer.find((element) => element.question_id === question.question_id)) &&
                                <li key={question.question_id}>
                                    <>
                                        <h3>{question.author.charAt(0).toUpperCase() + question.author.slice(1)} demande</h3>
                                        <p>{getChoice(question.choices)}</p>
                                        <Link to={`/question/${question.question_id}`}><button>Voir Sondage</button></Link>
                                    </>
                                </li>
                        )}
                    </ul>
                    <ul className='tableQuestion'>
                        <h5>Répondu</h5>
                        {questions.map((question) => 
                            Array.isArray(userAnswer) && userAnswer.find((element) => element.question_id === question.question_id) &&
                                <li key={question.question_id}>
                                    <>
                                        <h3>{question.author.charAt(0).toUpperCase() + question.author.slice(1)} demande</h3>
                                        <p>{getChoice(question.choices)}</p>
                                        <Link to={`/question/${question.question_id}`}><button>Voir Sondage</button></Link>
                                    </>
                                </li>
                        )}
                    </ul>
                </>
            );
        }
    }, [isLoaded]);

    function getChoice(choices){
        let title = `Tu préfères ${choices[0].charAt(0).toUpperCase() + choices[0].slice(1)}`
        for(let i = 1; i<choices.length; i++){
            if(i === choices.length - 1){
                title += ` ou ${choices[i].charAt(0).toUpperCase() + choices[i].slice(1)} ?`
            } else {
                title += `, ${choices[i].charAt(0).toUpperCase() + choices[i].slice(1)}`
            }
        }
        return title;
    }
    return renderList;
}
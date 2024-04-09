import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Home() {

    const [questions, isLoaded] = useFetch();
    const [renderList, setRenderList] = useState(<div>Loading...</div>);

    useEffect(() => {
        if (!isLoaded) {
            setRenderList(
                <>
                    <h1>Accueil</h1>
                    <ul className='tableQuestion'>
                        {questions.map((question) => (
                            <li key={question.id}>
                                <Link to={`/question/${question.id}`}>{getChoice(question.choice)}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            );
        }
    }, [isLoaded]);

    function getChoice(question){
        let title = `Tu préfères ? ${question[0].charAt(0).toUpperCase() + question[0].slice(1)}`
        for(let i = 1; i<question.length; i++){
            if(i === question.length - 1){
                title += ` ou ${question[i].charAt(0).toUpperCase() + question[i].slice(1)}`
            } else {
                title += `, ${question[i].charAt(0).toUpperCase() + question[i].slice(1)}`
            }
        }
        return title;
    }

    return renderList;
}
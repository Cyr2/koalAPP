import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function Question() {
    const url = window.location.pathname.split('/')[2];
    const [questions, isLoaded] = useFetch();
    const [renderList, setRenderList] = useState(<div>Loading...</div>);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        // try {
        //     const response = await fetch('http://your-server-url.com', {
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     const responseData = await response.json();
        //     console.log(responseData);
        // } catch (error) {
        //     console.error(error);
        // }
    }

    useEffect(() => {
        if(!isLoaded) {
            questions.map((questions) => {
                if(questions.question_id === parseInt(url)){
                    setRenderList(
                        <>
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
                        </>
                    );
                }
            })
        }
    }, [isLoaded]);

    return renderList;
};
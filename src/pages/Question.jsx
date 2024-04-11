import { useState, useEffect } from 'react';

function useFetch(q_id){
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/question/${q_id}`);
                const data = await response.json();
                setQuestions(data);
                setIsLoading(false);
            } catch (error) {
                setError(error)
            }
        };
        
        fetchData();
    }, []);

    return [questions, isLoading, error]
}


export default function Question() {
    const url = window.location.pathname.split('/')[2];
    const [data, isLoaded] = useFetch(url);
    const [renderList, setRenderList] = useState(<div>Loading...</div>);

    useEffect(() => {
        if (!isLoaded) {
            setRenderList(
                <>
                    <h2>{data.author.name} demande</h2>
                    <h4>Tu préfères</h4>
                    
                    <form action="" method='post'>
                        <ul>
                            {data.choice.map((choice) => (
                                <li key={choice}>
                                        <input type='radio' id={choice} value={choice} name={data.id}></input>
                                        <label htmlFor={choice}>{choice.charAt(0).toUpperCase() + choice.slice(1)}</label>
                                </li>
                            ))}
                        </ul>
                        <input type='submit' value='Envoyez'></input>
                    </form>
                </>
            );
        }
    }, [isLoaded]);

    return renderList;
}


// RAJOUTER LE RECUPERATION DE L'ID DE LA QUESTION DANS L'URL ET ENLEVER L'URL EN DUR ET METTRE DANS UN CONFIG.JSON OU .ENV
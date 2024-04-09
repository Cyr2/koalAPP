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
    const question = useFetch();
}


// RAJOUTER LE RECUPERATION DE L'ID DE LA QUESTION DANS L'URL ET ENLEVER L'URL EN DUR ET METTRE DANS UN CONFIG.JSON OU .ENV
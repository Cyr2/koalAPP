import { useState, useEffect } from 'react';

export function useFetch(){
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/question');
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
import { useState, useEffect } from 'react';

export function useFetch(id){
    const [isLoading, setIsLoading] = useState(true);
    const [questionData, setQuestionData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/user_answer/${id}`);
                const data = await response.json();
                setQuestionData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error)
            }
        };
        
        fetchData();
    }, []);

    return [questionData, isLoading, error]
}
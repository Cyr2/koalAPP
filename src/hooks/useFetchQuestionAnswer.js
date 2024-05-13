import { useState, useEffect, useContext } from 'react';

export function useFetchQuestionAnswer(question_Id){
    const [isLoading, setIsLoading] = useState(true);
    const [questionAnswer, setQuestionAnswer] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/questionAnswer/${question_Id}`);
                const data = await response.json();
                
                setQuestionAnswer(data);
                setIsLoading(false);
            } catch (error) {
                setError(error)
            }
        };
        
        fetchData();
    }, [question_Id]);
    return [questionAnswer, isLoading, error]
}
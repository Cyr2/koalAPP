import { useState, useEffect } from 'react';

export function useFetch(){
    const [isLoading, setIsLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/answer');
                const data = await response.json();
                
                // Trier et regrouper les données par question_id
                const sortedData = data.reduce((acc, current) => {
                    const questionIndex = acc.findIndex(item => item.question_id === current.question_id);
                    if (questionIndex > -1) {
                        acc[questionIndex].choices.push(current.choice);
                    } else {
                        acc.push({ question_id: current.question_id, choices: [current.choice], id: current.id});
                        // ON A ADD LE id: current.id MAIS PAS SUR QUE CA MARCHE ;)
                    }
                    return acc;
                }, []);

                // Obtenir l'auteur pour chaque question
                const questionDetails = await Promise.all(sortedData.map(async (question) => {
                    const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/question/${question.question_id}`);
                    const data = await response.json();
                    return { ...question, author: data.user.name };
                }));

                setQuestions(questionDetails);
                setIsLoading(false);
            } catch (error) {
                setError(error)
            }
        };
        
        fetchData();
    }, []);
    return [questions, isLoading, error]
}
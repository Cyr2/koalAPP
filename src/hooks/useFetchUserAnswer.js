import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export function useFetchUserAnswer(){
    const [isLoading, setIsLoading] = useState(true);
    const [userAnswer, setUserAnswer] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // try {
            //     const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/user_answer_user_id/12`);
            //     const data = await response.json();
            //     console.log(data);
                
            //     // setUserAnswer();
            //     setIsLoading(false);
            // } catch (error) {
            //     setError(error)
            // }

            // EN ATTENTE DE LA MISE A JOUR DE L'API
        };
        
        fetchData();
    }, []);
    return [userAnswer, isLoading, error]
}
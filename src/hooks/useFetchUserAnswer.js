import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export function useFetchUserAnswer(){
    const [isLoading, setIsLoading] = useState(true);
    const [userAnswer, setUserAnswer] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/userAnswer/${user.id}`);
                const data = await response.json();
                
                setUserAnswer(data);
                setIsLoading(false);
            } catch (error) {
                setError(error)
            }
        };
        
        fetchData();
    }, []);
    return [userAnswer, isLoading, error]
}
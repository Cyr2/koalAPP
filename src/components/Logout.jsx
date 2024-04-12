import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function Logout() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        setUser(null);
        localStorage.removeItem('userData');
        navigate('/login');
    }, [setUser, navigate]);

    return null;
}

export default Logout;
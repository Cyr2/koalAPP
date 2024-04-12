import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

function ProtectedRoute({ children }) {
    const { user, setUser } = useContext(UserContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
        navigate('/login');
        return;
        }

        fetch('https://x8ki-letl-twmt.n7.xano.io/api:bTJXwgaR/auth/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        })
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Not authenticated');
        }
        })
        .then(userData => {
        setUser({ id: userData.id, name: userData.name, picture : userData.profile_picture});
    console.log(userData)
        setIsAuthenticated(true);
        })
        .catch(error => {
        console.error('Error:', error);
        navigate('/login');
        });
    }, [navigate, setUser]);

    if (!isAuthenticated) {
        return null;
    }
    return children;
}

export default ProtectedRoute;
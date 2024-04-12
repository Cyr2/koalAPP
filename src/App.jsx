import './App.css'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

// Import Pages
import Nav from './pages/Nav'
import Home from './pages/Home'
import Question from './pages/Question'
import Leaderboard from './pages/LeaderBoard'
import NewQuestion from './pages/NewQuestion'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './components/Logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <ProtectedRoute>
        <Nav />
        <Home />
      </ProtectedRoute>
  },
  {
    path: '/question/:id',
    element: 
      <ProtectedRoute>
        <Nav />
        <Question />
      </ProtectedRoute>
  },
  {
    path: '/add',
    element: 
      <ProtectedRoute>
        <Nav />
        <NewQuestion />
      </ProtectedRoute>
  
  },
  {
    path: '/leaderboard',
    element: 
      <ProtectedRoute>
        <Nav />
        <Leaderboard />
      </ProtectedRoute>
  },
  {
    path: '/login',
    element: 
      <>
        <Login />
      </>
  },
  {
    path: '/logout',
    element: 
      <>
        <Logout />
      </>
  },
  {
    path: '/register',
    element: 
      <>
        <Register />
      </>
  }
])

function App() {
  const [user, setUser] = useState(null); 
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
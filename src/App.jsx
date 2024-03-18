import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react';

// Import Pages
import Nav from './pages/Nav'
import Home from './pages/Home'
import Question from './pages/Question'
import Leaderboard from './pages/LeaderBoard'
import NewQuestion from './pages/NewQuestion'

// Import Context
import AllQuestionsContext from './contexts/Context';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <>
        <Nav />
        <Home />
      </>
  },
  {
    path: '/questions/:id',
    element: 
      <>
        <Nav />
        <Question />
      </>
  },
  {
    path: '/add',
    element: 
      <>
        <Nav />
        <NewQuestion />
      </>
  
  },
  {
    path: '/leaderboard',
    element: 
      <>
        <Nav />
        <Leaderboard />
      </>
  }
])

function App() {
  const [allQuestions, setAllQuestions] = useState([]);

  return (
    <AllQuestionsContext.Provider value={{ allQuestions, setAllQuestions }}>
      <RouterProvider router={router} />
    </AllQuestionsContext.Provider>
  );
}

export default App;
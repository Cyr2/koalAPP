import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Import Pages
import Nav from './pages/Nav'
import Home from './pages/Home'
import Questions from './pages/Questions'
import Question from './pages/Question'
import Leaderboard from './pages/LeaderBoard'

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
    path: '/questions',
    element: 
      <>
        <Nav />
        <Questions />
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
    path: '/leaderboard',
    element: 
      <>
        <Nav />
        <Leaderboard />
      </>
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App

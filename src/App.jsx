import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Import Pages
import Nav from './pages/Nav'
import Home from './pages/Home'
import Question from './pages/Question'
import Leaderboard from './pages/LeaderBoard'
import NewQuestion from './pages/NewQuestion'


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
    path: '/question/:id',
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
  },
  {
    path: '/logout',
    element: 
      <>
        <Nav />
      </>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
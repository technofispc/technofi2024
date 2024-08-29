import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Events from './Components/Pages/Events'
import History from './Components/Pages/History';
import Event from './Components/Pages/Event';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/events',
    element: <Events />
  },

  {
    path: '/history',
    element: <History />
  },

  {
    path: '/events/:id',
    element: <Event /> 
  }
]);

function App() {

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Events from './Components/Pages/Events'
import History from './Components/Pages/History';
import Event from './Components/Pages/Event';
import T2024 from './Components/Pages/T2024';

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
  },

  {
    path: '/technofi2024',
    element: <T2024 />
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

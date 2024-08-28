import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Events from './Components/Pages/Events'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/events',
    element: <Events />
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

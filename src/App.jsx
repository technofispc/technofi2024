import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home /> 
    </>
  )
}

export default App

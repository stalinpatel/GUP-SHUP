import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Signup from './pages/authentication/Signup'
import Login from './pages/authentication/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button class="btn btn-primary">Button</button>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRegistrationForm from './components/UserRegistrationForm'
import UserInfo from './components/UserInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Registration Form</h1>
    <UserRegistrationForm/>
    <UserInfo/>
    </>
  )
}

export default App

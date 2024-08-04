import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from './pages/landingPage/LandingPage'
import Delivery from './pages/delivery/Delivery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Delivery />
    </div>
  )
}

export default App

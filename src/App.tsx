import { useState } from 'react'
import './App.css'
import Diceroller from './components/diceroller/diceroller.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <h1>DND</h1>
    <h2>DICEROLLER</h2>
    </header>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}></button>
    <Diceroller />
    </>
  )
}

export default App

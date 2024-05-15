import { useState } from 'react'
import './App.css'

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
    {/* <DiceRoller /> */}
    </>
  )
}

export default App

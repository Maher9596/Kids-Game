import React, {useState} from 'react'
import {GameContext} from './Context/Context'
import CountriesGame from './components/CountriesGame'
import MathGame from './components/MathGame'
import GeneralGame from './components/GeneralGame'
import FunGame from './components/FunGame'
import FinalResult from './components/FinalResult'
import Menu from './Menu'
import './App.css'

function App() {
  const [gameState, setGameState] = useState("menu")
  const [gameType, setGameType] = useState("")
  const [score, setScore] = useState(0)
  const [question, setQuestion] = useState(0)

  return (
    <div className="text-center">       
       <h1 className="bg-yellow-500 text-black text-3xl p-4 text-center font-bold font-mono">Kids Game</h1>
      <GameContext.Provider value={{gameState, setGameState, gameType, setGameType, score, setScore, question, setQuestion}}>
        {gameState === "menu" && <Menu />}
        {gameType === "countriesGame" && <CountriesGame />}
        {gameType === "mathGame" && <MathGame />}
        {gameType === "generalGame" && <GeneralGame />}
        {gameType === "funGame" && <FunGame />}
        {gameState === "finalResult" && <FinalResult />}
      </GameContext.Provider> 
    </div>   
  )
}

export default App;

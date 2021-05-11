import React, { useContext } from 'react'
import { GameContext } from '../Context/Context'

function FinalResult() {
    const {score, setScore, setGameState} = useContext(GameContext)

    const restart = () => {
        setGameState("menu")
        setScore(0)
    }

    return (
        <div className="mt-10">
            <h1 className="mb-32 text-3xl">Your score is {score}/6</h1>
            <button className="text-2xl border border-yellow-500 border-t-8 border-r-4 w-3/4 md:w-2/4 h-16 rounded-3xl focus:outline-none" onClick={restart}>Restart</button>
        </div>
    )
}

export default FinalResult

import React, { useState, useContext } from 'react'
import { GameContext } from '../Context/Context'
import { MathQ } from '../Utils/MathQuestions'

function MathGame() {
    const { setGameState, setGameType, score, setScore, question, setQuestion } = useContext(GameContext)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    setGameState("")

    const nextQuestion = () => {
          setQuestion(question + 1)
          if(MathQ[question].answer === selectedAnswer) {
              setScore(score + 1)
          }
          setSelectedAnswer("")
    }

    const endQuiz = () => {
        setGameState("finalResult")
        setGameType("")
        if(MathQ[question].answer === selectedAnswer) {
            setScore(score + 1)
        }
        setSelectedAnswer("")
        setQuestion(0)
    }
   
   
    return (
        <div className="mt-10">         
            <div className="flex  justify-center"><p className="w-3/4 md:w-2/4 text-3xl font-bold">{MathQ[question].prompt}</p></div> 
            <p className="mb-8">Question {question}/6</p>
            <div><button className="mb-10 text-xl  border border-yellow-500 w-3/4 md:w-2/4  rounded-xl focus:bg-yellow-500 focus:outline-none" onClick={() => {setSelectedAnswer("optionA")}}>{MathQ[question].optionA}</button></div>
            <div><button className="mb-32 text-xl border border-yellow-500 w-3/4 md:w-2/4  rounded-xl focus:bg-yellow-500 focus:outline-none" onClick={() => {setSelectedAnswer("optionB")}}>{MathQ[question].optionB}</button></div>
            {question === MathQ.length - 1 ? 
            <button className="text-2xl border border-yellow-500 border-t-8 border-r-4 w-3/4 md:w-2/4 h-16 rounded-3xl focus:outline-none" onClick={endQuiz}>End Quiz</button> 
            : 
            <button className="text-2xl border border-yellow-500 border-t-8 border-r-4 w-3/4 md:w-2/4 h-16 rounded-3xl focus:outline-none" onClick={nextQuestion}>Next Question</button>}                 
        </div>
    )
}

export default MathGame

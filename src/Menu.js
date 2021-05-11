import React, {useContext} from 'react'
import { GameContext } from './Context/Context'

function Menu() {
    const {setGameType} = useContext(GameContext)

    return (
        <div className="mt-10 flex flex-col items-center md:flex-row md:justify-around md:mt-32">
            <div className="text-center">
               <button className="text-2xl font-bold text-yellow-900 hover:bg-yellow-500 border border-yellow-500 border-t-8 border-r-4 focus-outline-none  focus:border-yellow-900 focus:bg-yellow-500 w-64 h-64 rounded-3xl mb-10" onClick={() => {setGameType("countriesGame")}}>Countries Game</button>
            </div>  
           <div className="text-center">
               <button className="text-2xl font-bold text-yellow-900 hover:bg-yellow-500 border border-yellow-500 border-t-8 border-r-4 focus-outline-none focus:border-yellow-900 focus:bg-yellow-500 w-64 h-64 rounded-3xl mb-10" onClick={() => {setGameType("generalGame")}}>General Knowledge Game</button>
            </div> 
           <div className="text-center">
               <button className="text-2xl font-bold text-yellow-900 hover:bg-yellow-500 border border-yellow-500 border-t-8 border-r-4 focus-outline-none focus:border-yellow-900 focus:bg-yellow-500 w-64 h-64 rounded-3xl mb-10" onClick={() => {setGameType("mathGame")}}>Math Game</button>
            </div> 
           <div className="text-center">
               <button className="text-2xl font-bold text-yellow-900 hover:bg-yellow-500 border border-yellow-500 border-t-8 border-r-4 focus-outline-none focus:border-yellow-900 focus:bg-yellow-500 w-64 h-64 rounded-3xl mb-10" onClick={() => {setGameType("funGame")}}>Fun Game</button>
            </div> 
        </div>
    )
}

export default Menu

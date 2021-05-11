import React, {useState, useEffect} from 'react'

function Timer() {
    const [time, setTime] = useState(50)

    const countDown = () => {
        setTime(time - 1)
    }
    
    useEffect(() => {
       setInterval(countDown, 1000)
    },)         

    return (
        <div>
            <p>{time}</p>
        </div>
    )
}

export default Timer

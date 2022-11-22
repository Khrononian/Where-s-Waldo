import React, { useState, useEffect } from "react";

const Timer = () => {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        setInterval(() => {
            setCounter(count => count + 1)
        }, 1000)
    }, [])

    const time = () => {
        const getSeconds = `0${counter % 60}`.slice(-2);
        const getMinutes = `0${Math.floor(counter / 60) % 60}`.slice(-2)
        const getHours = `0${Math.floor(counter / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
        <div>
            <p className="timer">{time()}</p>
        </div>
    )
}

export default Timer
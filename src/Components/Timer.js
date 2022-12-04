import React, { useState, useEffect } from "react";

const Timer = ({ characterCount }) => {
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState()
    
    useEffect(() => {
        const stopWatch = setInterval(() => {
            if (characterCount === 0) {
                clearInterval(stopWatch)
                console.log(window.localStorage)
                convertToSeconds(window.localStorage.getItem('conversion').split(':'))
            }
            else setCounter(count => count + 1)
            
        }, 1000)
        return () => {
            clearInterval(stopWatch)
        }
    }, [characterCount])
    console.log('FOOD', characterCount)
    // if (characterCount === 0) setCounter(0)
    const timer = () => {
        const getSeconds = `0${counter % 60}`.slice(-2);
        const getMinutes = `0${Math.floor(counter / 60) % 60}`.slice(-2)
        const getHours = `0${Math.floor(counter / 3600)}`.slice(-2)

        window.localStorage.setItem('conversion', `${getMinutes}:${getSeconds}`)
        window.localStorage.setItem('Time', `${getHours}:${getMinutes}:${getSeconds}`)
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    const convertToSeconds = ([minutes, seconds]) => {
        const conversion = Number(minutes) * 60 + Number(seconds)
        console.log(Number(minutes), seconds)
        window.localStorage.setItem('convertedTime', `${conversion} seconds`)
    }

    return (
        <div>
            <p className="timer">{timer()}</p>
        </div>
    )
}

export default Timer
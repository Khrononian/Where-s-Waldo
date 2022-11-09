import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import '../Assets/Selection.css'

const Selection = (props, { selected }) => {
    const location = useLocation()
    const [counter, setCounter] = useState(0);
    const [mousePos, setMousePos] = useState({})

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

    const getClickData = event => {
        console.log('Data', event)

        setMousePos({ x: event.pageX, y: event.pageY})
    }

    return (
        <div>
            <nav >
                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                <div>
                    <p className="timer">{time()}</p>
                </div>
                <div>
                    <img className="nav-img" src={location.state.left} alt='Selected'/>
                    <img className="nav-img" src={location.state.middle} alt='Selected'/>
                    <img className="nav-img" src={location.state.right} alt='Selected'/>
                </div>
            </nav>
            <div className="" style={{position: 'relative', height: 100 + 'px'}}>
                <img onClick={getClickData} className='image' src={window.localStorage.getItem('selected')} alt="Xbox" />
                <div className='block' style={{position: 'absolute', left: mousePos.x + 15 + 'px', top: mousePos.y - 90 + 'px', }}>
                    <button className='btns'>Name</button>
                    <button className='btns'>New Name</button>
                    <button className='btns'>Xtra Name</button>
                </div>
            </div>
            
        </div>
    )
}

export default Selection
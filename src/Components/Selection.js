import React, { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import { useLocation, Link } from "react-router-dom";
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, setDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import '../Assets/Selection.css'

const Selection = (props, { selected }) => {
    const location = useLocation()
    const [mousePos, setMousePos] = useState({})
    const [trigger, setTrigger] = useState(false)
    const [active, setActive] = useState(false)
    const [characterCount, setCharacterCount] = useState(3)
    const [board, setBoard] = useState([])
    const [boardName, setBoardName] = useState({name: ''})
    const inputRef = useRef()

    useEffect(() => {
        if (characterCount === 0) {
            setActive(true)
            window.scrollTo({top: 0, behavior: 'smooth'})
            document.body.style.overflowY = 'hidden'
        }
    }, [characterCount])

    useEffect(() => {
        const startBoard = async () => {
            const leaderBoard = await getDocs(collection(db, 'Leaderboard'))

            leaderBoard.forEach((doc) => {
                setBoard(prevBoard => [...prevBoard, {name: doc.data().name, time: doc.data().time  }])
            })
        }
        startBoard()
    }, [])

    const firebaseConfig = {
        apiKey: "AIzaSyB_ufhPEnldDS-sbGJKUcO-gRkCfyRbtx0",
        authDomain: "where-s-waldo-91063.firebaseapp.com",
        projectId: "where-s-waldo-91063",
        storageBucket: "where-s-waldo-91063.appspot.com",
        messagingSenderId: "948260331535",
        appId: "1:948260331535:web:e8e0d62055976aeea3437a",
        measurementId: "G-FV3HEYK898"
    };
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    // console.log('FIREBASE', analytics)
    const ContainerStyle = {
        position: 'relative',
        height: 10
    }
    const getLeaderBoard = async () => {
        // ACCESS DIFFERENT LEADERBOARDS BASED ON CONSOLE NAME (USE LOCATION)
        // FIND THE LAST ELEMENT IN ARRAY AND MATCH THE NAME WITH THE ONE IN LEADERBOARD
        const updatedName = doc(db, 'Leaderboard', inputRef.current.value)

        const leaderBoard = await getDocs(collection(db, 'Leaderboard'))
        leaderBoard.forEach((doc) => {
            console.log('ANOTHER, LENGTH', doc.data())
            const timeSplit = doc.data().time
            console.log(doc.data().time, timeSplit.split(':'), timeSplit.split(':').slice(2), Number(timeSplit.split(':').slice(2)), window.localStorage.getItem('Time').split(':').slice(1)[0])
            // FIND A WAY TO SET THE PLAYER'S TIME INTO THE STATE ARRAY
            // AND THEN POST THE DATA TO THE LEADERBACK (ALSO BACKEND) BASED OFF OF THE INDEX OF ARRAY
            if (Number(window.localStorage.getItem('Time').split(':').slice(2)) < Number(timeSplit.split(':').slice(2))
            && Number(window.localStorage.getItem('Time').split(':').slice(1)[0]) === 0 ) {
                console.log('WORK WORK', Number(window.localStorage.getItem('Time').split(':').slice(2)))
                setBoard(prevBoard => [...prevBoard].concat({name: boardName.name, time: window.localStorage.getItem('Time') }))
                console.log('WORK TWO', board)
            } else if (convertToSeconds([Number(window.localStorage.getItem('Time').split(':').slice(1)[0]), Number(window.localStorage.getItem('Time').split(':').slice(1)[1]) ])
            < convertToSeconds([Number(timeSplit.split(':').slice(1)[0]), Number(timeSplit.split(':').slice(1)[1])]) ) {
                console.log('WAVE')

                setBoard(prevBoard => [...prevBoard].concat({name: boardName.name, time: window.localStorage.getItem('Time') }))
            }
            setBoard(prevBoard => [...prevBoard].sort((a, b) => a.time.localeCompare(b.time)))

            setBoard(prevBoard => [...prevBoard, {name: doc.data().name, time: Number(timeSplit.split(':').slice(2)) }].filter((element, index) => index === prevBoard.findIndex(elem => elem.time === element.time && elem.name === element.name)))
            
            if (board.length > 15 && board[board.length - 1].name === doc.data().name) console.log('JUICY')
            // USE THE ABOVE CONDITION TO DELETE LAST INDEX OF ARRAY
        })
        await setDoc(updatedName, {
            name: inputRef.current.value,
            time: window.localStorage.getItem('Time')
        })
        
        if (board.length > 21) {
            console.log('LAST INDEX', board[board.length - 1])
            deleteDoc(doc(db, 'Leaderboard', board[board.length - 1].name))
        }
    }
    
    const selectedData = async event => {
        const characterData = await getDocs(collection(db, `${location.state.console}`))
        
        characterData.forEach((doc) => {
            console.log(event, mousePos, doc.data())
            console.log('BOARD', board)
            if (characterCount === 1) {
                console.log('INSIDE SELECTION')
            }
            if (mousePos.x >= doc.data().firstX && mousePos.x <= doc.data().secondX &&
            event.target.innerText === doc.data().name) {
                event.target.remove()
                setCharacterCount(count => count - 1)
            } else if (mousePos.x >= doc.data().halfX && mousePos.x <= doc.data().fullX &&
            event.target.innerText === doc.data().name) {
                setCharacterCount(count => count - 1)
                event.target.remove()
            }
            
        }) 
    }

    const convertToSeconds = ([minutes, seconds]) => {
        const conversion = Number(minutes) * 60 + Number(seconds)
        console.log(Number(minutes), seconds, conversion)
        window.localStorage.setItem('convertedTime', `${conversion}`)

        return window.localStorage.getItem('convertedTime')
    }

    const resetScroll = () => document.body.style.overflowY = 'auto'

    const setBoardUsername = event => {
        setBoardName({
            ...boardName,
            name: event.target.value
        })
    }

    const submitFormData = event => {
        event.preventDefault();
        
        setTrigger(true)
        // console.log('FORM', event.target, event, event.target[0].value, inputRef, inputRef.current.value)
        getLeaderBoard()
        // setActive(false)
        console.log('NAME', boardName)
    }
    // NUMS FOR CHARACTERS
    // PS2
    // PRINCE - [X: 447, Y: 1584] >= [X: 525, Y: 1666]
    // KRATOS - [X: 331, Y: 2227] >= [X: 466, Y: 2333]
    // DAXTER - [X: 1720, Y: 2040] >= [X: 1747, Y: 2080]

    // XBOX
    // GUM - [X: 1370, Y: 2696] >= [X: 1498, Y: 2796]
    // SPLINTER CELL - [X: 818, Y: 2146] >= [X: 876, Y: 2247]
    // RYU - [X: 1636, Y: 1853] >= [X: 1749, Y: 2009]

    // GameCube
    // TOAD - [X: 625, Y: 1892] >= [X: 673, Y: 1923]
    // SHIEK - [X: 814, Y: 2645] >= [X: 896, Y: 2758]
    // PEACH - [X: 1089, Y: 2925] >= [X: 1168, Y: 3065]

    // SUPER NINTENDO
    // LINK: [X: 1435, Y: 1977] >= [X: 1520, Y: 2093]
    // SAMUS: [X: 1005, Y: 676] >= [X: 1165, Y: 3011]
    // FALCO: [X: 750, Y: 2402] >= [X: 817, Y: 2452]

    const getClickData = event => {
        console.log('Data', event)

        setMousePos({ x: event.pageX, y: event.pageY})
    }
    let singleDigit = /^\d$/
    singleDigit.lastIndex = 8
    return (
        <div>
            <nav style={{position: 'relative'}}>
                <div>
                    <Link to={'/'} onClick={resetScroll}>Home</Link>
                </div>
                <Timer characterCount={characterCount} convertToSeconds={convertToSeconds}/>
                <div className="image-list">
                    <div >
                        <img className="nav-img" src={location.state.left} alt='Selected'/>
                        <p>{location.state.characters[0]}</p>
                    </div>
                    <div >
                        <img className="nav-img" src={location.state.middle} alt='Selected'/>
                        <p>{location.state.characters[1]}</p>
                    </div>
                    <div >
                        <img className="nav-img" src={location.state.right} alt='Selected'/>
                        <p>{location.state.characters[2]}</p>
                    </div>
                    
                    
                    
                </div>
                
            </nav>
            <div className="" style={ContainerStyle}>
                <img onClick={getClickData} className='image' src={window.localStorage.getItem('selected')} alt="Xbox" />
                {characterCount !== 0 ? <div className='block' style={{position: 'absolute', left: mousePos.x + 15 + 'px', top: mousePos.y - 90 + 'px', }}>
                    <button className='btns' onClick={selectedData}>{location.state.characters[0]}</button>
                    <button className='btns' onClick={selectedData}>{location.state.characters[1]}</button>
                    <button className='btns' onClick={selectedData}>{location.state.characters[2]}</button>
                </div> : null }
                {trigger === true ? <div className="cover">
                    <div className="first">
                        <h3>Time</h3>
                        <p>You found them all in {convertToSeconds(window.localStorage.getItem('conversion').split(':'))} seconds!</p>
                        {/* <p>{window.localStorage.getItem('Time')}</p> */}
                        <Link to={'/'} onClick={resetScroll}>Restart</Link>
                    </div>
                    <div className="second">
                        <h3>High Scores</h3>
                        {console.log('RETURN', board)}
                        <ol>
                            {board.map((element, index) => {
                                return (

                                    // <li key={index}>{element.name}: { singleDigit.test(element.time.toString()) ? `00:00:0${element.time}`
                                    // : Number(window.localStorage.getItem('Time').split(':').slice(1)[0]) === 0 && element.name === boardName.name ? `${element.time}`
                                    // : Number(window.localStorage.getItem('Time').split(':').slice(1)[0]) !== 0 && element.name === boardName.name ? `${element.time}`
                                    // : `${element.time}`}</li>
                                    <li key={index}>{element.name}: {element.time}</li>
                                    
                                )})
                            }
                        </ol>
                    </div>
                </div> : null}    
                {active === true ? <div className="form">
                    <form onSubmit={submitFormData}>
                        <h4>You found them all in {convertToSeconds(window.localStorage.getItem('conversion').split(':'))} seconds!</h4>
                        <p>Submit your username</p>
                        <label>Username</label>
                        <div className="btn">
                            <input ref={inputRef} 
                            type='text' 
                            id="username" 
                            placeholder="Enter 
                            username" maxLength={7} 
                            onChange={setBoardUsername}/>
                            <button type="submit" >Submit</button>
                        </div>    
                    </form>
                    </div>
                : null
                }
                
            </div>
            
        </div>
    )
}

export default Selection
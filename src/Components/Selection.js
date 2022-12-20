import React, { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import { useLocation, Link } from "react-router-dom";
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'
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
                // setBoard(prevBoard => [...prevBoard].concat({name: boardName.name, time: Number(window.localStorage.getItem('Time').split(':').slice(2))}))
                setBoard(prevBoard => [...prevBoard].concat({name: boardName.name, time: window.localStorage.getItem('Time') }))
                console.log('WORK TWO', board)
            } else if (convertToSeconds([Number(window.localStorage.getItem('Time').split(':').slice(1)[0]), Number(window.localStorage.getItem('Time').split(':').slice(1)[1]) ])
            < convertToSeconds([Number(timeSplit.split(':').slice(1)[0]), Number(timeSplit.split(':').slice(1)[1])]) ) {
                console.log('WAVE')

                setBoard(prevBoard => [...prevBoard].concat({name: boardName.name, time: window.localStorage.getItem('Time') }))
            }
            
            // setBoard(prevBoard => [...prevBoard, {name: doc.data().name, time: Number(timeSplit.split(':').slice(2)) }])
            setBoard(prevBoard => [...prevBoard].sort((a, b) => a.time.localeCompare(b.time)))

            setBoard(prevBoard => [...prevBoard, {name: doc.data().name, time: Number(timeSplit.split(':').slice(2)) }].filter((element, index) => index === prevBoard.findIndex(elem => elem.time === element.time && elem.name === element.name)))
            
        })
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
                // setTrigger(true)
                setCharacterCount(count => count - 1)
                if (event.target.parentElement.children.length === 1) {
                    event.target.parentElement.remove()
                    // getLeaderBoard()
                    
                }
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
    // PRINCE - [X: 221, Y: 842] >= [X: 259, Y: 884]
    // KRATOS - [X: 164, Y: 1147] >= [X: 226, Y: 1210]
    // DAXTER - [X: 842, Y: 1062] >= [X: 857, Y: 1086]

    // XBOX
    // GUM - [X: 672, Y: 1384] >= [X: 733, Y: 1437]
    // SPLINTER CELL - [X: 402, Y: 1113] >= [X: 431, Y: 1162]
    // RYU - [X: 799, Y: 972] >= [X: 860, Y: 1047]

    // GameCube
    // TOAD - [X: 306, Y: 991] >= [X: 327, Y: 1010]
    // SHIEK - [X: 393, Y: 1347] >= [X: 439, Y: 1416]
    // PEACH - [X: 521, Y: 1498] >= [X: 574, Y: 1568]

    // SUPER NINTENDO
    // LINK: [X: 702, Y: 1036] >= [X: 743, Y: 1091]
    // SAMUS: [X: 492, Y: 1473] >= [X: 573, Y: 1540]
    // FALCO: [X: 367, Y: 1239] >= [X: 400, Y: 1269]

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
                    <Link to={'/'}>Home</Link>
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
                <div className='block' style={{position: 'absolute', left: mousePos.x + 15 + 'px', top: mousePos.y - 90 + 'px', }}>
                    <button className='btns' onClick={selectedData}>{location.state.characters[0]}</button>
                    <button className='btns' onClick={selectedData}>{location.state.characters[1]}</button>
                    <button className='btns' onClick={selectedData}>{location.state.characters[2]}</button>
                </div>
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
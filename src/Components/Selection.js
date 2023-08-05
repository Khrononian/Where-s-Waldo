import React, { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import { useLocation, Link } from "react-router-dom";
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore'
import '../Assets/Selection.css'
import LeaderBoard from "./LeaderBoard";

const Selection = () => {
    const location = useLocation()
    const [mousePos, setMousePos] = useState({})
    const [trigger, setTrigger] = useState(false)
    const [active, setActive] = useState(false)
    const [characterCount, setCharacterCount] = useState(3)
    const [board, setBoard] = useState([])
    const [boardName, setBoardName] = useState({name: ''})
    const [display, setDisplay] = useState('flex')
    const inputRef = useRef()   
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

    useEffect(() => {
        if (characterCount === 0) {
            setActive(true)
            window.scrollTo({top: 0, behavior: 'smooth'})
            document.body.style.overflowY = 'hidden'
            document.body.style.overflowX = 'hidden'
        }
    }, [characterCount])

    useEffect(() => {
        const startBoard = async () => {
            const leaderBoard = await getDocs(collection(db, `${location.state.console}Board`))

            leaderBoard.forEach((doc) => {
                setBoard(prevBoard => [...prevBoard, {name: doc.data().name, time: doc.data().time  }])
            })
        }
        startBoard()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getLeaderBoard = async () => {
        const updatedName = doc(db, `${location.state.console}Board`, inputRef.current.value)
        const leaderBoard = await getDocs(collection(db, `${location.state.console}Board`))
        
        leaderBoard.forEach((doc) => {
            const timeSplit = doc.data().time

            if (Number(window.localStorage.getItem('Time').split(':').slice(2)) < Number(timeSplit.split(':').slice(2))
            && Number(window.localStorage.getItem('Time').split(':').slice(1)[0]) === 0 ) {
                setBoard(prevBoard => [...prevBoard].concat({name: boardName.name, time: window.localStorage.getItem('Time') }))
            } else if (convertToSeconds([Number(window.localStorage.getItem('Time').split(':').slice(1)[0]), Number(window.localStorage.getItem('Time').split(':').slice(1)[1]) ])
            < convertToSeconds([Number(timeSplit.split(':').slice(1)[0]), Number(timeSplit.split(':').slice(1)[1])]) ) {
                setBoard(prevBoard => [...prevBoard].concat({name: boardName.name, time: window.localStorage.getItem('Time') }))
            }
            setBoard(prevBoard => [...prevBoard].sort((a, b) => a.time.localeCompare(b.time)))
            setBoard(prevBoard => [...prevBoard, {name: doc.data().name, time: Number(timeSplit.split(':').slice(2)) }].filter((element, index) => index === prevBoard.findIndex(elem => elem.time === element.time && elem.name === element.name)))
        })
        await setDoc(updatedName, {
            name: boardName.name,
            time: window.localStorage.getItem('Time')
        })
        
        if (board.length > 21 && board[board.length - 1].name === doc.data().name) {
            deleteDoc(doc(db, 'Leaderboard', board[board.length - 1].name))
        }
    }

    const selectedData = async event => {
        const characterData = await getDocs(collection(db, `${location.state.console}`))
        const imageHeight = document.querySelector('.image')

        characterData.forEach((doc) => {
            if ((mousePos.x / window.innerWidth) * 100 >= doc.data().firstX && (mousePos.x / window.innerWidth) * 100 <= doc.data().secondX &&
            (mousePos.y / imageHeight.height) * 100 >= doc.data().firstNewY && (mousePos.y / imageHeight.height) * 100 <= doc.data().secondNewY && event.target.innerText === doc.data().name) {
                event.target.remove()
                setCharacterCount(count => count - 1)
            }
            
            console.log('Test', doc.data().firstX, doc.data().secondX, doc.data().firstNewY, doc.data().secondNewY, imageHeight.height)
        }) 
        setDisplay('none')
    }

    const convertToSeconds = ([minutes, seconds]) => {
        const conversion = Number(minutes) * 60 + Number(seconds)
       
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
        setActive(false)
        getLeaderBoard()
    }

    const getClickData = event => {
        setDisplay('flex')
        setMousePos({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY})
        console.log('Event', event, window.innerWidth, window.innerHeight, event.pageX, event.pageY)
        console.log('Image dims', event, event.target.height)
        console.log(mousePos.x, mousePos.y, (mousePos.x / window.innerWidth) * 100, (mousePos.y / event.target.height) * 100)
    }
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
            <div style={{position: 'relative', height: 10 + 'px'}}>
                <img onClick={getClickData} className='image' src={window.localStorage.getItem('selected')} alt="Xbox" />
                {characterCount !== 0 ? <div className='block' style={{position: 'absolute', left: mousePos.x + 10 + 'px', top: mousePos.y , display: display}}>
                    <button className='btns' onClick={selectedData}>{location.state.characters[0]}</button>
                    <button className='btns' onClick={selectedData}>{location.state.characters[1]}</button>
                    <button className='btns' onClick={selectedData}>{location.state.characters[2]}</button>
                </div> : null }

                <LeaderBoard 
                    trigger={trigger}
                    convertToSeconds={convertToSeconds}
                    resetScroll={resetScroll}
                    board={board}
                    active={active}
                    submitFormData={submitFormData}
                    inputRef={inputRef}
                    setBoardUsername={setBoardUsername}
                />
            </div>
        </div>
    )
}

export default Selection
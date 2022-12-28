import React from 'react'
import { Link } from "react-router-dom";

const LeaderBoard = ({ trigger, convertToSeconds, resetScroll, board, active, submitFormData, inputRef, setBoardUsername }) => {
  return (
    <div>
        {trigger === true ? <div className="cover">
            <div className="first">
                <h3>Time</h3>
                <p>You found them all in {convertToSeconds(window.localStorage.getItem('conversion').split(':'))} seconds!</p>
                <Link to={'/'} onClick={resetScroll}>Restart</Link>
            </div>
            <div className="second">
                <h3>High Scores</h3>
                <ol>
                    {board.map((element, index) => {
                        return (
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
                
                <div className="btn">
                    <label>Username</label>
                    <input ref={inputRef} 
                    type='text' 
                    id="username" 
                    placeholder="Enter 
                    username" maxLength={8} 
                    onChange={setBoardUsername}/>
                    <button type="submit" >Submit</button>
                </div>    
            </form>
            </div>
        : null}
    </div>
  )
}

export default LeaderBoard
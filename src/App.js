import './App.css';
import React from 'react';
import Station from './Components/Station'
import Box from './Components/Box'
import Gamecube from './Components/Gamecube'
import Nintendo from './Components/Nintendo'

const App = () => {
  const getMouseData = (event) => {
    console.log(event)
  }

  return (
    <div className="App">
      <header>
        <h1>Choose a stage!</h1>
      </header>
      <div className='grid'>
        <Station data={getMouseData} />
        <Box data={getMouseData} />
        <Gamecube data={getMouseData} />
        <Nintendo data={getMouseData} />
      </div>
      <button onClick={getMouseData}>Click</button>
    </div>
  );
}

export default App;

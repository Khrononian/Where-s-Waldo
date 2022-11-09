import './App.css';
import React, { useState, } from 'react';
import Stages from './Components/Stages'
import Selection from './Components/Selection'
import Gamecube from './Components/Gamecube'
import Nintendo from './Components/Nintendo'

const App = () => {
  const [image, setImage] = useState('');

  const getMouseData = (event) => {
    console.log(event, window, image)
    // setImage(event.target.currentSrc)
    window.localStorage.setItem('selected', event.target.currentSrc)
    setImage(event.target.currentSrc)
  }

  return (
    <div className="App">
      <header>
        <h1>Choose a stage!</h1>
        
      </header>
      
      <div className='stages'>
        
        <Stages data={getMouseData} image={image} />
      </div>
      <div className='block'>
        <button className='btns'>Name</button>
        <button className='btns'>New Name</button>
        <button className='btns'>Xtra Name</button>
      </div>
    </div>
  );
}

export default App;

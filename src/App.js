import './App.css';
import React, { useState, } from 'react';
import Stages from './Components/Stages'

const App = () => {
  const [image, setImage] = useState('');

  const getMouseData = (event) => {
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
    </div>
  );
}

export default App;

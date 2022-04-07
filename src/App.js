import React from 'react';
import Gallery from './Components/gallery';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="nav"> 
          <h2 className="logo"><span>Netflix</span>Shows</h2>
      </div>
      <Gallery />

    </div>
  );
}

export default App;

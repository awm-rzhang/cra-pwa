import React from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const App = () => {
  const launchCam = () => {
    console.log("hello")
  };

  return (
    <div className="App">
      <header className="App-header">
        <img onClick={launchCam} src={process.env.PUBLIC_URL + '/camera.png'} alt="logo" />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="icon-button-file"
          type="file"
          capture="environment"
        //onChange={(e) => handleCapture(e.target)}
        />

        <label htmlFor="icon-button-file">
          <button
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            take photo
          </button>
        </label>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';


const Camera = () => {
  const [source, setSource] = useState(`${process.env.PUBLIC_URL}/placeholder.png`);

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Box display="flex" justifyContent="center" border={1} width={200} height={200}>
          {source && <img src={source} alt={"snap"} width={200} height={200}></img>}
        </Box>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="icon-button-file"
          type="file"
          capture="environment"
          onChange={(e) => handleCapture(e.target)}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <CameraEnhanceIcon fontSize="large" color="primary" />
          </IconButton>
        </label>
      </header>
    </div>
  );
}

export default Camera;

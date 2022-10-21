import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CameraEnhance from '@mui/icons-material/CameraEnhance';
import { Bluetooth } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <CameraEnhance />, name: 'camera' },
  { icon: <Bluetooth />, name: 'bluetooth' },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleClick = (actionName) => {
    navigate(`/${actionName}`);
    handleClose();
  }

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipOpen={false}
            onClick={() => handleClick(action.name)}
            title="camera"
          />
        ))}
      </SpeedDial>
    </>
  );
}

import React from 'react';
import { Box } from '@mui/material';
import './SwitchCheckBox.css';

const SwitchCheckBox = () => {
  return (
    <Box>
      <label className="switch-checkbox">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </Box>
  );
}

export default SwitchCheckBox;

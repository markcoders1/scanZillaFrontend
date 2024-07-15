import React from 'react';
import { Box } from '@mui/material';
import './SwitchCheckBox.css';

const SwitchCheckBox = ({ theme }) => {
  return (
    <Box>
      <label className={`switch-checkbox ${theme}`}>
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </Box>
  );
}

export default SwitchCheckBox;

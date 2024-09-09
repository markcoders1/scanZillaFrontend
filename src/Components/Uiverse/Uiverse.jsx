import React from 'react';
import './Uiverse.css';
import { Box } from '@mui/material';

const Uiverse = ({ progress }) => {
  const percentage = typeof progress === 'string' ? parseFloat(progress) * 100 : progress;
  return (
    <>
    <Box sx={{mb:"3px", color:"#33333", fontSize:"0.8rem"}} >Analyzing</Box>
    <div className="loader1234" style={{ '--percentage': `${percentage}%` }} data-percentage={Math.round(percentage)}>
      {/* Removed inner div, as we use data-attribute for content now */}
    </div>
    </>
  );
};

export default Uiverse;
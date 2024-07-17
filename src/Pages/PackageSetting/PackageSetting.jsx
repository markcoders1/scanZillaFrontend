import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const PackageSetting = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const planName = queryParams.get('planName');
  const price = queryParams.get('price');
  const buttonText = queryParams.get('buttonText');

  return (
    <Box>
      <Typography variant="h4">Package Setting</Typography>
      <Typography variant="h6">Plan Name: {planName}</Typography>
      <Typography variant="h6">Price: ${price}</Typography>
      <Typography variant="h6">Button Text: {buttonText}</Typography>
    </Box>
  );
};

export default PackageSetting;
